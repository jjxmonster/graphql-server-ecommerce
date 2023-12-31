import { prisma } from "../../../../db";
import { calculateTotalForOrder } from "../../../../utils";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrderItem: NonNullable<
  MutationResolvers["createOrderItem"]
> = async (_parent, _arg, _ctx) => {
  let orderItem;
  const isProductInOrder = await prisma.orderItem.findFirst({
    where: {
      productId: _arg.productId,
      orderId: _arg.orderId,
    },
  });

  if (isProductInOrder) {
    orderItem = await prisma.orderItem.update({
      where: {
        id: isProductInOrder.id,
      },
      data: {
        quantity: {
          increment: _arg.quantity,
        },
      },
      include: { product: true },
    });
  } else {
    if (_arg.quantity < 1) {
      orderItem = await prisma.orderItem.delete({
        where: {
          id: _arg.productId,
        },
      });
    }
    orderItem = await prisma.orderItem.create({
      data: {
        orderId: _arg.orderId,
        productId: _arg.productId,
        quantity: _arg.quantity,
        size: _arg.size ?? "",
        color: _arg.color ?? "",
      },
      include: { product: true },
    });
  }

  if (!orderItem) {
    return null;
  }

  await calculateTotalForOrder(orderItem.orderId);

  return {
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
      weightedRating: orderItem.product.weightedRating,
      product_color_variants: [],
      product_size_variants: [],
      categories: [],
      collections: [],
    },
  };
};
