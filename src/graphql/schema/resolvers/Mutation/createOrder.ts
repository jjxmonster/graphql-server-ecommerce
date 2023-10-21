import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrder: NonNullable<
  MutationResolvers["createOrder"]
> = async (_parent, _arg, _ctx) => {
  const order = await prisma.order.create({
    data: {
      total: _arg.total,
      email: null,
      status: "DRAFT",
    },
  });

  if (!order) {
    return null;
  }

  return {
    id: order.id,
    total: order.total,
    status: order.status,
    email: order.email,
    orderItems: [],
  };
};
