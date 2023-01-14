const { products } = require("../db");

exports.Category = {
  products: (parent, _args, _contex) => {
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
