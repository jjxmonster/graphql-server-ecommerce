import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteOrderItem: NonNullable<
  MutationResolvers["deleteOrderItem"]
> = async (_parent, _arg, _ctx) => {
  const order = await prisma.orderItem.delete({
    where: {
      id: _arg.id,
    },
  });

  if (!order) {
    return null;
  }

  return order.id;
};
