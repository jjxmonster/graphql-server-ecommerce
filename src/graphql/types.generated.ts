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
};

export type Mutation = {
  __typename?: "Mutation";
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createProduct?: Maybe<Product>;
  deleteOrder?: Maybe<Scalars["ID"]["output"]>;
  deleteOrderItem?: Maybe<Scalars["ID"]["output"]>;
  deleteProduct?: Maybe<Product>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateProduct?: Maybe<Product>;
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

export type MutationDeleteOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteOrderItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"]["input"];
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

export type ProductInput = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  price: Scalars["Int"]["input"];
  slug: Scalars["String"]["input"];
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
  category_products?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  order_item?: Maybe<OrderItem>;
  product?: Maybe<Product>;
  products: Array<Product>;
};

export type QueryCategory_ProductsArgs = {
  productsOffset?: InputMaybe<Scalars["Int"]["input"]>;
  slug: Scalars["String"]["input"];
};

export type QueryCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryOrder_ItemArgs = {
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
  Collection: ResolverTypeWrapper<Collection>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  Product: ResolverTypeWrapper<Product>;
  ProductColorVariant: ResolverTypeWrapper<ProductColorVariant>;
  ProductInput: ProductInput;
  ProductSizeVariant: ResolverTypeWrapper<ProductSizeVariant>;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
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
  ProductInput: ProductInput;
  ProductSizeVariant: ProductSizeVariant;
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
    RequireFields<QueryCollectionArgs, "id">
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
  order_item?: Resolver<
    Maybe<ResolversTypes["OrderItem"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOrder_ItemArgs, "id">
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
};
