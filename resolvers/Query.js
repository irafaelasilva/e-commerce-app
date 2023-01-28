exports.Query = {
  products: (_parent, args, context) => {
    const { products } = context;
    const { filter } = args;
    let filteredProducts = products;

    if (filter !== undefined) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
    }
    return filteredProducts;
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
