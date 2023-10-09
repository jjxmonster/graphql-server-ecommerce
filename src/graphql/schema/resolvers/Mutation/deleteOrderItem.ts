import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteOrderItem: NonNullable<
  MutationResolvers["deleteOrderItem"]
> = async (_parent, _arg, _ctx) => {
  const orderItem = await prisma.orderItem.delete({
    where: {
      id: _arg.id,
    },
  });

  const order = await prisma.order.findUnique({
    where: {
      id: orderItem.orderId,
    },
    include: {
      orderItems: true,
    },
  });

  if (order?.orderItems.length === 0) {
    await prisma.order.delete({
      where: {
        id: order.id,
      },
    });
  }

  if (!orderItem) {
    return null;
  }

  return orderItem.id;
};
