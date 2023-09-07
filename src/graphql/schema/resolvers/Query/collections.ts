import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const collections = await prisma.collection.findMany({
    include: {
      products: true,
    },
  });

  return collections.map((collection) => ({
    ...collection,
    products: collection.products.map((product) => ({
      ...product,
      collections: [],
      categories: [],
    })),
  }));
};
