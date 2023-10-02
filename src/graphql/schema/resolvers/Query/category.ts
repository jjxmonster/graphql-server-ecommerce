import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const category = await prisma.category.findFirst({
    where: {
      slug: _arg.slug,
    },
  });

  if (!category) {
    return null;
  }

  return {
    ...category,
    products: [],
  };
};
