import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
      collections: true,
    },
  });

  return products.map((product) => ({
    ...product,
    categories: [
      {
        ...product.categories[0],
        products: [],
      },
    ],
    collections: [
      {
        ...product.collections[0],
        products: [],
      },
    ],
  }));
};
