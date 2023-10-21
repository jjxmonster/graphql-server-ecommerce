import { Status } from "@prisma/client";
import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const updateOrder: NonNullable<
  MutationResolvers["updateOrder"]
> = async (_parent, _arg, _ctx) => {
  const order = await prisma.order.update({
    where: { id: _arg.id },
    data: { status: _arg.status as Status, email: _arg.email },
  });

  if (!order) {
    return null;
  }

  return {
    id: order.id,
    total: order.total,
    status: order.status,
    orderItems: [],
  };
};
