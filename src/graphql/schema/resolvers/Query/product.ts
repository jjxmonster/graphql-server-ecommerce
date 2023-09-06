import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  arg,
  _ctx
) => {
  const product = await prisma.product.findUnique({
    where: {
      id: arg.id,
    },
  });

  return product;
};
