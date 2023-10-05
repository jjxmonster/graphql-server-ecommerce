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
      name: { kind: "Name", value: "Review", loc: { start: 1932, end: 1938 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1943, end: 1945 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1947, end: 1949 },
              },
              loc: { start: 1947, end: 1949 },
            },
            loc: { start: 1947, end: 1950 },
          },
          directives: [],
          loc: { start: 1943, end: 1950 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1953, end: 1958 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1960, end: 1966 },
              },
              loc: { start: 1960, end: 1966 },
            },
            loc: { start: 1960, end: 1967 },
          },
          directives: [],
          loc: { start: 1953, end: 1967 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1970, end: 1977 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1979, end: 1985 },
              },
              loc: { start: 1979, end: 1985 },
            },
            loc: { start: 1979, end: 1986 },
          },
          directives: [],
          loc: { start: 1970, end: 1986 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 1989, end: 1995 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1997, end: 2000 },
              },
              loc: { start: 1997, end: 2000 },
            },
            loc: { start: 1997, end: 2001 },
          },
          directives: [],
          loc: { start: 1989, end: 2001 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 2004, end: 2011 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2013, end: 2020 },
              },
              loc: { start: 2013, end: 2020 },
            },
            loc: { start: 2013, end: 2021 },
          },
          directives: [],
          loc: { start: 2004, end: 2021 },
        },
      ],
      loc: { start: 1927, end: 2023 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2030, end: 2035 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 2040, end: 2047 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 2048, end: 2057 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2059, end: 2061 },
                  },
                  loc: { start: 2059, end: 2061 },
                },
                loc: { start: 2059, end: 2062 },
              },
              directives: [],
              loc: { start: 2048, end: 2062 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2065, end: 2071 },
            },
            loc: { start: 2065, end: 2071 },
          },
          directives: [],
          loc: { start: 2040, end: 2071 },
        },
      ],
      loc: { start: 2025, end: 2073 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2080, end: 2088 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 2093, end: 2105 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 2106, end: 2111 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2113, end: 2119 },
                  },
                  loc: { start: 2113, end: 2119 },
                },
                loc: { start: 2113, end: 2120 },
              },
              directives: [],
              loc: { start: 2106, end: 2120 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 2122, end: 2129 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2131, end: 2137 },
                  },
                  loc: { start: 2131, end: 2137 },
                },
                loc: { start: 2131, end: 2138 },
              },
              directives: [],
              loc: { start: 2122, end: 2138 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 2140, end: 2146 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 2148, end: 2151 },
                  },
                  loc: { start: 2148, end: 2151 },
                },
                loc: { start: 2148, end: 2152 },
              },
              directives: [],
              loc: { start: 2140, end: 2152 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 2154, end: 2163 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 2165, end: 2168 },
                },
                loc: { start: 2165, end: 2168 },
              },
              directives: [],
              loc: { start: 2154, end: 2168 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2171, end: 2177 },
            },
            loc: { start: 2171, end: 2177 },
          },
          directives: [],
          loc: { start: 2093, end: 2177 },
        },
      ],
      loc: { start: 2075, end: 2179 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2185, end: 2190 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2180, end: 2190 },
    },
  ],
  loc: { start: 0, end: 2191 },
} as unknown as DocumentNode;
