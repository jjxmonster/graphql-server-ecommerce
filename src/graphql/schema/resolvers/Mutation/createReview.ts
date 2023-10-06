import { prisma } from "../../../../db";
import type { MutationResolvers } from "./../../../types.generated";
export const createReview: NonNullable<
  MutationResolvers["createReview"]
> = async (_parent, _arg, _ctx) => {
  const review = await prisma.review.create({
    data: {
      title: _arg.title,
      content: _arg.content,
      rating: _arg.rating,
      name: _arg.name,
      email: _arg.email,
      productId: _arg.productId,
    },
    include: { product: true },
  });

  if (!review) {
    return null;
  }
  return {
    ...review,
    product: {
      id: review.productId,
      name: review.product.name,
      price: review.product.price,
      description: review.product.description,
      image: review.product.image,
      slug: review.product.slug,
      product_color_variants: [],
      product_size_variants: [],
      categories: [],
      collections: [],
    },
  };
};
