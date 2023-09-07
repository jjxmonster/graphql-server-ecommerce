import { prisma } from "../../../../db";
import { QueryResolvers } from "../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const product = await prisma.product.findUnique({
    where: { id: _arg.id },
    include: {
      categories: true,
      collections: true,
    },
  });

  if (!product) {
    return null;
  }

  return {
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
  };
};
