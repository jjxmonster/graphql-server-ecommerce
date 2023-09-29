import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const products_by_keyword: NonNullable<
  QueryResolvers["products_by_keyword"]
> = async (_parent, _arg, _ctx) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [{ name: { contains: _arg.keyword, mode: "insensitive" } }],
    },
    include: {
      categories: true,
      collections: true,
    },
  });

  return products.map((product) => ({
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
