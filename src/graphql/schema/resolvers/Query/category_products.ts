import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const category_products: NonNullable<
  QueryResolvers["category_products"]
> = async (_parent, _arg, _ctx) => {
  let category;

  if (_arg.productsOffset) {
    category = await prisma.category.findFirst({
      where: {
        slug: _arg.slug,
      },
      include: {
        products: {
          take: 4,
          skip: 4 * (_arg.productsOffset - 1),
        },
      },
    });
  } else {
    category = await prisma.category.findFirst({
      where: {
        slug: _arg.slug,
      },
      include: {
        products: true,
      },
    });
  }

  if (!category) {
    return null;
  }

  return {
    ...category,
    products: category.products.map((product) => ({
      ...product,
      categories: [],
      collections: [],
    })),
  };
};
