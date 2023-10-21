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
    id: review.id,
    title: review.title,
    rating: review.rating,
    content: review.content,
    productId: review.productId,
    name: review.name,
    email: review.email,
    product: {
      id: review.productId,
      name: review.product.name,
      price: review.product.price,
      description: review.product.description,
      image: review.product.image,
      slug: review.product.slug,
      weightedRating: review.product.weightedRating,
      product_color_variants: [],
      product_size_variants: [],
      categories: [],
      collections: [],
    },
  }));
};
