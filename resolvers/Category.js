exports.Category = {
  products: (parent, _args, contex) => {
    const categoryId = parent.id;
    const { products } = contex;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
