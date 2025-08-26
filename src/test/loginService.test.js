const loginUser = require("../services/loginService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Mock de la base de datos
jest.mock("../db/pool", () => ({
  query: jest.fn(),
}));

const pool = require("../db/pool");

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "token_mock"),
}));

describe("loginUser service", () => {
  const existingUser = {
    id: 1,
    email: "test@example.com",
    password: "$2b$10$abcdefghijklmnopqrstuv", // hash falso
    name: "Test User",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe lanzar un error si el email no existe", async () => {
    pool.query.mockResolvedValue([[]]); // sin resultados

    await expect(
      loginUser({ email: "noexiste@example.com", password: "123456" })
    ).rejects.toThrow("Usuario no encontrado");
  });

  it("debe lanzar un error si la contraseña es incorrecta", async () => {
    pool.query.mockResolvedValue([[existingUser]]);
    bcrypt.compare = jest.fn().mockResolvedValue(false);

    await expect(
      loginUser({ email: existingUser.email, password: "malpass" })
    ).rejects.toThrow("Contraseña incorrecta");
  });

  it("debe retornar token y user si los datos son correctos", async () => {
    pool.query.mockResolvedValue([[existingUser]]);
    bcrypt.compare = jest.fn().mockResolvedValue(true);

    const result = await loginUser({
      email: existingUser.email,
      password: "correcto",
    });

    expect(result).toEqual({
      token: "token_mock",
      user: {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
      },
    });
  });
});
