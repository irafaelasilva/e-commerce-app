exports.Product = {
  category: (parent, _args, contex) => {
    const categoryId = parent.categoryId;
    const { categories } = contex;
    return categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, _args, context) => {
    const productId = parent.id;
    const { reviews } = context;
    return reviews.filter((review) => review.productId === productId);
  },
};
