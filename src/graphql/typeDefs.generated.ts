import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 5, end: 13 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 18, end: 20 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 22, end: 24 } },
              loc: { start: 22, end: 24 },
            },
            loc: { start: 22, end: 25 },
          },
          directives: [],
          loc: { start: 18, end: 25 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 28, end: 32 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 34, end: 40 },
              },
              loc: { start: 34, end: 40 },
            },
            loc: { start: 34, end: 41 },
          },
          directives: [],
          loc: { start: 28, end: 41 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 44, end: 48 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 50, end: 56 },
              },
              loc: { start: 50, end: 56 },
            },
            loc: { start: 50, end: 57 },
          },
          directives: [],
          loc: { start: 44, end: 57 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 60, end: 68 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 71, end: 78 },
                  },
                  loc: { start: 71, end: 78 },
                },
                loc: { start: 71, end: 79 },
              },
              loc: { start: 70, end: 80 },
            },
            loc: { start: 70, end: 81 },
          },
          directives: [],
          loc: { start: 60, end: 81 },
        },
      ],
      loc: { start: 0, end: 83 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 90, end: 95 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 100, end: 110 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 113, end: 121 },
                  },
                  loc: { start: 113, end: 121 },
                },
                loc: { start: 113, end: 122 },
              },
              loc: { start: 112, end: 123 },
            },
            loc: { start: 112, end: 124 },
          },
          directives: [],
          loc: { start: 100, end: 124 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 127, end: 135 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 136, end: 140 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 142, end: 148 },
                  },
                  loc: { start: 142, end: 148 },
                },
                loc: { start: 142, end: 149 },
              },
              directives: [],
              loc: { start: 136, end: 149 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 152, end: 160 },
            },
            loc: { start: 152, end: 160 },
          },
          directives: [],
          loc: { start: 127, end: 160 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category_products",
            loc: { start: 163, end: 180 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 181, end: 185 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 187, end: 193 },
                  },
                  loc: { start: 187, end: 193 },
                },
                loc: { start: 187, end: 194 },
              },
              directives: [],
              loc: { start: 181, end: 194 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productsOffset",
                loc: { start: 196, end: 210 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 212, end: 215 },
                },
                loc: { start: 212, end: 215 },
              },
              directives: [],
              loc: { start: 196, end: 215 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 218, end: 226 },
            },
            loc: { start: 218, end: 226 },
          },
          directives: [],
          loc: { start: 163, end: 226 },
        },
      ],
      loc: { start: 85, end: 228 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 234, end: 244 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 249, end: 251 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 253, end: 255 },
              },
              loc: { start: 253, end: 255 },
            },
            loc: { start: 253, end: 256 },
          },
          directives: [],
          loc: { start: 249, end: 256 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 259, end: 263 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 265, end: 271 },
              },
              loc: { start: 265, end: 271 },
            },
            loc: { start: 265, end: 272 },
          },
          directives: [],
          loc: { start: 259, end: 272 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 275, end: 279 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 281, end: 287 },
              },
              loc: { start: 281, end: 287 },
            },
            loc: { start: 281, end: 288 },
          },
          directives: [],
          loc: { start: 275, end: 288 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 291, end: 299 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 302, end: 309 },
                  },
                  loc: { start: 302, end: 309 },
                },
                loc: { start: 302, end: 310 },
              },
              loc: { start: 301, end: 311 },
            },
            loc: { start: 301, end: 312 },
          },
          directives: [],
          loc: { start: 291, end: 312 },
        },
      ],
      loc: { start: 229, end: 314 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 321, end: 326 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 331, end: 342 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 345, end: 355 },
              },
              loc: { start: 345, end: 355 },
            },
            loc: { start: 344, end: 356 },
          },
          directives: [],
          loc: { start: 331, end: 356 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 359, end: 369 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 370, end: 374 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 376, end: 382 },
                  },
                  loc: { start: 376, end: 382 },
                },
                loc: { start: 376, end: 383 },
              },
              directives: [],
              loc: { start: 370, end: 383 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 386, end: 396 },
            },
            loc: { start: 386, end: 396 },
          },
          directives: [],
          loc: { start: 359, end: 396 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection_products",
            loc: { start: 399, end: 418 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 419, end: 423 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 425, end: 431 },
                  },
                  loc: { start: 425, end: 431 },
                },
                loc: { start: 425, end: 432 },
              },
              directives: [],
              loc: { start: 419, end: 432 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 435, end: 445 },
            },
            loc: { start: 435, end: 445 },
          },
          directives: [],
          loc: { start: 399, end: 445 },
        },
      ],
      loc: { start: 316, end: 447 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "OrderItem", loc: { start: 453, end: 462 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 467, end: 469 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 471, end: 473 },
              },
              loc: { start: 471, end: 473 },
            },
            loc: { start: 471, end: 474 },
          },
          directives: [],
          loc: { start: 467, end: 474 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 477, end: 485 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 487, end: 490 },
              },
              loc: { start: 487, end: 490 },
            },
            loc: { start: 487, end: 491 },
          },
          directives: [],
          loc: { start: 477, end: 491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 494, end: 501 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 503, end: 510 },
              },
              loc: { start: 503, end: 510 },
            },
            loc: { start: 503, end: 511 },
          },
          directives: [],
          loc: { start: 494, end: 511 },
        },
      ],
      loc: { start: 448, end: 513 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 520, end: 525 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order_item",
            loc: { start: 530, end: 540 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 541, end: 543 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 545, end: 547 },
                  },
                  loc: { start: 545, end: 547 },
                },
                loc: { start: 545, end: 548 },
              },
              directives: [],
              loc: { start: 541, end: 548 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 551, end: 560 },
            },
            loc: { start: 551, end: 560 },
          },
          directives: [],
          loc: { start: 530, end: 560 },
        },
      ],
      loc: { start: 515, end: 562 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 569, end: 577 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 582, end: 597 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 598, end: 606 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 608, end: 611 },
                  },
                  loc: { start: 608, end: 611 },
                },
                loc: { start: 608, end: 612 },
              },
              directives: [],
              loc: { start: 598, end: 612 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 614, end: 623 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 625, end: 627 },
                  },
                  loc: { start: 625, end: 627 },
                },
                loc: { start: 625, end: 628 },
              },
              directives: [],
              loc: { start: 614, end: 628 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 631, end: 640 },
            },
            loc: { start: 631, end: 640 },
          },
          directives: [],
          loc: { start: 582, end: 640 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 643, end: 658 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 659, end: 661 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 663, end: 665 },
                  },
                  loc: { start: 663, end: 665 },
                },
                loc: { start: 663, end: 666 },
              },
              directives: [],
              loc: { start: 659, end: 666 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 668, end: 676 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 678, end: 681 },
                  },
                  loc: { start: 678, end: 681 },
                },
                loc: { start: 678, end: 682 },
              },
              directives: [],
              loc: { start: 668, end: 682 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 685, end: 694 },
            },
            loc: { start: 685, end: 694 },
          },
          directives: [],
          loc: { start: 643, end: 694 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 697, end: 712 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 713, end: 715 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 717, end: 719 },
                  },
                  loc: { start: 717, end: 719 },
                },
                loc: { start: 717, end: 720 },
              },
              directives: [],
              loc: { start: 713, end: 720 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 723, end: 725 } },
            loc: { start: 723, end: 725 },
          },
          directives: [],
          loc: { start: 697, end: 725 },
        },
      ],
      loc: { start: 564, end: 727 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Status", loc: { start: 733, end: 739 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PENDING",
            loc: { start: 744, end: 751 },
          },
          directives: [],
          loc: { start: 744, end: 751 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 754, end: 764 },
          },
          directives: [],
          loc: { start: 754, end: 764 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "SHIPPED",
            loc: { start: 767, end: 774 },
          },
          directives: [],
          loc: { start: 767, end: 774 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DELIVERED",
            loc: { start: 777, end: 786 },
          },
          directives: [],
          loc: { start: 777, end: 786 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELED",
            loc: { start: 789, end: 797 },
          },
          directives: [],
          loc: { start: 789, end: 797 },
        },
      ],
      loc: { start: 728, end: 799 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 806, end: 811 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 816, end: 818 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 820, end: 822 },
              },
              loc: { start: 820, end: 822 },
            },
            loc: { start: 820, end: 823 },
          },
          directives: [],
          loc: { start: 816, end: 823 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 826, end: 831 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 833, end: 836 },
              },
              loc: { start: 833, end: 836 },
            },
            loc: { start: 833, end: 837 },
          },
          directives: [],
          loc: { start: 826, end: 837 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 840, end: 846 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Status",
                loc: { start: 848, end: 854 },
              },
              loc: { start: 848, end: 854 },
            },
            loc: { start: 848, end: 855 },
          },
          directives: [],
          loc: { start: 840, end: 855 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 858, end: 868 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderItem",
                    loc: { start: 871, end: 880 },
                  },
                  loc: { start: 871, end: 880 },
                },
                loc: { start: 871, end: 881 },
              },
              loc: { start: 870, end: 882 },
            },
            loc: { start: 870, end: 883 },
          },
          directives: [],
          loc: { start: 858, end: 883 },
        },
      ],
      loc: { start: 801, end: 885 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 892, end: 897 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 902, end: 907 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 908, end: 910 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 912, end: 914 },
                  },
                  loc: { start: 912, end: 914 },
                },
                loc: { start: 912, end: 915 },
              },
              directives: [],
              loc: { start: 908, end: 915 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 918, end: 923 },
            },
            loc: { start: 918, end: 923 },
          },
          directives: [],
          loc: { start: 902, end: 923 },
        },
      ],
      loc: { start: 887, end: 925 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 932, end: 940 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 945, end: 956 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 957, end: 962 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 964, end: 967 },
                  },
                  loc: { start: 964, end: 967 },
                },
                loc: { start: 964, end: 968 },
              },
              directives: [],
              loc: { start: 957, end: 968 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 970, end: 976 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 978, end: 984 },
                  },
                  loc: { start: 978, end: 984 },
                },
                loc: { start: 978, end: 985 },
              },
              directives: [],
              loc: { start: 970, end: 985 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 988, end: 993 },
            },
            loc: { start: 988, end: 993 },
          },
          directives: [],
          loc: { start: 945, end: 993 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 996, end: 1007 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1008, end: 1010 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1012, end: 1014 },
                  },
                  loc: { start: 1012, end: 1014 },
                },
                loc: { start: 1012, end: 1015 },
              },
              directives: [],
              loc: { start: 1008, end: 1015 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1017, end: 1023 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 1025, end: 1031 },
                  },
                  loc: { start: 1025, end: 1031 },
                },
                loc: { start: 1025, end: 1032 },
              },
              directives: [],
              loc: { start: 1017, end: 1032 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1035, end: 1040 },
            },
            loc: { start: 1035, end: 1040 },
          },
          directives: [],
          loc: { start: 996, end: 1040 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 1043, end: 1054 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1055, end: 1057 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1059, end: 1061 },
                  },
                  loc: { start: 1059, end: 1061 },
                },
                loc: { start: 1059, end: 1062 },
              },
              directives: [],
              loc: { start: 1055, end: 1062 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1065, end: 1067 },
            },
            loc: { start: 1065, end: 1067 },
          },
          directives: [],
          loc: { start: 1043, end: 1067 },
        },
      ],
      loc: { start: 927, end: 1069 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductColorVariant",
        loc: { start: 1075, end: 1094 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1099, end: 1101 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1103, end: 1105 },
              },
              loc: { start: 1103, end: 1105 },
            },
            loc: { start: 1103, end: 1106 },
          },
          directives: [],
          loc: { start: 1099, end: 1106 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1109, end: 1113 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1115, end: 1121 },
              },
              loc: { start: 1115, end: 1121 },
            },
            loc: { start: 1115, end: 1122 },
          },
          directives: [],
          loc: { start: 1109, end: 1122 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1125, end: 1129 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1131, end: 1137 },
              },
              loc: { start: 1131, end: 1137 },
            },
            loc: { start: 1131, end: 1138 },
          },
          directives: [],
          loc: { start: 1125, end: 1138 },
        },
      ],
      loc: { start: 1070, end: 1140 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductSizeVariant",
        loc: { start: 1146, end: 1164 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1169, end: 1171 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1173, end: 1175 },
              },
              loc: { start: 1173, end: 1175 },
            },
            loc: { start: 1173, end: 1176 },
          },
          directives: [],
          loc: { start: 1169, end: 1176 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1179, end: 1183 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1185, end: 1191 },
              },
              loc: { start: 1185, end: 1191 },
            },
            loc: { start: 1185, end: 1192 },
          },
          directives: [],
          loc: { start: 1179, end: 1192 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1195, end: 1199 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1201, end: 1207 },
              },
              loc: { start: 1201, end: 1207 },
            },
            loc: { start: 1201, end: 1208 },
          },
          directives: [],
          loc: { start: 1195, end: 1208 },
        },
      ],
      loc: { start: 1141, end: 1210 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1216, end: 1223 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1228, end: 1230 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1232, end: 1234 },
              },
              loc: { start: 1232, end: 1234 },
            },
            loc: { start: 1232, end: 1235 },
          },
          directives: [],
          loc: { start: 1228, end: 1235 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1238, end: 1242 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1244, end: 1250 },
              },
              loc: { start: 1244, end: 1250 },
            },
            loc: { start: 1244, end: 1251 },
          },
          directives: [],
          loc: { start: 1238, end: 1251 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1254, end: 1258 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1260, end: 1266 },
              },
              loc: { start: 1260, end: 1266 },
            },
            loc: { start: 1260, end: 1267 },
          },
          directives: [],
          loc: { start: 1254, end: 1267 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1270, end: 1281 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1283, end: 1289 },
              },
              loc: { start: 1283, end: 1289 },
            },
            loc: { start: 1283, end: 1290 },
          },
          directives: [],
          loc: { start: 1270, end: 1290 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1293, end: 1298 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1300, end: 1303 },
              },
              loc: { start: 1300, end: 1303 },
            },
            loc: { start: 1300, end: 1304 },
          },
          directives: [],
          loc: { start: 1293, end: 1304 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1307, end: 1312 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1314, end: 1320 },
              },
              loc: { start: 1314, end: 1320 },
            },
            loc: { start: 1314, end: 1321 },
          },
          directives: [],
          loc: { start: 1307, end: 1321 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1324, end: 1334 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 1337, end: 1345 },
                  },
                  loc: { start: 1337, end: 1345 },
                },
                loc: { start: 1337, end: 1346 },
              },
              loc: { start: 1336, end: 1347 },
            },
            loc: { start: 1336, end: 1348 },
          },
          directives: [],
          loc: { start: 1324, end: 1348 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1351, end: 1362 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Collection",
                    loc: { start: 1365, end: 1375 },
                  },
                  loc: { start: 1365, end: 1375 },
                },
                loc: { start: 1365, end: 1376 },
              },
              loc: { start: 1364, end: 1377 },
            },
            loc: { start: 1364, end: 1378 },
          },
          directives: [],
          loc: { start: 1351, end: 1378 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1381, end: 1403 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ProductColorVariant",
                  loc: { start: 1406, end: 1425 },
                },
                loc: { start: 1406, end: 1425 },
              },
              loc: { start: 1405, end: 1426 },
            },
            loc: { start: 1405, end: 1427 },
          },
          directives: [],
          loc: { start: 1381, end: 1427 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1430, end: 1451 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ProductSizeVariant",
                  loc: { start: 1454, end: 1472 },
                },
                loc: { start: 1454, end: 1472 },
              },
              loc: { start: 1453, end: 1473 },
            },
            loc: { start: 1453, end: 1474 },
          },
          directives: [],
          loc: { start: 1430, end: 1474 },
        },
      ],
      loc: { start: 1211, end: 1476 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1483, end: 1488 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1493, end: 1501 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1502, end: 1508 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1510, end: 1513 },
                },
                loc: { start: 1510, end: 1513 },
              },
              directives: [],
              loc: { start: 1502, end: 1513 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 1517, end: 1524 },
                  },
                  loc: { start: 1517, end: 1524 },
                },
                loc: { start: 1517, end: 1525 },
              },
              loc: { start: 1516, end: 1526 },
            },
            loc: { start: 1516, end: 1527 },
          },
          directives: [],
          loc: { start: 1493, end: 1527 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1530, end: 1537 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1538, end: 1540 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1542, end: 1544 },
                  },
                  loc: { start: 1542, end: 1544 },
                },
                loc: { start: 1542, end: 1545 },
              },
              directives: [],
              loc: { start: 1538, end: 1545 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1548, end: 1555 },
            },
            loc: { start: 1548, end: 1555 },
          },
          directives: [],
          loc: { start: 1530, end: 1555 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1558, end: 1574 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1575, end: 1584 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1586, end: 1588 },
                  },
                  loc: { start: 1586, end: 1588 },
                },
                loc: { start: 1586, end: 1589 },
              },
              directives: [],
              loc: { start: 1575, end: 1589 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1591, end: 1599 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1601, end: 1607 },
                  },
                  loc: { start: 1601, end: 1607 },
                },
                loc: { start: 1601, end: 1608 },
              },
              directives: [],
              loc: { start: 1591, end: 1608 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 1612, end: 1619 },
                  },
                  loc: { start: 1612, end: 1619 },
                },
                loc: { start: 1612, end: 1620 },
              },
              loc: { start: 1611, end: 1621 },
            },
            loc: { start: 1611, end: 1622 },
          },
          directives: [],
          loc: { start: 1558, end: 1622 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1625, end: 1644 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1645, end: 1652 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1654, end: 1660 },
                  },
                  loc: { start: 1654, end: 1660 },
                },
                loc: { start: 1654, end: 1661 },
              },
              directives: [],
              loc: { start: 1645, end: 1661 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 1665, end: 1672 },
                  },
                  loc: { start: 1665, end: 1672 },
                },
                loc: { start: 1665, end: 1673 },
              },
              loc: { start: 1664, end: 1674 },
            },
            loc: { start: 1664, end: 1675 },
          },
          directives: [],
          loc: { start: 1625, end: 1675 },
        },
      ],
      loc: { start: 1478, end: 1677 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1684, end: 1692 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1697, end: 1710 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1711, end: 1716 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1718, end: 1730 },
                  },
                  loc: { start: 1718, end: 1730 },
                },
                loc: { start: 1718, end: 1731 },
              },
              directives: [],
              loc: { start: 1711, end: 1731 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1734, end: 1741 },
            },
            loc: { start: 1734, end: 1741 },
          },
          directives: [],
          loc: { start: 1697, end: 1741 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1744, end: 1757 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1758, end: 1760 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1762, end: 1764 },
                  },
                  loc: { start: 1762, end: 1764 },
                },
                loc: { start: 1762, end: 1765 },
              },
              directives: [],
              loc: { start: 1758, end: 1765 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1767, end: 1772 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1774, end: 1786 },
                  },
                  loc: { start: 1774, end: 1786 },
                },
                loc: { start: 1774, end: 1787 },
              },
              directives: [],
              loc: { start: 1767, end: 1787 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1790, end: 1797 },
            },
            loc: { start: 1790, end: 1797 },
          },
          directives: [],
          loc: { start: 1744, end: 1797 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1800, end: 1813 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1814, end: 1816 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1818, end: 1820 },
                  },
                  loc: { start: 1818, end: 1820 },
                },
                loc: { start: 1818, end: 1821 },
              },
              directives: [],
              loc: { start: 1814, end: 1821 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1824, end: 1831 },
            },
            loc: { start: 1824, end: 1831 },
          },
          directives: [],
          loc: { start: 1800, end: 1831 },
        },
      ],
      loc: { start: 1679, end: 1833 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1841, end: 1853 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1858, end: 1862 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1864, end: 1870 },
              },
              loc: { start: 1864, end: 1870 },
            },
            loc: { start: 1864, end: 1871 },
          },
          directives: [],
          loc: { start: 1858, end: 1871 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1874, end: 1878 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1880, end: 1886 },
              },
              loc: { start: 1880, end: 1886 },
            },
            loc: { start: 1880, end: 1887 },
          },
          directives: [],
          loc: { start: 1874, end: 1887 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1890, end: 1901 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1903, end: 1909 },
              },
              loc: { start: 1903, end: 1909 },
            },
            loc: { start: 1903, end: 1910 },
          },
          directives: [],
          loc: { start: 1890, end: 1910 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1913, end: 1918 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1920, end: 1923 },
              },
              loc: { start: 1920, end: 1923 },
            },
            loc: { start: 1920, end: 1924 },
          },
          directives: [],
          loc: { start: 1913, end: 1924 },
        },
      ],
      loc: { start: 1835, end: 1926 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1932, end: 1937 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1927, end: 1937 },
    },
  ],
  loc: { start: 0, end: 1938 },
} as unknown as DocumentNode;
