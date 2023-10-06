import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products: Array<Product>;
  slug: Scalars["String"]["output"];
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products: Array<Product>;
  slug: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createReview?: Maybe<Review>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
};

export type MutationCreateOrderArgs = {
  total: Scalars["Int"]["input"];
};

export type MutationCreateOrderItemArgs = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  orderId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
  size?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateReviewArgs = {
  content: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  productId: Scalars["String"]["input"];
  rating: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationUpdateOrderArgs = {
  id: Scalars["ID"]["input"];
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateOrderItemArgs = {
  id: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
};

export type Order = {
  __typename?: "Order";
  id: Scalars["ID"]["output"];
  orderItems: Array<OrderItem>;
  status?: Maybe<Scalars["String"]["output"]>;
  total: Scalars["Int"]["output"];
};

export type OrderItem = {
  __typename?: "OrderItem";
  color: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  product: Product;
  quantity: Scalars["Int"]["output"];
  size: Scalars["String"]["output"];
};

export type Product = {
  __typename?: "Product";
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Int"]["output"];
  product_color_variants: Array<Maybe<ProductColorVariant>>;
  product_size_variants: Array<Maybe<ProductSizeVariant>>;
  slug: Scalars["String"]["output"];
};

export type ProductColorVariant = {
  __typename?: "ProductColorVariant";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  slug: Scalars["String"]["output"];
};

export type ProductSizeVariant = {
  __typename?: "ProductSizeVariant";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  slug: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  categories: Array<Category>;
  category?: Maybe<Category>;
  category_products?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collection_products?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: Array<Product>;
  products_by_keyword: Array<Product>;
  products_similar: Array<Product>;
  reviews: Array<Review>;
};

export type QueryCategoryArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryCategory_ProductsArgs = {
  productsOffset?: InputMaybe<Scalars["Int"]["input"]>;
  slug: Scalars["String"]["input"];
};

export type QueryCollectionArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryCollection_ProductsArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryOrderArgs = {
  id: Scalars["ID"]["input"];
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProductArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProductsArgs = {
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProducts_By_KeywordArgs = {
  keyword: Scalars["String"]["input"];
};

export type QueryProducts_SimilarArgs = {
  category: Scalars["String"]["input"];
  productId: Scalars["ID"]["input"];
};

export type QueryReviewsArgs = {
  productId: Scalars["ID"]["input"];
};

export type Review = {
  __typename?: "Review";
  content: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  product: Product;
  rating: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Category: ResolverTypeWrapper<Category>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Collection: ResolverTypeWrapper<Collection>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  Product: ResolverTypeWrapper<Product>;
  ProductColorVariant: ResolverTypeWrapper<ProductColorVariant>;
  ProductSizeVariant: ResolverTypeWrapper<ProductSizeVariant>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  ID: Scalars["ID"]["output"];
  String: Scalars["String"]["output"];
  Collection: Collection;
  Mutation: {};
  Int: Scalars["Int"]["output"];
  Order: Order;
  OrderItem: OrderItem;
  Product: Product;
  ProductColorVariant: ProductColorVariant;
  ProductSizeVariant: ProductSizeVariant;
  Query: {};
  Review: Review;
  Boolean: Scalars["Boolean"]["output"];
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, "total">
  >;
  createOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateOrderItemArgs,
      "orderId" | "productId" | "quantity"
    >
  >;
  createReview?: Resolver<
    Maybe<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateReviewArgs,
      "content" | "email" | "name" | "productId" | "rating" | "title"
    >
  >;
  updateOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderArgs, "id">
  >;
  updateOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderItemArgs, "id" | "quantity">
  >;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  orderItems?: Resolver<
    Array<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = {
  color?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  size?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  collections?: Resolver<
    Array<ResolversTypes["Collection"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  product_color_variants?: Resolver<
    Array<Maybe<ResolversTypes["ProductColorVariant"]>>,
    ParentType,
    ContextType
  >;
  product_size_variants?: Resolver<
    Array<Maybe<ResolversTypes["ProductSizeVariant"]>>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductColorVariantResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProductColorVariant"] = ResolversParentTypes["ProductColorVariant"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSizeVariantResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProductSizeVariant"] = ResolversParentTypes["ProductSizeVariant"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, "slug">
  >;
  category_products?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategory_ProductsArgs, "slug">
  >;
  collection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCollectionArgs, "slug">
  >;
  collection_products?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCollection_ProductsArgs, "slug">
  >;
  collections?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
    ParentType,
    ContextType
  >;
  order?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, "id">
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, "id">
  >;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    Partial<QueryProductsArgs>
  >;
  products_by_keyword?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProducts_By_KeywordArgs, "keyword">
  >;
  products_similar?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProducts_SimilarArgs, "category" | "productId">
  >;
  reviews?: Resolver<
    Array<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    RequireFields<QueryReviewsArgs, "productId">
  >;
};

export type ReviewResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductColorVariant?: ProductColorVariantResolvers<ContextType>;
  ProductSizeVariant?: ProductSizeVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
};
