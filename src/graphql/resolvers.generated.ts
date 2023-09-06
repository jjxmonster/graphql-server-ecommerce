/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { createCategory as Mutation_createCategory } from "./schema/resolvers/Mutation/createCategory";
import { createCollection as Mutation_createCollection } from "./schema/resolvers/Mutation/createCollection";
import { createProduct as Mutation_createProduct } from "./schema/resolvers/Mutation/createProduct";
import { deleteCategory as Mutation_deleteCategory } from "./schema/resolvers/Mutation/deleteCategory";
import { deleteCollection as Mutation_deleteCollection } from "./schema/resolvers/Mutation/deleteCollection";
import { deleteProduct as Mutation_deleteProduct } from "./schema/resolvers/Mutation/deleteProduct";
import { updateCategory as Mutation_updateCategory } from "./schema/resolvers/Mutation/updateCategory";
import { updateCollection as Mutation_updateCollection } from "./schema/resolvers/Mutation/updateCollection";
import { updateProduct as Mutation_updateProduct } from "./schema/resolvers/Mutation/updateProduct";
import { Product } from "./schema/resolvers/Product";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    category: Query_category,
    collection: Query_collection,
    collections: Query_collections,
    product: Query_product,
    products: Query_products,
  },
  Mutation: {
    createCategory: Mutation_createCategory,
    createCollection: Mutation_createCollection,
    createProduct: Mutation_createProduct,
    deleteCategory: Mutation_deleteCategory,
    deleteCollection: Mutation_deleteCollection,
    deleteProduct: Mutation_deleteProduct,
    updateCategory: Mutation_updateCategory,
    updateCollection: Mutation_updateCollection,
    updateProduct: Mutation_updateProduct,
  },

  Category: Category,
  Collection: Collection,
  Product: Product,
};
