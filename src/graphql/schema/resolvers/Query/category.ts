import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const category = await prisma.category.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return {
    ...category,
    products: category.products.map(product => ({
      ...product,
      categories: [],
      collections: [],
    })),
  };
};
