import type { QueryResolvers } from "./../../../types.generated";
import { faker } from "@faker-js/faker";
export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  arg,
  _ctx
) => {
  const name = faker.commerce.productName();
  return {
    id: arg.id,
    name,
    slug: faker.helpers.slugify(name),
    price: faker.number.int({ min: 100, max: 10000 }),
    description: faker.commerce.productDescription(),
  };
};
