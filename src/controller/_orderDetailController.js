const OrderDetailServices = require("../services/orderDetailServices");

const service = new OrderDetailServices();

const addProductToOrder = async (req, res, next) => {
  try {
    const body = req.body;
    const newOrderDetail = await service.addProduct(body);
    res.status(201).json(newOrderDetail);
  } catch (error) {
    next(error);
  }
};
module.exports = addProductToOrder;
