import type { CollectionResolvers } from "./../../types.generated";

export const Collection: CollectionResolvers = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  products: (parent) => parent.products,
};
