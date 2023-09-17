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
};

export type CategoryInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products: Array<Product>;
};

export type CollectionInput = {
  name: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  categoryCreate?: Maybe<Category>;
  categoryDelete?: Maybe<Category>;
  categoryUpdate?: Maybe<Category>;
  createCollection?: Maybe<Collection>;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createProduct?: Maybe<Product>;
  deleteCollection?: Maybe<Collection>;
  deleteOrder?: Maybe<Scalars["ID"]["output"]>;
  deleteOrderItem?: Maybe<Scalars["ID"]["output"]>;
  deleteProduct?: Maybe<Product>;
  updateCollection?: Maybe<Collection>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateProduct?: Maybe<Product>;
};

export type MutationCategoryCreateArgs = {
  input: CategoryInput;
};

export type MutationCategoryDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCategoryUpdateArgs = {
  id: Scalars["ID"]["input"];
  input: CategoryInput;
};

export type MutationCreateCollectionArgs = {
  input: CollectionInput;
};

export type MutationCreateOrderArgs = {
  status: Status;
  total: Scalars["Int"]["input"];
};

export type MutationCreateOrderItemArgs = {
  productId: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
};

export type MutationCreateProductArgs = {
  input: ProductInput;
};

export type MutationDeleteCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteOrderItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateCollectionArgs = {
  id: Scalars["ID"]["input"];
  input: CollectionInput;
};

export type MutationUpdateOrderArgs = {
  id: Scalars["ID"]["input"];
  status: Status;
};

export type MutationUpdateOrderItemArgs = {
  id: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
};

export type MutationUpdateProductArgs = {
  id: Scalars["ID"]["input"];
  input: ProductInput;
};

export type Order = {
  __typename?: "Order";
  id: Scalars["ID"]["output"];
  orderItems: Array<OrderItem>;
  status: Status;
  total: Scalars["Int"]["output"];
};

export type OrderItem = {
  __typename?: "OrderItem";
  id: Scalars["ID"]["output"];
  product: Product;
  quantity: Scalars["Int"]["output"];
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
  slug: Scalars["String"]["output"];
};

export type ProductInput = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  price: Scalars["Int"]["input"];
  slug: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  getOrder?: Maybe<Order>;
  getOrderItem?: Maybe<OrderItem>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type QueryCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetOrderItemArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProductArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProductsArgs = {
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Status =
  | "CANCELED"
  | "DELIVERED"
  | "PENDING"
  | "PROCESSING"
  | "SHIPPED";

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
  CategoryInput: CategoryInput;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionInput: CollectionInput;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  ID: Scalars["ID"]["output"];
  String: Scalars["String"]["output"];
  CategoryInput: CategoryInput;
  Collection: Collection;
  CollectionInput: CollectionInput;
  Mutation: {};
  Int: Scalars["Int"]["output"];
  Order: Order;
  OrderItem: OrderItem;
  Product: Product;
  ProductInput: ProductInput;
  Query: {};
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  categoryCreate?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCategoryCreateArgs, "input">
  >;
  categoryDelete?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCategoryDeleteArgs, "id">
  >;
  categoryUpdate?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCategoryUpdateArgs, "id" | "input">
  >;
  createCollection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCollectionArgs, "input">
  >;
  createOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, "status" | "total">
  >;
  createOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderItemArgs, "productId" | "quantity">
  >;
  createProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, "input">
  >;
  deleteCollection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCollectionArgs, "id">
  >;
  deleteOrder?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOrderArgs, "id">
  >;
  deleteOrderItem?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOrderItemArgs, "id">
  >;
  deleteProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductArgs, "id">
  >;
  updateCollection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCollectionArgs, "id" | "input">
  >;
  updateOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderArgs, "id" | "status">
  >;
  updateOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderItemArgs, "id" | "quantity">
  >;
  updateProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, "id" | "input">
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
  status?: Resolver<ResolversTypes["Status"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
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
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, "id">
  >;
  collection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCollectionArgs, "id">
  >;
  collections?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
    ParentType,
    ContextType
  >;
  getOrder?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOrderArgs, "id">
  >;
  getOrderItem?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOrderItemArgs, "id">
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, "id">
  >;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType,
    Partial<QueryProductsArgs>
  >;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
