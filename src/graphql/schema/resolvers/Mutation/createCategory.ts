import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createCategory: NonNullable<
  MutationResolvers["createCategory"]
> = async (_parent, _arg, _ctx) => {
  const category = await prisma.category.create({
    data: {
      name: _arg.input.name,
    },
    include: {
      products: true,
    },
  });

  return {
    ...category,
    products: category.products.map(product => ({
      ...product,
      categories: [],
      collections: [],
    })),
  };
};
