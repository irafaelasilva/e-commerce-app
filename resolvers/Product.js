exports.Product = {
  category: (parent, _args, contex) => {
    const categoryId = parent.categoryId;
    const { categories } = contex;
    return categories.find((category) => category.id === categoryId);
  },
};
