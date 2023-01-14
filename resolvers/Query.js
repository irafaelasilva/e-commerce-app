exports.Query = {
  products: (_parent, _args, context) => {
    const { products } = context;
    return products;
  },
  product: (_parent, args, context) => {
    const { id } = args;
    const { products } = context;
    return products.find((product) => product.id === id);
  },
  categories: (_parent, _args, context) => {
    const { categories } = context;
    return categories;
  },
  category: (_parent, args, context) => {
    const { id } = args;
    const { categories } = context;
    return categories.find((category) => category.id === id);
  },
};
