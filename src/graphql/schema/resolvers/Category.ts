import type { CategoryResolvers } from "./../../types.generated";

export const Category: CategoryResolvers = {
  id: parent => parent.id,
  name: parent => parent.name,
  products: parent => parent.products,
};
