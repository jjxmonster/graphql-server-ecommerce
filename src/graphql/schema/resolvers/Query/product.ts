import { prisma } from "../../../../db";
import { QueryResolvers } from "../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const product = await prisma.product.findUnique({
    where: { id: _arg.id },
    include: {
      categories: true,
      collections: true,
      productColorVariants: true,
      productSizeVariants: true,
    },
  });

  if (!product) {
    return null;
  }

  return {
    ...product,
    product_color_variants: product.productColorVariants,
    product_size_variants: product.productSizeVariants,
    categories: [
      {
        ...product.categories[0],
        products: [],
      },
    ],
    collections: [
      {
        ...product.collections[0],
        products: [],
      },
    ],
  };
};
