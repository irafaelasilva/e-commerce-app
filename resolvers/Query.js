const { categories, products } = require("../db");

exports.Query = {
  products: (_parent, _args, _context) => products,
  product: (_parent, args, _context) => {
    const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (_parent, _args, _context) => categories,
  category: (_parent, args, _context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
