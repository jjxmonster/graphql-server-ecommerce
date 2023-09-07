import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;

const category = await prisma.category.create({
  data: {
    name: "Hoodies",
  },
});

const collection = await prisma.collection.create({
  data: {
    name: "Autumn 2023",
  },
});

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      image: faker.image.url(),
      categories: {
        connect: {
          id: category.id,
        },
      },
      collections: {
        connect: {
          id: collection.id,
        },
      },
    },
  });

  console.log(`Created product with id: ${createdProduct.id}`);
}
