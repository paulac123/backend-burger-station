# Burger Station - Backend

Backend de **Burger Station**, app de gestión de restaurante. Node.js + Express, con PostgreSQL (Supabase), autenticación JWT y tests con Jest.

## Demo en vivo

- Frontend: https://fronted-burger-station.vercel.app/
- API: https://backend-burger-station.onrender.com

## Tecnologías

Node.js · Express · PostgreSQL (Supabase) · JWT · Joi · Jest

## Funcionalidades principales

- Gestión de productos (CRUD)
- Registro y autenticación de usuarios (JWT)
- Creación de órdenes (rutas protegidas)

## Endpoints de la API

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| GET | `/` | Mensaje de bienvenida | No |
| GET | `/api/menu` | Lista el menú completo | No |
| GET | `/api/menu/:id` | Productos por categoría | No |
| POST | `/api/login` | Inicio de sesión | No |
| POST | `/api/user` | Registro de usuario | No |
| POST | `/api/orders` | Crear una orden | Sí (Bearer token) |

## Variables de entorno

```
DATABASE_URL=   # conexión a PostgreSQL (Supabase)
PORT=           # opcional, default 3000
JWT_SECRET=     # clave para firmar tokens
```

## Automatización / DevOps

- **Keep-alive con GitHub Actions** (`.github/workflows/keep-alive.yml`): ping cada 3 días a `/api/menu` para que Supabase no pause el proyecto por inactividad (límite de 7 días en el plan gratuito) y Render no duerma el backend.

## Instalación

1. `npm install`
2. Configura `.env` (ver variables arriba)
3. `npm run dev`

## Autor

**Paula Cruz** — Desarrolladora Fullstack — https://paulacruzlo.com

## Repositorio

https://github.com/paulac123/backend-burger-station
