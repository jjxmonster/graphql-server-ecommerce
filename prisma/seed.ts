import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;

const colors = ["Black", "White"];
const sizes = ["S", "M", "XL"];

const category = await prisma.category.findFirst({
  where: {
    name: "Hoodies",
  },
});

const createReviews = async (productId: string) => {
  for (let i = 0; i < 5; i++) {
    const review = await prisma.review.create({
      data: {
        title: faker.lorem.words(3),
        content: faker.lorem.paragraph(),
        rating: Math.floor(Math.random() * 5) + 1,
        productId,
        email: faker.internet.email(),
        name: faker.person.firstName(),
      },
    });
  }
};

const collection = await prisma.collection.create({
  data: {
    slug: "winter-2023",
    name: "Winter 2023",
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
      image: faker.image.imageUrl(),
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
      collections: {
        connect: {
          id: collection.id,
        },
      },
    },
  });
  createReviews(createdProduct.id);
  console.log(`Created product with id: ${createdProduct.id}`);
}
