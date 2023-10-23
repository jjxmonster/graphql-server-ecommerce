import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const reviews: NonNullable<QueryResolvers["reviews"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const reviews = await prisma.review.findMany({
    where: {
      productId: _arg.productId,
    },
    include: { product: true },
  });

  if (!reviews) {
    return [];
  }

  return reviews.map((review) => ({
    ...review,
    product: {
      ...review.product,
      product_color_variants: [],
      product_size_variants: [],
      categories: [],
      collections: [],
    },
  }));
};
