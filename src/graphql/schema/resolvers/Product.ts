import type { ProductResolvers } from "./../../types.generated";

export const Product: ProductResolvers = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  slug: (parent) => parent.slug,
  description: (parent) => parent.description,
  price: (parent) => parent.price,
  image: (parent) => parent.image,
  categories: (parent) => parent.categories,
  collections: (parent) => parent.collections,
};
