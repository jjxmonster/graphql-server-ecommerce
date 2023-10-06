/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createOrderItem as Mutation_createOrderItem } from "./schema/resolvers/Mutation/createOrderItem";
import { createProduct as Mutation_createProduct } from "./schema/resolvers/Mutation/createProduct";
import { createReview as Mutation_createReview } from "./schema/resolvers/Mutation/createReview";
import { deleteOrder as Mutation_deleteOrder } from "./schema/resolvers/Mutation/deleteOrder";
import { deleteOrderItem as Mutation_deleteOrderItem } from "./schema/resolvers/Mutation/deleteOrderItem";
import { deleteProduct as Mutation_deleteProduct } from "./schema/resolvers/Mutation/deleteProduct";
import { updateOrder as Mutation_updateOrder } from "./schema/resolvers/Mutation/updateOrder";
import { updateOrderItem as Mutation_updateOrderItem } from "./schema/resolvers/Mutation/updateOrderItem";
import { updateProduct as Mutation_updateProduct } from "./schema/resolvers/Mutation/updateProduct";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { ProductColorVariant } from "./schema/resolvers/ProductColorVariant";
import { ProductSizeVariant } from "./schema/resolvers/ProductSizeVariant";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { category_products as Query_category_products } from "./schema/resolvers/Query/category_products";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collection_products as Query_collection_products } from "./schema/resolvers/Query/collection_products";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { order_item as Query_order_item } from "./schema/resolvers/Query/order_item";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { products_by_keyword as Query_products_by_keyword } from "./schema/resolvers/Query/products_by_keyword";
import { products_similar as Query_products_similar } from "./schema/resolvers/Query/products_similar";
import { reviews as Query_reviews } from "./schema/resolvers/Query/reviews";
import { Review } from "./schema/resolvers/Review";
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    category: Query_category,
    category_products: Query_category_products,
    collection: Query_collection,
    collection_products: Query_collection_products,
    collections: Query_collections,
    order: Query_order,
    order_item: Query_order_item,
    product: Query_product,
    products: Query_products,
    products_by_keyword: Query_products_by_keyword,
    products_similar: Query_products_similar,
    reviews: Query_reviews,
  },
  Mutation: {
    createOrder: Mutation_createOrder,
    createOrderItem: Mutation_createOrderItem,
    createProduct: Mutation_createProduct,
    createReview: Mutation_createReview,
    deleteOrder: Mutation_deleteOrder,
    deleteOrderItem: Mutation_deleteOrderItem,
    deleteProduct: Mutation_deleteProduct,
    updateOrder: Mutation_updateOrder,
    updateOrderItem: Mutation_updateOrderItem,
    updateProduct: Mutation_updateProduct,
  },

  Category: Category,
  Collection: Collection,
  Order: Order,
  OrderItem: OrderItem,
  Product: Product,
  ProductColorVariant: ProductColorVariant,
  ProductSizeVariant: ProductSizeVariant,
  Review: Review,
};
