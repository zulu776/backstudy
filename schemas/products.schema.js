const Joi = require('joi');

const ids = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: ids.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
