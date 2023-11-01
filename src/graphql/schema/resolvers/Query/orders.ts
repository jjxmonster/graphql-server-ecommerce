import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const orders: NonNullable<QueryResolvers["orders"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const orders = await prisma.order.findMany({
    where: { email: _arg.email },
    include: { orderItems: { include: { product: true } } },
  });

  if (!orders) {
    return [];
  }

  return orders.map((order) => ({
    ...order,
    orderItems: order.orderItems.map((orderItem) => ({
      ...orderItem,
      product: {
        ...orderItem.product,
        product_color_variants: [],
        product_size_variants: [],
        categories: [],
        collections: [],
      },
    })),
  }));
};
