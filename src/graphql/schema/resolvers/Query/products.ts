import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  let products;

  if (_arg.offset) {
    products = await prisma.product.findMany({
      take: 4,
      skip: 4 * (_arg.offset - 1),
      include: {
        categories: true,
        collections: true,
      },
    });
  } else {
    products = await prisma.product.findMany({
      include: {
        categories: true,
        collections: true,
      },
    });
  }

  return products.map(product => ({
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
