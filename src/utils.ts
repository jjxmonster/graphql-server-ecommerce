import { prisma } from "./db";

export async function calculateTotalForOrder(orderId: string) {
  const orderItems = await prisma.orderItem.findMany({
    where: {
      orderId,
    },
    include: {
      product: true,
    },
  });

  let total = 0;

  for (const orderItem of orderItems) {
    total += orderItem.quantity * orderItem.product.price;
  }

  await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      total,
    },
  });
}
