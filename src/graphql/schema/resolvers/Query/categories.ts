import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  return categories.map((category) => ({
    ...category,
    products: category.products.map((product) => ({
      ...product,
      categories: [],
      collections: [],
    })),
  }));
};
