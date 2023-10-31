import { prisma } from "../../../../db";
import { calculateTotalForOrder } from "../../../../utils";
import type { MutationResolvers } from "./../../../types.generated";
export const updateOrderItem: NonNullable<
  MutationResolvers["updateOrderItem"]
> = async (_parent, _arg, _ctx) => {
  const orderItem = await prisma.orderItem.update({
    where: {
      id: _arg.id,
    },
    data: {
      quantity: _arg.quantity,
    },
    include: { product: true },
  });

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
