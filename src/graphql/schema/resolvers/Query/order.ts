import { Status } from "@prisma/client";
import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const order: NonNullable<QueryResolvers["order"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let order;

  if (_arg.status) {
    order = await prisma.order.findUnique({
      where: { id: _arg.id, status: Status[_arg.status as Status] },
      include: { orderItems: { include: { product: true } } },
    });
  } else {
    order = await prisma.order.findUnique({
      where: { id: _arg.id },
      include: { orderItems: { include: { product: true } } },
    });
  }

  if (!order) {
    return null;
  }

  return {
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
  };
};
