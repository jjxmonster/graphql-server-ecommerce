import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrderItem: NonNullable<
  MutationResolvers["createOrderItem"]
> = async (_parent, _arg, _ctx) => {
  const orderItem = await prisma.orderItem.create({
    data: {
      orderId: _arg.orderId,
      productId: _arg.productId,
      quantity: _arg.quantity,
    },
    include: { product: true },
  });

  await prisma.order.update({
    where: { id: _arg.orderId },
    data: {
      total: {
        increment: _arg.quantity,
      },
    },
  });

  if (!orderItem) {
    return null;
  }

  return {
    id: orderItem.id,
    quantity: orderItem.quantity,
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
  };
};
