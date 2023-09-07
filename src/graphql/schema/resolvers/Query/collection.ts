import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const collection = await prisma.collection.findUnique({
    where: { id: _arg.id },
    include: {
      products: true,
    },
  });

  if (!collection) {
    return null;
  }

  return {
    ...collection,
    products: collection.products.map((product) => ({
      ...product,
      collections: [],
      categories: [],
    })),
  };
};
