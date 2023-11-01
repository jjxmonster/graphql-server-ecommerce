import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// prisma.$connect();

// const products = await prisma.product.findMany();

// products.map(async product => {
//   const reviewsForProduct = await prisma.review.findMany({
//     where: {
//       productId: product.id,
//     },
//   });

//   const totalReviews = reviewsForProduct.length;
//   const totalRating = reviewsForProduct.reduce(
//     (acc, review) => acc + review.rating,
//     0
//   );
//   const weightedRating = totalRating / totalReviews;
//   await prisma.product.update({
//     where: {
//       id: product.id,
//     },
//     data: {
//       weightedRating: weightedRating,
//     },
//   });
// });

// prisma.$disconnect();

// const productsCount = 5;

// const colors = ["Black", "White"];
// const sizes = ["S", "M", "XL"];

// const productImage = [
//   "https://server916785.nazwa.pl/hosting/jj_app/img/1.webp",
//   "https://server916785.nazwa.pl/hosting/jj_app/img/2.webp",
//   "https://server916785.nazwa.pl/hosting/jj_app/img/3.webp",
//   "https://server916785.nazwa.pl/hosting/jj_app/img/9.webp",
//   "https://server916785.nazwa.pl/hosting/jj_app/img/19.webp",
// ];

// const category = await prisma.category.create({
//   data: {
//     name: "Hoodies",
//     slug: "hoodies",
//   },
// });

// const createReviews = async (productId: string) => {
//   for (let i = 0; i < 5; i++) {
//     const review = await prisma.review.create({
//       data: {
//         title: faker.lorem.words(3),
//         content: faker.lorem.paragraph(),
//         rating: Math.floor(Math.random() * 5) + 1,
//         productId,
//         email: faker.internet.email(),
//         name: faker.person.firstName(),
//       },
//     });
//   }
// };

// const collection = await prisma.collection.create({
//   data: {
//     slug: "winter-2023",
//     name: "Winter 2023",
//   },
// });

// for (let i = 0; i < productsCount; i++) {
//   const name = "Hoodie " + faker.lorem.words(1);

//   const createdProduct = await prisma.product.create({
//     data: {
//       name: name,
//       slug: faker.helpers.slugify(name).toLowerCase(),
//       description: faker.commerce.productDescription(),
//       price: Number(faker.commerce.price()) * 100,
//       image: productImage[i],
//       productSizeVariants: {
//         create: sizes.map(size => ({
//           name: size,
//           slug: `${size.toLowerCase()}`,
//         })),
//       },
//       productColorVariants: {
//         create: colors.map(color => ({
//           name: color,
//           slug: `${color.toLowerCase()}`,
//         })),
//       },
//       categories: {
//         connect: {
//           id: category?.id,
//         },
//       },
//       collections: {
//         connect: {
//           id: collection.id,
//         },
//       },
//     },
//   });
//   createReviews(createdProduct.id);
//   console.log(`Created product with id: ${createdProduct.id}`);
// }
