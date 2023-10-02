import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const collection = await prisma.collection.findFirst({
    where: {
      slug: _arg.slug,
    },
  });

  if (!collection) {
    return null;
  }

  return {
    ...collection,
    products: [],
  };
};
