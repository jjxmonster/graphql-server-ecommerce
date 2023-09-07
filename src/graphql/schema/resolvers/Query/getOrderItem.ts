import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const getOrderItem: NonNullable<QueryResolvers["getOrderItem"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const orderItem = await prisma.orderItem.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      product: true,
    },
  });

  if (!orderItem) {
    return null;
  }

  return {
    ...orderItem,
    product: {
      ...orderItem.product,
      categories: [],
      collections: [],
    },
  };
};
