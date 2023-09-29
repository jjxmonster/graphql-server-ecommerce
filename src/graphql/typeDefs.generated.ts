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
          name: { kind: "Name", value: "slug", loc: { start: 239, end: 243 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 245, end: 251 },
              },
              loc: { start: 245, end: 251 },
            },
            loc: { start: 245, end: 252 },
          },
          directives: [],
          loc: { start: 239, end: 252 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 255, end: 263 },
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
                    loc: { start: 266, end: 273 },
                  },
                  loc: { start: 266, end: 273 },
                },
                loc: { start: 266, end: 274 },
              },
              loc: { start: 265, end: 275 },
            },
            loc: { start: 265, end: 276 },
          },
          directives: [],
          loc: { start: 255, end: 276 },
        },
      ],
      loc: { start: 193, end: 278 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 285, end: 290 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 295, end: 306 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 309, end: 319 },
              },
              loc: { start: 309, end: 319 },
            },
            loc: { start: 308, end: 320 },
          },
          directives: [],
          loc: { start: 295, end: 320 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection_products",
            loc: { start: 323, end: 342 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 343, end: 347 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 349, end: 355 },
                  },
                  loc: { start: 349, end: 355 },
                },
                loc: { start: 349, end: 356 },
              },
              directives: [],
              loc: { start: 343, end: 356 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 359, end: 369 },
            },
            loc: { start: 359, end: 369 },
          },
          directives: [],
          loc: { start: 323, end: 369 },
        },
      ],
      loc: { start: 280, end: 371 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "OrderItem", loc: { start: 377, end: 386 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 391, end: 393 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 395, end: 397 },
              },
              loc: { start: 395, end: 397 },
            },
            loc: { start: 395, end: 398 },
          },
          directives: [],
          loc: { start: 391, end: 398 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 401, end: 409 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 411, end: 414 },
              },
              loc: { start: 411, end: 414 },
            },
            loc: { start: 411, end: 415 },
          },
          directives: [],
          loc: { start: 401, end: 415 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 418, end: 425 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 427, end: 434 },
              },
              loc: { start: 427, end: 434 },
            },
            loc: { start: 427, end: 435 },
          },
          directives: [],
          loc: { start: 418, end: 435 },
        },
      ],
      loc: { start: 372, end: 437 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 444, end: 449 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order_item",
            loc: { start: 454, end: 464 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 465, end: 467 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 469, end: 471 },
                  },
                  loc: { start: 469, end: 471 },
                },
                loc: { start: 469, end: 472 },
              },
              directives: [],
              loc: { start: 465, end: 472 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 475, end: 484 },
            },
            loc: { start: 475, end: 484 },
          },
          directives: [],
          loc: { start: 454, end: 484 },
        },
      ],
      loc: { start: 439, end: 486 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 493, end: 501 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 506, end: 521 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 522, end: 530 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 532, end: 535 },
                  },
                  loc: { start: 532, end: 535 },
                },
                loc: { start: 532, end: 536 },
              },
              directives: [],
              loc: { start: 522, end: 536 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 538, end: 547 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 549, end: 551 },
                  },
                  loc: { start: 549, end: 551 },
                },
                loc: { start: 549, end: 552 },
              },
              directives: [],
              loc: { start: 538, end: 552 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 555, end: 564 },
            },
            loc: { start: 555, end: 564 },
          },
          directives: [],
          loc: { start: 506, end: 564 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 567, end: 582 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 583, end: 585 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 587, end: 589 },
                  },
                  loc: { start: 587, end: 589 },
                },
                loc: { start: 587, end: 590 },
              },
              directives: [],
              loc: { start: 583, end: 590 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 592, end: 600 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 602, end: 605 },
                  },
                  loc: { start: 602, end: 605 },
                },
                loc: { start: 602, end: 606 },
              },
              directives: [],
              loc: { start: 592, end: 606 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 609, end: 618 },
            },
            loc: { start: 609, end: 618 },
          },
          directives: [],
          loc: { start: 567, end: 618 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 621, end: 636 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 637, end: 639 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 641, end: 643 },
                  },
                  loc: { start: 641, end: 643 },
                },
                loc: { start: 641, end: 644 },
              },
              directives: [],
              loc: { start: 637, end: 644 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 647, end: 649 } },
            loc: { start: 647, end: 649 },
          },
          directives: [],
          loc: { start: 621, end: 649 },
        },
      ],
      loc: { start: 488, end: 651 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Status", loc: { start: 657, end: 663 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PENDING",
            loc: { start: 668, end: 675 },
          },
          directives: [],
          loc: { start: 668, end: 675 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 678, end: 688 },
          },
          directives: [],
          loc: { start: 678, end: 688 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "SHIPPED",
            loc: { start: 691, end: 698 },
          },
          directives: [],
          loc: { start: 691, end: 698 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DELIVERED",
            loc: { start: 701, end: 710 },
          },
          directives: [],
          loc: { start: 701, end: 710 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELED",
            loc: { start: 713, end: 721 },
          },
          directives: [],
          loc: { start: 713, end: 721 },
        },
      ],
      loc: { start: 652, end: 723 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 730, end: 735 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 740, end: 742 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 744, end: 746 },
              },
              loc: { start: 744, end: 746 },
            },
            loc: { start: 744, end: 747 },
          },
          directives: [],
          loc: { start: 740, end: 747 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 750, end: 755 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 757, end: 760 },
              },
              loc: { start: 757, end: 760 },
            },
            loc: { start: 757, end: 761 },
          },
          directives: [],
          loc: { start: 750, end: 761 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 764, end: 770 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Status",
                loc: { start: 772, end: 778 },
              },
              loc: { start: 772, end: 778 },
            },
            loc: { start: 772, end: 779 },
          },
          directives: [],
          loc: { start: 764, end: 779 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 782, end: 792 },
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
                    loc: { start: 795, end: 804 },
                  },
                  loc: { start: 795, end: 804 },
                },
                loc: { start: 795, end: 805 },
              },
              loc: { start: 794, end: 806 },
            },
            loc: { start: 794, end: 807 },
          },
          directives: [],
          loc: { start: 782, end: 807 },
        },
      ],
      loc: { start: 725, end: 809 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 816, end: 821 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 826, end: 831 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 832, end: 834 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 836, end: 838 },
                  },
                  loc: { start: 836, end: 838 },
                },
                loc: { start: 836, end: 839 },
              },
              directives: [],
              loc: { start: 832, end: 839 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 842, end: 847 },
            },
            loc: { start: 842, end: 847 },
          },
          directives: [],
          loc: { start: 826, end: 847 },
        },
      ],
      loc: { start: 811, end: 849 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 856, end: 864 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 869, end: 880 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 881, end: 886 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 888, end: 891 },
                  },
                  loc: { start: 888, end: 891 },
                },
                loc: { start: 888, end: 892 },
              },
              directives: [],
              loc: { start: 881, end: 892 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 894, end: 900 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 902, end: 908 },
                  },
                  loc: { start: 902, end: 908 },
                },
                loc: { start: 902, end: 909 },
              },
              directives: [],
              loc: { start: 894, end: 909 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 912, end: 917 },
            },
            loc: { start: 912, end: 917 },
          },
          directives: [],
          loc: { start: 869, end: 917 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 920, end: 931 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 932, end: 934 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 936, end: 938 },
                  },
                  loc: { start: 936, end: 938 },
                },
                loc: { start: 936, end: 939 },
              },
              directives: [],
              loc: { start: 932, end: 939 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 941, end: 947 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 949, end: 955 },
                  },
                  loc: { start: 949, end: 955 },
                },
                loc: { start: 949, end: 956 },
              },
              directives: [],
              loc: { start: 941, end: 956 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 959, end: 964 },
            },
            loc: { start: 959, end: 964 },
          },
          directives: [],
          loc: { start: 920, end: 964 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 967, end: 978 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 979, end: 981 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 983, end: 985 },
                  },
                  loc: { start: 983, end: 985 },
                },
                loc: { start: 983, end: 986 },
              },
              directives: [],
              loc: { start: 979, end: 986 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 989, end: 991 } },
            loc: { start: 989, end: 991 },
          },
          directives: [],
          loc: { start: 967, end: 991 },
        },
      ],
      loc: { start: 851, end: 993 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductColorVariant",
        loc: { start: 999, end: 1018 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1023, end: 1025 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1027, end: 1029 },
              },
              loc: { start: 1027, end: 1029 },
            },
            loc: { start: 1027, end: 1030 },
          },
          directives: [],
          loc: { start: 1023, end: 1030 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1033, end: 1037 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1039, end: 1045 },
              },
              loc: { start: 1039, end: 1045 },
            },
            loc: { start: 1039, end: 1046 },
          },
          directives: [],
          loc: { start: 1033, end: 1046 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1049, end: 1053 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1055, end: 1061 },
              },
              loc: { start: 1055, end: 1061 },
            },
            loc: { start: 1055, end: 1062 },
          },
          directives: [],
          loc: { start: 1049, end: 1062 },
        },
      ],
      loc: { start: 994, end: 1064 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductSizeVariant",
        loc: { start: 1070, end: 1088 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1093, end: 1095 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1097, end: 1099 },
              },
              loc: { start: 1097, end: 1099 },
            },
            loc: { start: 1097, end: 1100 },
          },
          directives: [],
          loc: { start: 1093, end: 1100 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1103, end: 1107 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1109, end: 1115 },
              },
              loc: { start: 1109, end: 1115 },
            },
            loc: { start: 1109, end: 1116 },
          },
          directives: [],
          loc: { start: 1103, end: 1116 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1119, end: 1123 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1125, end: 1131 },
              },
              loc: { start: 1125, end: 1131 },
            },
            loc: { start: 1125, end: 1132 },
          },
          directives: [],
          loc: { start: 1119, end: 1132 },
        },
      ],
      loc: { start: 1065, end: 1134 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1140, end: 1147 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1152, end: 1154 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1156, end: 1158 },
              },
              loc: { start: 1156, end: 1158 },
            },
            loc: { start: 1156, end: 1159 },
          },
          directives: [],
          loc: { start: 1152, end: 1159 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1162, end: 1166 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1168, end: 1174 },
              },
              loc: { start: 1168, end: 1174 },
            },
            loc: { start: 1168, end: 1175 },
          },
          directives: [],
          loc: { start: 1162, end: 1175 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1178, end: 1182 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1184, end: 1190 },
              },
              loc: { start: 1184, end: 1190 },
            },
            loc: { start: 1184, end: 1191 },
          },
          directives: [],
          loc: { start: 1178, end: 1191 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1194, end: 1205 },
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
          loc: { start: 1194, end: 1214 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1217, end: 1222 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1224, end: 1227 },
              },
              loc: { start: 1224, end: 1227 },
            },
            loc: { start: 1224, end: 1228 },
          },
          directives: [],
          loc: { start: 1217, end: 1228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1231, end: 1236 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1238, end: 1244 },
              },
              loc: { start: 1238, end: 1244 },
            },
            loc: { start: 1238, end: 1245 },
          },
          directives: [],
          loc: { start: 1231, end: 1245 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1248, end: 1258 },
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
                    loc: { start: 1261, end: 1269 },
                  },
                  loc: { start: 1261, end: 1269 },
                },
                loc: { start: 1261, end: 1270 },
              },
              loc: { start: 1260, end: 1271 },
            },
            loc: { start: 1260, end: 1272 },
          },
          directives: [],
          loc: { start: 1248, end: 1272 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1275, end: 1286 },
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
                    loc: { start: 1289, end: 1299 },
                  },
                  loc: { start: 1289, end: 1299 },
                },
                loc: { start: 1289, end: 1300 },
              },
              loc: { start: 1288, end: 1301 },
            },
            loc: { start: 1288, end: 1302 },
          },
          directives: [],
          loc: { start: 1275, end: 1302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1305, end: 1327 },
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
                  loc: { start: 1330, end: 1349 },
                },
                loc: { start: 1330, end: 1349 },
              },
              loc: { start: 1329, end: 1350 },
            },
            loc: { start: 1329, end: 1351 },
          },
          directives: [],
          loc: { start: 1305, end: 1351 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1354, end: 1375 },
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
                  loc: { start: 1378, end: 1396 },
                },
                loc: { start: 1378, end: 1396 },
              },
              loc: { start: 1377, end: 1397 },
            },
            loc: { start: 1377, end: 1398 },
          },
          directives: [],
          loc: { start: 1354, end: 1398 },
        },
      ],
      loc: { start: 1135, end: 1400 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1407, end: 1412 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1417, end: 1425 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1426, end: 1432 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1434, end: 1437 },
                },
                loc: { start: 1434, end: 1437 },
              },
              directives: [],
              loc: { start: 1426, end: 1437 },
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
                    loc: { start: 1441, end: 1448 },
                  },
                  loc: { start: 1441, end: 1448 },
                },
                loc: { start: 1441, end: 1449 },
              },
              loc: { start: 1440, end: 1450 },
            },
            loc: { start: 1440, end: 1451 },
          },
          directives: [],
          loc: { start: 1417, end: 1451 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1454, end: 1461 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1462, end: 1464 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1466, end: 1468 },
                  },
                  loc: { start: 1466, end: 1468 },
                },
                loc: { start: 1466, end: 1469 },
              },
              directives: [],
              loc: { start: 1462, end: 1469 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1472, end: 1479 },
            },
            loc: { start: 1472, end: 1479 },
          },
          directives: [],
          loc: { start: 1454, end: 1479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1482, end: 1498 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1499, end: 1508 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1510, end: 1512 },
                  },
                  loc: { start: 1510, end: 1512 },
                },
                loc: { start: 1510, end: 1513 },
              },
              directives: [],
              loc: { start: 1499, end: 1513 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1515, end: 1523 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1525, end: 1531 },
                  },
                  loc: { start: 1525, end: 1531 },
                },
                loc: { start: 1525, end: 1532 },
              },
              directives: [],
              loc: { start: 1515, end: 1532 },
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
                    loc: { start: 1536, end: 1543 },
                  },
                  loc: { start: 1536, end: 1543 },
                },
                loc: { start: 1536, end: 1544 },
              },
              loc: { start: 1535, end: 1545 },
            },
            loc: { start: 1535, end: 1546 },
          },
          directives: [],
          loc: { start: 1482, end: 1546 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1549, end: 1568 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1569, end: 1576 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1578, end: 1584 },
                  },
                  loc: { start: 1578, end: 1584 },
                },
                loc: { start: 1578, end: 1585 },
              },
              directives: [],
              loc: { start: 1569, end: 1585 },
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
                    loc: { start: 1589, end: 1596 },
                  },
                  loc: { start: 1589, end: 1596 },
                },
                loc: { start: 1589, end: 1597 },
              },
              loc: { start: 1588, end: 1598 },
            },
            loc: { start: 1588, end: 1599 },
          },
          directives: [],
          loc: { start: 1549, end: 1599 },
        },
      ],
      loc: { start: 1402, end: 1601 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1608, end: 1616 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1621, end: 1634 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1635, end: 1640 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1642, end: 1654 },
                  },
                  loc: { start: 1642, end: 1654 },
                },
                loc: { start: 1642, end: 1655 },
              },
              directives: [],
              loc: { start: 1635, end: 1655 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1658, end: 1665 },
            },
            loc: { start: 1658, end: 1665 },
          },
          directives: [],
          loc: { start: 1621, end: 1665 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1668, end: 1681 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1682, end: 1684 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1686, end: 1688 },
                  },
                  loc: { start: 1686, end: 1688 },
                },
                loc: { start: 1686, end: 1689 },
              },
              directives: [],
              loc: { start: 1682, end: 1689 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1691, end: 1696 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1698, end: 1710 },
                  },
                  loc: { start: 1698, end: 1710 },
                },
                loc: { start: 1698, end: 1711 },
              },
              directives: [],
              loc: { start: 1691, end: 1711 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1714, end: 1721 },
            },
            loc: { start: 1714, end: 1721 },
          },
          directives: [],
          loc: { start: 1668, end: 1721 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1724, end: 1737 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1738, end: 1740 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1742, end: 1744 },
                  },
                  loc: { start: 1742, end: 1744 },
                },
                loc: { start: 1742, end: 1745 },
              },
              directives: [],
              loc: { start: 1738, end: 1745 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1748, end: 1755 },
            },
            loc: { start: 1748, end: 1755 },
          },
          directives: [],
          loc: { start: 1724, end: 1755 },
        },
      ],
      loc: { start: 1603, end: 1757 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1765, end: 1777 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1782, end: 1786 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1788, end: 1794 },
              },
              loc: { start: 1788, end: 1794 },
            },
            loc: { start: 1788, end: 1795 },
          },
          directives: [],
          loc: { start: 1782, end: 1795 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1798, end: 1802 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1804, end: 1810 },
              },
              loc: { start: 1804, end: 1810 },
            },
            loc: { start: 1804, end: 1811 },
          },
          directives: [],
          loc: { start: 1798, end: 1811 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1814, end: 1825 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1827, end: 1833 },
              },
              loc: { start: 1827, end: 1833 },
            },
            loc: { start: 1827, end: 1834 },
          },
          directives: [],
          loc: { start: 1814, end: 1834 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1837, end: 1842 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1844, end: 1847 },
              },
              loc: { start: 1844, end: 1847 },
            },
            loc: { start: 1844, end: 1848 },
          },
          directives: [],
          loc: { start: 1837, end: 1848 },
        },
      ],
      loc: { start: 1759, end: 1850 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1856, end: 1861 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1851, end: 1861 },
    },
  ],
  loc: { start: 0, end: 1862 },
} as unknown as DocumentNode;
