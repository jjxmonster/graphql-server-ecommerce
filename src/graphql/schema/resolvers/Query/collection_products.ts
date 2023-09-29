import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const collection_products: NonNullable<
  QueryResolvers["collection_products"]
> = async (_parent, _arg, _ctx) => {
  const collection = await prisma.collection.findFirst({
    where: {
      slug: _arg.slug,
    },
    include: {
      products: true,
    },
  });

  if (!collection) {
    return null;
  }

  return {
    ...collection,
    products: collection.products.map(product => ({
      ...product,
      categories: [],
      collections: [],
      product_color_variants: [],
      product_size_variants: [],
    })),
  };
};
