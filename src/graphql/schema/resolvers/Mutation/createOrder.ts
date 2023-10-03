import { Status } from "@prisma/client";
import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrder: NonNullable<
  MutationResolvers["createOrder"]
> = async (_parent, _arg, _ctx) => {
  const order = await prisma.order.create({
    data: {
      total: _arg.total,
      status: Status.DRAFT,
    },
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
