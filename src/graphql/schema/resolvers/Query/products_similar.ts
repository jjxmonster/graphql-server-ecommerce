import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const products_similar: NonNullable<
  QueryResolvers["products_similar"]
> = async (_parent, _arg, _ctx) => {
  const similarProducts = await prisma.product.findMany({
    where: {
      categories: {
        some: {
          slug: _arg.category,
        },
      },
      NOT: {
        id: _arg.productId,
      },
    },
    include: {
      categories: true,
      collections: true,
    },
    take: 4,
  });

  return similarProducts.map((product) => ({
    ...product,
    categories: [
      {
        ...product.categories[0],
        products: [],
      },
    ],
    product_color_variants: [],
    product_size_variants: [],
    collections: [
      {
        ...product.collections[0],
        products: [],
      },
    ],
  }));
};
