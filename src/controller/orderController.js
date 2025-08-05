const OrderService = require("../services/orderService");
const OrderDetailServices = require("../services/orderDetailServices");
const productService = require("../services/productService");
const sendMail = require("../services/sendGridService");

const service = new OrderService();
const detailService = new OrderDetailServices();
//const productService = new ProductService();

const calcularTotal = (orderDetails) => {
  return orderDetails.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};

const createOrder = async (req, res, next) => {
  try {
    const { products } = req.body; // <--- productos en array
    const user_id = req.user.id;

    const newOrder = await service.createOrder({ user_id });
    const order_id = newOrder.id;

    const productPromises = products.map(async (product) => {
      const realProduct = await productService.getProductById(
        product.product_id
      );
      return await detailService.addProduct({
        order_id,
        product_id: product.product_id,
        quantity: product.quantity,
        price: realProduct.price,
      });
    });

    const orderDetails = await Promise.all(productPromises);

    const total = calcularTotal(orderDetails);
    await service.updateOrderTotal(order_id, total);

    await sendMail({
      to: req.user.email,
      subject: "gracias por tu compra",
      text: "Recibimos tu orden",
      html: "<h1> Gracias por tu compra ya lo estamos preparando <h1>",
    });

    res.status(201).json({
      order: newOrder,
      details: orderDetails,
      total: total,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createOrder;
