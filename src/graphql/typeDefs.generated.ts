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
            value: "category_products",
            loc: { start: 127, end: 144 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 145, end: 149 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 151, end: 157 },
                  },
                  loc: { start: 151, end: 157 },
                },
                loc: { start: 151, end: 158 },
              },
              directives: [],
              loc: { start: 145, end: 158 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productsOffset",
                loc: { start: 160, end: 174 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 176, end: 179 },
                },
                loc: { start: 176, end: 179 },
              },
              directives: [],
              loc: { start: 160, end: 179 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 182, end: 190 },
            },
            loc: { start: 182, end: 190 },
          },
          directives: [],
          loc: { start: 127, end: 190 },
        },
      ],
      loc: { start: 85, end: 192 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 198, end: 208 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 213, end: 215 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 217, end: 219 },
              },
              loc: { start: 217, end: 219 },
            },
            loc: { start: 217, end: 220 },
          },
          directives: [],
          loc: { start: 213, end: 220 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 223, end: 227 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 229, end: 235 },
              },
              loc: { start: 229, end: 235 },
            },
            loc: { start: 229, end: 236 },
          },
          directives: [],
          loc: { start: 223, end: 236 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 239, end: 247 },
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
                    loc: { start: 250, end: 257 },
                  },
                  loc: { start: 250, end: 257 },
                },
                loc: { start: 250, end: 258 },
              },
              loc: { start: 249, end: 259 },
            },
            loc: { start: 249, end: 260 },
          },
          directives: [],
          loc: { start: 239, end: 260 },
        },
      ],
      loc: { start: 193, end: 262 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 269, end: 274 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 279, end: 290 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 293, end: 303 },
              },
              loc: { start: 293, end: 303 },
            },
            loc: { start: 292, end: 304 },
          },
          directives: [],
          loc: { start: 279, end: 304 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 307, end: 317 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 318, end: 320 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 322, end: 324 },
                  },
                  loc: { start: 322, end: 324 },
                },
                loc: { start: 322, end: 325 },
              },
              directives: [],
              loc: { start: 318, end: 325 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 328, end: 338 },
            },
            loc: { start: 328, end: 338 },
          },
          directives: [],
          loc: { start: 307, end: 338 },
        },
      ],
      loc: { start: 264, end: 340 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "OrderItem", loc: { start: 346, end: 355 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 360, end: 362 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 364, end: 366 },
              },
              loc: { start: 364, end: 366 },
            },
            loc: { start: 364, end: 367 },
          },
          directives: [],
          loc: { start: 360, end: 367 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 370, end: 378 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 380, end: 383 },
              },
              loc: { start: 380, end: 383 },
            },
            loc: { start: 380, end: 384 },
          },
          directives: [],
          loc: { start: 370, end: 384 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 387, end: 394 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 396, end: 403 },
              },
              loc: { start: 396, end: 403 },
            },
            loc: { start: 396, end: 404 },
          },
          directives: [],
          loc: { start: 387, end: 404 },
        },
      ],
      loc: { start: 341, end: 406 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 413, end: 418 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order_item",
            loc: { start: 423, end: 433 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 434, end: 436 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 438, end: 440 },
                  },
                  loc: { start: 438, end: 440 },
                },
                loc: { start: 438, end: 441 },
              },
              directives: [],
              loc: { start: 434, end: 441 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 444, end: 453 },
            },
            loc: { start: 444, end: 453 },
          },
          directives: [],
          loc: { start: 423, end: 453 },
        },
      ],
      loc: { start: 408, end: 455 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 462, end: 470 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 475, end: 490 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 491, end: 499 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 501, end: 504 },
                  },
                  loc: { start: 501, end: 504 },
                },
                loc: { start: 501, end: 505 },
              },
              directives: [],
              loc: { start: 491, end: 505 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 507, end: 516 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 518, end: 520 },
                  },
                  loc: { start: 518, end: 520 },
                },
                loc: { start: 518, end: 521 },
              },
              directives: [],
              loc: { start: 507, end: 521 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 524, end: 533 },
            },
            loc: { start: 524, end: 533 },
          },
          directives: [],
          loc: { start: 475, end: 533 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 536, end: 551 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 552, end: 554 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 556, end: 558 },
                  },
                  loc: { start: 556, end: 558 },
                },
                loc: { start: 556, end: 559 },
              },
              directives: [],
              loc: { start: 552, end: 559 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 561, end: 569 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 571, end: 574 },
                  },
                  loc: { start: 571, end: 574 },
                },
                loc: { start: 571, end: 575 },
              },
              directives: [],
              loc: { start: 561, end: 575 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 578, end: 587 },
            },
            loc: { start: 578, end: 587 },
          },
          directives: [],
          loc: { start: 536, end: 587 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 590, end: 605 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 606, end: 608 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 610, end: 612 },
                  },
                  loc: { start: 610, end: 612 },
                },
                loc: { start: 610, end: 613 },
              },
              directives: [],
              loc: { start: 606, end: 613 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 616, end: 618 } },
            loc: { start: 616, end: 618 },
          },
          directives: [],
          loc: { start: 590, end: 618 },
        },
      ],
      loc: { start: 457, end: 620 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Status", loc: { start: 626, end: 632 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PENDING",
            loc: { start: 637, end: 644 },
          },
          directives: [],
          loc: { start: 637, end: 644 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 647, end: 657 },
          },
          directives: [],
          loc: { start: 647, end: 657 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "SHIPPED",
            loc: { start: 660, end: 667 },
          },
          directives: [],
          loc: { start: 660, end: 667 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DELIVERED",
            loc: { start: 670, end: 679 },
          },
          directives: [],
          loc: { start: 670, end: 679 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELED",
            loc: { start: 682, end: 690 },
          },
          directives: [],
          loc: { start: 682, end: 690 },
        },
      ],
      loc: { start: 621, end: 692 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 699, end: 704 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 709, end: 711 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 713, end: 715 },
              },
              loc: { start: 713, end: 715 },
            },
            loc: { start: 713, end: 716 },
          },
          directives: [],
          loc: { start: 709, end: 716 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 719, end: 724 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 726, end: 729 },
              },
              loc: { start: 726, end: 729 },
            },
            loc: { start: 726, end: 730 },
          },
          directives: [],
          loc: { start: 719, end: 730 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 733, end: 739 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Status",
                loc: { start: 741, end: 747 },
              },
              loc: { start: 741, end: 747 },
            },
            loc: { start: 741, end: 748 },
          },
          directives: [],
          loc: { start: 733, end: 748 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 751, end: 761 },
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
                    loc: { start: 764, end: 773 },
                  },
                  loc: { start: 764, end: 773 },
                },
                loc: { start: 764, end: 774 },
              },
              loc: { start: 763, end: 775 },
            },
            loc: { start: 763, end: 776 },
          },
          directives: [],
          loc: { start: 751, end: 776 },
        },
      ],
      loc: { start: 694, end: 778 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 785, end: 790 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 795, end: 800 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 801, end: 803 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 805, end: 807 },
                  },
                  loc: { start: 805, end: 807 },
                },
                loc: { start: 805, end: 808 },
              },
              directives: [],
              loc: { start: 801, end: 808 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 811, end: 816 },
            },
            loc: { start: 811, end: 816 },
          },
          directives: [],
          loc: { start: 795, end: 816 },
        },
      ],
      loc: { start: 780, end: 818 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 825, end: 833 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 838, end: 849 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 850, end: 855 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 857, end: 860 },
                  },
                  loc: { start: 857, end: 860 },
                },
                loc: { start: 857, end: 861 },
              },
              directives: [],
              loc: { start: 850, end: 861 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 863, end: 869 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 871, end: 877 },
                  },
                  loc: { start: 871, end: 877 },
                },
                loc: { start: 871, end: 878 },
              },
              directives: [],
              loc: { start: 863, end: 878 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 881, end: 886 },
            },
            loc: { start: 881, end: 886 },
          },
          directives: [],
          loc: { start: 838, end: 886 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 889, end: 900 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 901, end: 903 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 905, end: 907 },
                  },
                  loc: { start: 905, end: 907 },
                },
                loc: { start: 905, end: 908 },
              },
              directives: [],
              loc: { start: 901, end: 908 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 910, end: 916 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 918, end: 924 },
                  },
                  loc: { start: 918, end: 924 },
                },
                loc: { start: 918, end: 925 },
              },
              directives: [],
              loc: { start: 910, end: 925 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 928, end: 933 },
            },
            loc: { start: 928, end: 933 },
          },
          directives: [],
          loc: { start: 889, end: 933 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 936, end: 947 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 948, end: 950 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 952, end: 954 },
                  },
                  loc: { start: 952, end: 954 },
                },
                loc: { start: 952, end: 955 },
              },
              directives: [],
              loc: { start: 948, end: 955 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 958, end: 960 } },
            loc: { start: 958, end: 960 },
          },
          directives: [],
          loc: { start: 936, end: 960 },
        },
      ],
      loc: { start: 820, end: 962 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductColorVariant",
        loc: { start: 968, end: 987 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 992, end: 994 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 996, end: 998 },
              },
              loc: { start: 996, end: 998 },
            },
            loc: { start: 996, end: 999 },
          },
          directives: [],
          loc: { start: 992, end: 999 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1002, end: 1006 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1008, end: 1014 },
              },
              loc: { start: 1008, end: 1014 },
            },
            loc: { start: 1008, end: 1015 },
          },
          directives: [],
          loc: { start: 1002, end: 1015 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1018, end: 1022 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1024, end: 1030 },
              },
              loc: { start: 1024, end: 1030 },
            },
            loc: { start: 1024, end: 1031 },
          },
          directives: [],
          loc: { start: 1018, end: 1031 },
        },
      ],
      loc: { start: 963, end: 1033 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductSizeVariant",
        loc: { start: 1039, end: 1057 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1062, end: 1064 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1066, end: 1068 },
              },
              loc: { start: 1066, end: 1068 },
            },
            loc: { start: 1066, end: 1069 },
          },
          directives: [],
          loc: { start: 1062, end: 1069 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1072, end: 1076 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1078, end: 1084 },
              },
              loc: { start: 1078, end: 1084 },
            },
            loc: { start: 1078, end: 1085 },
          },
          directives: [],
          loc: { start: 1072, end: 1085 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1088, end: 1092 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1094, end: 1100 },
              },
              loc: { start: 1094, end: 1100 },
            },
            loc: { start: 1094, end: 1101 },
          },
          directives: [],
          loc: { start: 1088, end: 1101 },
        },
      ],
      loc: { start: 1034, end: 1103 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1109, end: 1116 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1121, end: 1123 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1125, end: 1127 },
              },
              loc: { start: 1125, end: 1127 },
            },
            loc: { start: 1125, end: 1128 },
          },
          directives: [],
          loc: { start: 1121, end: 1128 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1131, end: 1135 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1137, end: 1143 },
              },
              loc: { start: 1137, end: 1143 },
            },
            loc: { start: 1137, end: 1144 },
          },
          directives: [],
          loc: { start: 1131, end: 1144 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1147, end: 1151 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1153, end: 1159 },
              },
              loc: { start: 1153, end: 1159 },
            },
            loc: { start: 1153, end: 1160 },
          },
          directives: [],
          loc: { start: 1147, end: 1160 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1163, end: 1174 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1176, end: 1182 },
              },
              loc: { start: 1176, end: 1182 },
            },
            loc: { start: 1176, end: 1183 },
          },
          directives: [],
          loc: { start: 1163, end: 1183 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1186, end: 1191 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1193, end: 1196 },
              },
              loc: { start: 1193, end: 1196 },
            },
            loc: { start: 1193, end: 1197 },
          },
          directives: [],
          loc: { start: 1186, end: 1197 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1200, end: 1205 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1207, end: 1213 },
              },
              loc: { start: 1207, end: 1213 },
            },
            loc: { start: 1207, end: 1214 },
          },
          directives: [],
          loc: { start: 1200, end: 1214 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1217, end: 1227 },
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
                    loc: { start: 1230, end: 1238 },
                  },
                  loc: { start: 1230, end: 1238 },
                },
                loc: { start: 1230, end: 1239 },
              },
              loc: { start: 1229, end: 1240 },
            },
            loc: { start: 1229, end: 1241 },
          },
          directives: [],
          loc: { start: 1217, end: 1241 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1244, end: 1255 },
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
                    loc: { start: 1258, end: 1268 },
                  },
                  loc: { start: 1258, end: 1268 },
                },
                loc: { start: 1258, end: 1269 },
              },
              loc: { start: 1257, end: 1270 },
            },
            loc: { start: 1257, end: 1271 },
          },
          directives: [],
          loc: { start: 1244, end: 1271 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1274, end: 1296 },
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
                  loc: { start: 1299, end: 1318 },
                },
                loc: { start: 1299, end: 1318 },
              },
              loc: { start: 1298, end: 1319 },
            },
            loc: { start: 1298, end: 1320 },
          },
          directives: [],
          loc: { start: 1274, end: 1320 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1323, end: 1344 },
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
                  loc: { start: 1347, end: 1365 },
                },
                loc: { start: 1347, end: 1365 },
              },
              loc: { start: 1346, end: 1366 },
            },
            loc: { start: 1346, end: 1367 },
          },
          directives: [],
          loc: { start: 1323, end: 1367 },
        },
      ],
      loc: { start: 1104, end: 1369 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1376, end: 1381 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1386, end: 1394 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1395, end: 1401 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1403, end: 1406 },
                },
                loc: { start: 1403, end: 1406 },
              },
              directives: [],
              loc: { start: 1395, end: 1406 },
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
                    loc: { start: 1410, end: 1417 },
                  },
                  loc: { start: 1410, end: 1417 },
                },
                loc: { start: 1410, end: 1418 },
              },
              loc: { start: 1409, end: 1419 },
            },
            loc: { start: 1409, end: 1420 },
          },
          directives: [],
          loc: { start: 1386, end: 1420 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1423, end: 1430 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1431, end: 1433 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1435, end: 1437 },
                  },
                  loc: { start: 1435, end: 1437 },
                },
                loc: { start: 1435, end: 1438 },
              },
              directives: [],
              loc: { start: 1431, end: 1438 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1441, end: 1448 },
            },
            loc: { start: 1441, end: 1448 },
          },
          directives: [],
          loc: { start: 1423, end: 1448 },
        },
      ],
      loc: { start: 1371, end: 1450 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1457, end: 1465 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1470, end: 1483 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1484, end: 1489 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1491, end: 1503 },
                  },
                  loc: { start: 1491, end: 1503 },
                },
                loc: { start: 1491, end: 1504 },
              },
              directives: [],
              loc: { start: 1484, end: 1504 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1507, end: 1514 },
            },
            loc: { start: 1507, end: 1514 },
          },
          directives: [],
          loc: { start: 1470, end: 1514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1517, end: 1530 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1531, end: 1533 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1535, end: 1537 },
                  },
                  loc: { start: 1535, end: 1537 },
                },
                loc: { start: 1535, end: 1538 },
              },
              directives: [],
              loc: { start: 1531, end: 1538 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1540, end: 1545 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1547, end: 1559 },
                  },
                  loc: { start: 1547, end: 1559 },
                },
                loc: { start: 1547, end: 1560 },
              },
              directives: [],
              loc: { start: 1540, end: 1560 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1563, end: 1570 },
            },
            loc: { start: 1563, end: 1570 },
          },
          directives: [],
          loc: { start: 1517, end: 1570 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1573, end: 1586 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1587, end: 1589 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1591, end: 1593 },
                  },
                  loc: { start: 1591, end: 1593 },
                },
                loc: { start: 1591, end: 1594 },
              },
              directives: [],
              loc: { start: 1587, end: 1594 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1597, end: 1604 },
            },
            loc: { start: 1597, end: 1604 },
          },
          directives: [],
          loc: { start: 1573, end: 1604 },
        },
      ],
      loc: { start: 1452, end: 1606 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1614, end: 1626 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1631, end: 1635 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1637, end: 1643 },
              },
              loc: { start: 1637, end: 1643 },
            },
            loc: { start: 1637, end: 1644 },
          },
          directives: [],
          loc: { start: 1631, end: 1644 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1647, end: 1651 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1653, end: 1659 },
              },
              loc: { start: 1653, end: 1659 },
            },
            loc: { start: 1653, end: 1660 },
          },
          directives: [],
          loc: { start: 1647, end: 1660 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1663, end: 1674 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1676, end: 1682 },
              },
              loc: { start: 1676, end: 1682 },
            },
            loc: { start: 1676, end: 1683 },
          },
          directives: [],
          loc: { start: 1663, end: 1683 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1686, end: 1691 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1693, end: 1696 },
              },
              loc: { start: 1693, end: 1696 },
            },
            loc: { start: 1693, end: 1697 },
          },
          directives: [],
          loc: { start: 1686, end: 1697 },
        },
      ],
      loc: { start: 1608, end: 1699 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1705, end: 1710 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1700, end: 1710 },
    },
  ],
  loc: { start: 0, end: 1711 },
} as unknown as DocumentNode;
