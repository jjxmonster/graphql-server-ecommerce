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
          name: { kind: "Name", value: "size", loc: { start: 494, end: 498 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 500, end: 506 },
              },
              loc: { start: 500, end: 506 },
            },
            loc: { start: 500, end: 507 },
          },
          directives: [],
          loc: { start: 494, end: 507 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "color", loc: { start: 510, end: 515 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 517, end: 523 },
              },
              loc: { start: 517, end: 523 },
            },
            loc: { start: 517, end: 524 },
          },
          directives: [],
          loc: { start: 510, end: 524 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 527, end: 534 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 536, end: 543 },
              },
              loc: { start: 536, end: 543 },
            },
            loc: { start: 536, end: 544 },
          },
          directives: [],
          loc: { start: 527, end: 544 },
        },
      ],
      loc: { start: 448, end: 546 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 553, end: 558 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order_item",
            loc: { start: 563, end: 573 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 574, end: 576 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 578, end: 580 },
                  },
                  loc: { start: 578, end: 580 },
                },
                loc: { start: 578, end: 581 },
              },
              directives: [],
              loc: { start: 574, end: 581 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 584, end: 593 },
            },
            loc: { start: 584, end: 593 },
          },
          directives: [],
          loc: { start: 563, end: 593 },
        },
      ],
      loc: { start: 548, end: 595 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 602, end: 610 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 615, end: 630 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 631, end: 639 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 641, end: 644 },
                  },
                  loc: { start: 641, end: 644 },
                },
                loc: { start: 641, end: 645 },
              },
              directives: [],
              loc: { start: 631, end: 645 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 647, end: 656 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 658, end: 660 },
                  },
                  loc: { start: 658, end: 660 },
                },
                loc: { start: 658, end: 661 },
              },
              directives: [],
              loc: { start: 647, end: 661 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderId",
                loc: { start: 663, end: 670 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 672, end: 674 },
                  },
                  loc: { start: 672, end: 674 },
                },
                loc: { start: 672, end: 675 },
              },
              directives: [],
              loc: { start: 663, end: 675 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "size",
                loc: { start: 677, end: 681 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 683, end: 689 },
                },
                loc: { start: 683, end: 689 },
              },
              directives: [],
              loc: { start: 677, end: 689 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "color",
                loc: { start: 691, end: 696 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 698, end: 704 },
                },
                loc: { start: 698, end: 704 },
              },
              directives: [],
              loc: { start: 691, end: 704 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 707, end: 716 },
            },
            loc: { start: 707, end: 716 },
          },
          directives: [],
          loc: { start: 615, end: 716 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 719, end: 734 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 735, end: 737 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 739, end: 741 },
                  },
                  loc: { start: 739, end: 741 },
                },
                loc: { start: 739, end: 742 },
              },
              directives: [],
              loc: { start: 735, end: 742 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 744, end: 752 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 754, end: 757 },
                  },
                  loc: { start: 754, end: 757 },
                },
                loc: { start: 754, end: 758 },
              },
              directives: [],
              loc: { start: 744, end: 758 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 761, end: 770 },
            },
            loc: { start: 761, end: 770 },
          },
          directives: [],
          loc: { start: 719, end: 770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 773, end: 788 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 789, end: 791 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 793, end: 795 },
                  },
                  loc: { start: 793, end: 795 },
                },
                loc: { start: 793, end: 796 },
              },
              directives: [],
              loc: { start: 789, end: 796 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 799, end: 801 } },
            loc: { start: 799, end: 801 },
          },
          directives: [],
          loc: { start: 773, end: 801 },
        },
      ],
      loc: { start: 597, end: 803 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 809, end: 814 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 819, end: 821 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 823, end: 825 },
              },
              loc: { start: 823, end: 825 },
            },
            loc: { start: 823, end: 826 },
          },
          directives: [],
          loc: { start: 819, end: 826 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 829, end: 834 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 836, end: 839 },
              },
              loc: { start: 836, end: 839 },
            },
            loc: { start: 836, end: 840 },
          },
          directives: [],
          loc: { start: 829, end: 840 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 843, end: 849 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 851, end: 857 },
            },
            loc: { start: 851, end: 857 },
          },
          directives: [],
          loc: { start: 843, end: 857 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 860, end: 870 },
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
                    loc: { start: 873, end: 882 },
                  },
                  loc: { start: 873, end: 882 },
                },
                loc: { start: 873, end: 883 },
              },
              loc: { start: 872, end: 884 },
            },
            loc: { start: 872, end: 885 },
          },
          directives: [],
          loc: { start: 860, end: 885 },
        },
      ],
      loc: { start: 804, end: 887 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 894, end: 899 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 904, end: 909 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 910, end: 912 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 914, end: 916 },
                  },
                  loc: { start: 914, end: 916 },
                },
                loc: { start: 914, end: 917 },
              },
              directives: [],
              loc: { start: 910, end: 917 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 919, end: 925 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 927, end: 933 },
                },
                loc: { start: 927, end: 933 },
              },
              directives: [],
              loc: { start: 919, end: 933 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 936, end: 941 },
            },
            loc: { start: 936, end: 941 },
          },
          directives: [],
          loc: { start: 904, end: 941 },
        },
      ],
      loc: { start: 889, end: 943 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 950, end: 958 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 963, end: 974 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 975, end: 980 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 982, end: 985 },
                  },
                  loc: { start: 982, end: 985 },
                },
                loc: { start: 982, end: 986 },
              },
              directives: [],
              loc: { start: 975, end: 986 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 989, end: 994 },
            },
            loc: { start: 989, end: 994 },
          },
          directives: [],
          loc: { start: 963, end: 994 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 997, end: 1008 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1009, end: 1011 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1013, end: 1015 },
                  },
                  loc: { start: 1013, end: 1015 },
                },
                loc: { start: 1013, end: 1016 },
              },
              directives: [],
              loc: { start: 1009, end: 1016 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1018, end: 1024 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1026, end: 1032 },
                },
                loc: { start: 1026, end: 1032 },
              },
              directives: [],
              loc: { start: 1018, end: 1032 },
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
          loc: { start: 997, end: 1040 },
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
      loc: { start: 945, end: 1069 },
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
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sort",
                loc: { start: 1515, end: 1519 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "SortInput",
                  loc: { start: 1521, end: 1530 },
                },
                loc: { start: 1521, end: 1530 },
              },
              directives: [],
              loc: { start: 1515, end: 1530 },
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
                    loc: { start: 1534, end: 1541 },
                  },
                  loc: { start: 1534, end: 1541 },
                },
                loc: { start: 1534, end: 1542 },
              },
              loc: { start: 1533, end: 1543 },
            },
            loc: { start: 1533, end: 1544 },
          },
          directives: [],
          loc: { start: 1493, end: 1544 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1547, end: 1554 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1555, end: 1557 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1559, end: 1561 },
                  },
                  loc: { start: 1559, end: 1561 },
                },
                loc: { start: 1559, end: 1562 },
              },
              directives: [],
              loc: { start: 1555, end: 1562 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1565, end: 1572 },
            },
            loc: { start: 1565, end: 1572 },
          },
          directives: [],
          loc: { start: 1547, end: 1572 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1575, end: 1591 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1592, end: 1601 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1603, end: 1605 },
                  },
                  loc: { start: 1603, end: 1605 },
                },
                loc: { start: 1603, end: 1606 },
              },
              directives: [],
              loc: { start: 1592, end: 1606 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1608, end: 1616 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1618, end: 1624 },
                  },
                  loc: { start: 1618, end: 1624 },
                },
                loc: { start: 1618, end: 1625 },
              },
              directives: [],
              loc: { start: 1608, end: 1625 },
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
                    loc: { start: 1629, end: 1636 },
                  },
                  loc: { start: 1629, end: 1636 },
                },
                loc: { start: 1629, end: 1637 },
              },
              loc: { start: 1628, end: 1638 },
            },
            loc: { start: 1628, end: 1639 },
          },
          directives: [],
          loc: { start: 1575, end: 1639 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1642, end: 1661 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1662, end: 1669 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1671, end: 1677 },
                  },
                  loc: { start: 1671, end: 1677 },
                },
                loc: { start: 1671, end: 1678 },
              },
              directives: [],
              loc: { start: 1662, end: 1678 },
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
                    loc: { start: 1682, end: 1689 },
                  },
                  loc: { start: 1682, end: 1689 },
                },
                loc: { start: 1682, end: 1690 },
              },
              loc: { start: 1681, end: 1691 },
            },
            loc: { start: 1681, end: 1692 },
          },
          directives: [],
          loc: { start: 1642, end: 1692 },
        },
      ],
      loc: { start: 1478, end: 1694 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SortInput",
        loc: { start: 1701, end: 1710 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "field",
            loc: { start: 1715, end: 1720 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1722, end: 1728 },
              },
              loc: { start: 1722, end: 1728 },
            },
            loc: { start: 1722, end: 1729 },
          },
          directives: [],
          loc: { start: 1715, end: 1729 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order",
            loc: { start: 1732, end: 1737 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1739, end: 1745 },
              },
              loc: { start: 1739, end: 1745 },
            },
            loc: { start: 1739, end: 1746 },
          },
          directives: [],
          loc: { start: 1732, end: 1746 },
        },
      ],
      loc: { start: 1696, end: 1748 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1755, end: 1763 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1768, end: 1781 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1782, end: 1787 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1789, end: 1801 },
                  },
                  loc: { start: 1789, end: 1801 },
                },
                loc: { start: 1789, end: 1802 },
              },
              directives: [],
              loc: { start: 1782, end: 1802 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1805, end: 1812 },
            },
            loc: { start: 1805, end: 1812 },
          },
          directives: [],
          loc: { start: 1768, end: 1812 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1815, end: 1828 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1829, end: 1831 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1833, end: 1835 },
                  },
                  loc: { start: 1833, end: 1835 },
                },
                loc: { start: 1833, end: 1836 },
              },
              directives: [],
              loc: { start: 1829, end: 1836 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1838, end: 1843 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1845, end: 1857 },
                  },
                  loc: { start: 1845, end: 1857 },
                },
                loc: { start: 1845, end: 1858 },
              },
              directives: [],
              loc: { start: 1838, end: 1858 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1861, end: 1868 },
            },
            loc: { start: 1861, end: 1868 },
          },
          directives: [],
          loc: { start: 1815, end: 1868 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1871, end: 1884 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1885, end: 1887 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1889, end: 1891 },
                  },
                  loc: { start: 1889, end: 1891 },
                },
                loc: { start: 1889, end: 1892 },
              },
              directives: [],
              loc: { start: 1885, end: 1892 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1895, end: 1902 },
            },
            loc: { start: 1895, end: 1902 },
          },
          directives: [],
          loc: { start: 1871, end: 1902 },
        },
      ],
      loc: { start: 1750, end: 1904 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1912, end: 1924 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1929, end: 1933 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1935, end: 1941 },
              },
              loc: { start: 1935, end: 1941 },
            },
            loc: { start: 1935, end: 1942 },
          },
          directives: [],
          loc: { start: 1929, end: 1942 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1945, end: 1949 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1951, end: 1957 },
              },
              loc: { start: 1951, end: 1957 },
            },
            loc: { start: 1951, end: 1958 },
          },
          directives: [],
          loc: { start: 1945, end: 1958 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1961, end: 1972 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1974, end: 1980 },
              },
              loc: { start: 1974, end: 1980 },
            },
            loc: { start: 1974, end: 1981 },
          },
          directives: [],
          loc: { start: 1961, end: 1981 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1984, end: 1989 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1991, end: 1994 },
              },
              loc: { start: 1991, end: 1994 },
            },
            loc: { start: 1991, end: 1995 },
          },
          directives: [],
          loc: { start: 1984, end: 1995 },
        },
      ],
      loc: { start: 1906, end: 1997 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 2003, end: 2009 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2014, end: 2016 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2018, end: 2020 },
              },
              loc: { start: 2018, end: 2020 },
            },
            loc: { start: 2018, end: 2021 },
          },
          directives: [],
          loc: { start: 2014, end: 2021 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 2024, end: 2029 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2031, end: 2037 },
              },
              loc: { start: 2031, end: 2037 },
            },
            loc: { start: 2031, end: 2038 },
          },
          directives: [],
          loc: { start: 2024, end: 2038 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2041, end: 2048 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2050, end: 2056 },
              },
              loc: { start: 2050, end: 2056 },
            },
            loc: { start: 2050, end: 2057 },
          },
          directives: [],
          loc: { start: 2041, end: 2057 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 2060, end: 2066 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2068, end: 2071 },
              },
              loc: { start: 2068, end: 2071 },
            },
            loc: { start: 2068, end: 2072 },
          },
          directives: [],
          loc: { start: 2060, end: 2072 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2075, end: 2080 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2082, end: 2088 },
              },
              loc: { start: 2082, end: 2088 },
            },
            loc: { start: 2082, end: 2089 },
          },
          directives: [],
          loc: { start: 2075, end: 2089 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2092, end: 2096 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2098, end: 2104 },
              },
              loc: { start: 2098, end: 2104 },
            },
            loc: { start: 2098, end: 2105 },
          },
          directives: [],
          loc: { start: 2092, end: 2105 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 2108, end: 2115 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2117, end: 2124 },
              },
              loc: { start: 2117, end: 2124 },
            },
            loc: { start: 2117, end: 2125 },
          },
          directives: [],
          loc: { start: 2108, end: 2125 },
        },
      ],
      loc: { start: 1998, end: 2127 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2134, end: 2139 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 2144, end: 2151 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 2152, end: 2161 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2163, end: 2165 },
                  },
                  loc: { start: 2163, end: 2165 },
                },
                loc: { start: 2163, end: 2166 },
              },
              directives: [],
              loc: { start: 2152, end: 2166 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2169, end: 2175 },
            },
            loc: { start: 2169, end: 2175 },
          },
          directives: [],
          loc: { start: 2144, end: 2175 },
        },
      ],
      loc: { start: 2129, end: 2177 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2184, end: 2192 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 2197, end: 2209 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 2210, end: 2215 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2217, end: 2223 },
                  },
                  loc: { start: 2217, end: 2223 },
                },
                loc: { start: 2217, end: 2224 },
              },
              directives: [],
              loc: { start: 2210, end: 2224 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 2226, end: 2233 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2235, end: 2241 },
                  },
                  loc: { start: 2235, end: 2241 },
                },
                loc: { start: 2235, end: 2242 },
              },
              directives: [],
              loc: { start: 2226, end: 2242 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 2244, end: 2250 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 2252, end: 2255 },
                  },
                  loc: { start: 2252, end: 2255 },
                },
                loc: { start: 2252, end: 2256 },
              },
              directives: [],
              loc: { start: 2244, end: 2256 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 2258, end: 2267 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2269, end: 2275 },
                  },
                  loc: { start: 2269, end: 2275 },
                },
                loc: { start: 2269, end: 2276 },
              },
              directives: [],
              loc: { start: 2258, end: 2276 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 2278, end: 2283 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2285, end: 2291 },
                  },
                  loc: { start: 2285, end: 2291 },
                },
                loc: { start: 2285, end: 2292 },
              },
              directives: [],
              loc: { start: 2278, end: 2292 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 2294, end: 2298 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2300, end: 2306 },
                  },
                  loc: { start: 2300, end: 2306 },
                },
                loc: { start: 2300, end: 2307 },
              },
              directives: [],
              loc: { start: 2294, end: 2307 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2310, end: 2316 },
            },
            loc: { start: 2310, end: 2316 },
          },
          directives: [],
          loc: { start: 2197, end: 2316 },
        },
      ],
      loc: { start: 2179, end: 2318 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2324, end: 2329 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2319, end: 2329 },
    },
  ],
  loc: { start: 0, end: 2330 },
} as unknown as DocumentNode;
