import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;

const colors = ["Black", "White"];
const sizes = ["S", "M", "XL"];

const category = await prisma.category.create({
  data: {
    name: "T-Shirts",
    slug: "t-shirts",
  },
});

// const collection = await prisma.collection.create({
//   data: {
//     slug: "winter-2023",
//     name: "Winter 2023",
//   },
// });

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      image: faker.image.url(),
      productSizeVariants: {
        create: sizes.map(size => ({
          name: size,
          slug: `${size.toLowerCase()}`,
        })),
      },
      productColorVariants: {
        create: colors.map(color => ({
          name: color,
          slug: `${color.toLowerCase()}`,
        })),
      },
      categories: {
        connect: {
          id: category.id,
        },
      },
    },
  });

  console.log(`Created product with id: ${createdProduct.id}`);
}
