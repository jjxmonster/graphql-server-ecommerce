/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { categoryCreate as Mutation_categoryCreate } from "./schema/resolvers/Mutation/categoryCreate";
import { categoryDelete as Mutation_categoryDelete } from "./schema/resolvers/Mutation/categoryDelete";
import { categoryUpdate as Mutation_categoryUpdate } from "./schema/resolvers/Mutation/categoryUpdate";
import { createCollection as Mutation_createCollection } from "./schema/resolvers/Mutation/createCollection";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createOrderItem as Mutation_createOrderItem } from "./schema/resolvers/Mutation/createOrderItem";
import { createProduct as Mutation_createProduct } from "./schema/resolvers/Mutation/createProduct";
import { deleteCollection as Mutation_deleteCollection } from "./schema/resolvers/Mutation/deleteCollection";
import { deleteOrder as Mutation_deleteOrder } from "./schema/resolvers/Mutation/deleteOrder";
import { deleteOrderItem as Mutation_deleteOrderItem } from "./schema/resolvers/Mutation/deleteOrderItem";
import { deleteProduct as Mutation_deleteProduct } from "./schema/resolvers/Mutation/deleteProduct";
import { updateCollection as Mutation_updateCollection } from "./schema/resolvers/Mutation/updateCollection";
import { updateOrder as Mutation_updateOrder } from "./schema/resolvers/Mutation/updateOrder";
import { updateOrderItem as Mutation_updateOrderItem } from "./schema/resolvers/Mutation/updateOrderItem";
import { updateProduct as Mutation_updateProduct } from "./schema/resolvers/Mutation/updateProduct";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { getOrder as Query_getOrder } from "./schema/resolvers/Query/getOrder";
import { getOrderItem as Query_getOrderItem } from "./schema/resolvers/Query/getOrderItem";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    category: Query_category,
    collection: Query_collection,
    collections: Query_collections,
    getOrder: Query_getOrder,
    getOrderItem: Query_getOrderItem,
    product: Query_product,
    products: Query_products,
  },
  Mutation: {
    categoryCreate: Mutation_categoryCreate,
    categoryDelete: Mutation_categoryDelete,
    categoryUpdate: Mutation_categoryUpdate,
    createCollection: Mutation_createCollection,
    createOrder: Mutation_createOrder,
    createOrderItem: Mutation_createOrderItem,
    createProduct: Mutation_createProduct,
    deleteCollection: Mutation_deleteCollection,
    deleteOrder: Mutation_deleteOrder,
    deleteOrderItem: Mutation_deleteOrderItem,
    deleteProduct: Mutation_deleteProduct,
    updateCollection: Mutation_updateCollection,
    updateOrder: Mutation_updateOrder,
    updateOrderItem: Mutation_updateOrderItem,
    updateProduct: Mutation_updateProduct,
  },

  Category: Category,
  Collection: Collection,
  Order: Order,
  OrderItem: OrderItem,
  Product: Product,
};
