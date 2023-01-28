exports.Category = {
  products: (parent, args, contex) => {
    const categoryId = parent.id;
    const { products } = contex;
    const { filter } = args;
    const catergoryProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    let filteredCategoryProducts = catergoryProducts;

    if (filter !== undefined) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
    }
    return filteredCategoryProducts;
  },
};
