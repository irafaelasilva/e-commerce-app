const { categories } = require("../db");

exports.Product = {
  category: (parent, _args, _contex) => {
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
