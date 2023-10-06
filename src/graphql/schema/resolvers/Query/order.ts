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
    id: order.id,
    total: order.total,
    status: order.status,
    orderItems: order.orderItems.map((orderItem) => ({
      id: orderItem.id,
      quantity: orderItem.quantity,
      size: orderItem.size,
      color: orderItem.color,
      product: {
        id: orderItem.productId,
        name: orderItem.product.name,
        price: orderItem.product.price,
        description: orderItem.product.description,
        image: orderItem.product.image,
        slug: orderItem.product.slug,
        product_color_variants: [],
        product_size_variants: [],
        categories: [],
        collections: [],
      },
    })),
  };
};
