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
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 44, end: 52 },
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
                    loc: { start: 55, end: 62 },
                  },
                  loc: { start: 55, end: 62 },
                },
                loc: { start: 55, end: 63 },
              },
              loc: { start: 54, end: 64 },
            },
            loc: { start: 54, end: 65 },
          },
          directives: [],
          loc: { start: 44, end: 65 },
        },
      ],
      loc: { start: 0, end: 67 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 74, end: 79 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 84, end: 94 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 97, end: 105 },
              },
              loc: { start: 97, end: 105 },
            },
            loc: { start: 96, end: 106 },
          },
          directives: [],
          loc: { start: 84, end: 106 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 109, end: 117 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 118, end: 120 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 122, end: 124 },
                  },
                  loc: { start: 122, end: 124 },
                },
                loc: { start: 122, end: 125 },
              },
              directives: [],
              loc: { start: 118, end: 125 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 128, end: 136 },
            },
            loc: { start: 128, end: 136 },
          },
          directives: [],
          loc: { start: 109, end: 136 },
        },
      ],
      loc: { start: 69, end: 138 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 145, end: 153 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCategory",
            loc: { start: 158, end: 172 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 173, end: 178 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CategoryInput",
                    loc: { start: 180, end: 193 },
                  },
                  loc: { start: 180, end: 193 },
                },
                loc: { start: 180, end: 194 },
              },
              directives: [],
              loc: { start: 173, end: 194 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 197, end: 205 },
            },
            loc: { start: 197, end: 205 },
          },
          directives: [],
          loc: { start: 158, end: 205 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCategory",
            loc: { start: 208, end: 222 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 223, end: 225 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 227, end: 229 },
                  },
                  loc: { start: 227, end: 229 },
                },
                loc: { start: 227, end: 230 },
              },
              directives: [],
              loc: { start: 223, end: 230 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 232, end: 237 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CategoryInput",
                    loc: { start: 239, end: 252 },
                  },
                  loc: { start: 239, end: 252 },
                },
                loc: { start: 239, end: 253 },
              },
              directives: [],
              loc: { start: 232, end: 253 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 256, end: 264 },
            },
            loc: { start: 256, end: 264 },
          },
          directives: [],
          loc: { start: 208, end: 264 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCategory",
            loc: { start: 267, end: 281 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 282, end: 284 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 286, end: 288 },
                  },
                  loc: { start: 286, end: 288 },
                },
                loc: { start: 286, end: 289 },
              },
              directives: [],
              loc: { start: 282, end: 289 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 292, end: 300 },
            },
            loc: { start: 292, end: 300 },
          },
          directives: [],
          loc: { start: 267, end: 300 },
        },
      ],
      loc: { start: 140, end: 302 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CategoryInput",
        loc: { start: 310, end: 323 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 328, end: 332 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 334, end: 340 },
              },
              loc: { start: 334, end: 340 },
            },
            loc: { start: 334, end: 341 },
          },
          directives: [],
          loc: { start: 328, end: 341 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 344, end: 355 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 357, end: 363 },
            },
            loc: { start: 357, end: 363 },
          },
          directives: [],
          loc: { start: 344, end: 363 },
        },
      ],
      loc: { start: 304, end: 365 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 371, end: 381 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 386, end: 388 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 390, end: 392 },
              },
              loc: { start: 390, end: 392 },
            },
            loc: { start: 390, end: 393 },
          },
          directives: [],
          loc: { start: 386, end: 393 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 396, end: 400 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 402, end: 408 },
              },
              loc: { start: 402, end: 408 },
            },
            loc: { start: 402, end: 409 },
          },
          directives: [],
          loc: { start: 396, end: 409 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 412, end: 420 },
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
                    loc: { start: 423, end: 430 },
                  },
                  loc: { start: 423, end: 430 },
                },
                loc: { start: 423, end: 431 },
              },
              loc: { start: 422, end: 432 },
            },
            loc: { start: 422, end: 433 },
          },
          directives: [],
          loc: { start: 412, end: 433 },
        },
      ],
      loc: { start: 366, end: 435 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 442, end: 447 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 452, end: 463 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 466, end: 476 },
              },
              loc: { start: 466, end: 476 },
            },
            loc: { start: 465, end: 477 },
          },
          directives: [],
          loc: { start: 452, end: 477 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 480, end: 490 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 491, end: 493 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 495, end: 497 },
                  },
                  loc: { start: 495, end: 497 },
                },
                loc: { start: 495, end: 498 },
              },
              directives: [],
              loc: { start: 491, end: 498 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 501, end: 511 },
            },
            loc: { start: 501, end: 511 },
          },
          directives: [],
          loc: { start: 480, end: 511 },
        },
      ],
      loc: { start: 437, end: 513 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 520, end: 528 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCollection",
            loc: { start: 533, end: 549 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 550, end: 555 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 557, end: 572 },
                  },
                  loc: { start: 557, end: 572 },
                },
                loc: { start: 557, end: 573 },
              },
              directives: [],
              loc: { start: 550, end: 573 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 576, end: 586 },
            },
            loc: { start: 576, end: 586 },
          },
          directives: [],
          loc: { start: 533, end: 586 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCollection",
            loc: { start: 589, end: 605 },
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
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 615, end: 620 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 622, end: 637 },
                  },
                  loc: { start: 622, end: 637 },
                },
                loc: { start: 622, end: 638 },
              },
              directives: [],
              loc: { start: 615, end: 638 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 641, end: 651 },
            },
            loc: { start: 641, end: 651 },
          },
          directives: [],
          loc: { start: 589, end: 651 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCollection",
            loc: { start: 654, end: 670 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 671, end: 673 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 675, end: 677 },
                  },
                  loc: { start: 675, end: 677 },
                },
                loc: { start: 675, end: 678 },
              },
              directives: [],
              loc: { start: 671, end: 678 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 681, end: 691 },
            },
            loc: { start: 681, end: 691 },
          },
          directives: [],
          loc: { start: 654, end: 691 },
        },
      ],
      loc: { start: 515, end: 693 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CollectionInput",
        loc: { start: 701, end: 716 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 721, end: 725 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 727, end: 733 },
              },
              loc: { start: 727, end: 733 },
            },
            loc: { start: 727, end: 734 },
          },
          directives: [],
          loc: { start: 721, end: 734 },
        },
      ],
      loc: { start: 695, end: 736 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "OrderItem", loc: { start: 742, end: 751 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 756, end: 758 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 760, end: 762 },
              },
              loc: { start: 760, end: 762 },
            },
            loc: { start: 760, end: 763 },
          },
          directives: [],
          loc: { start: 756, end: 763 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 766, end: 774 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 776, end: 779 },
              },
              loc: { start: 776, end: 779 },
            },
            loc: { start: 776, end: 780 },
          },
          directives: [],
          loc: { start: 766, end: 780 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 783, end: 790 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 792, end: 799 },
              },
              loc: { start: 792, end: 799 },
            },
            loc: { start: 792, end: 800 },
          },
          directives: [],
          loc: { start: 783, end: 800 },
        },
      ],
      loc: { start: 737, end: 802 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 809, end: 814 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getOrderItem",
            loc: { start: 819, end: 831 },
          },
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
              value: "OrderItem",
              loc: { start: 842, end: 851 },
            },
            loc: { start: 842, end: 851 },
          },
          directives: [],
          loc: { start: 819, end: 851 },
        },
      ],
      loc: { start: 804, end: 853 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 860, end: 868 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 873, end: 888 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 889, end: 897 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 899, end: 902 },
                  },
                  loc: { start: 899, end: 902 },
                },
                loc: { start: 899, end: 903 },
              },
              directives: [],
              loc: { start: 889, end: 903 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 905, end: 914 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 916, end: 918 },
                  },
                  loc: { start: 916, end: 918 },
                },
                loc: { start: 916, end: 919 },
              },
              directives: [],
              loc: { start: 905, end: 919 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 922, end: 931 },
            },
            loc: { start: 922, end: 931 },
          },
          directives: [],
          loc: { start: 873, end: 931 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 934, end: 949 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 950, end: 952 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 954, end: 956 },
                  },
                  loc: { start: 954, end: 956 },
                },
                loc: { start: 954, end: 957 },
              },
              directives: [],
              loc: { start: 950, end: 957 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 959, end: 967 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 969, end: 972 },
                  },
                  loc: { start: 969, end: 972 },
                },
                loc: { start: 969, end: 973 },
              },
              directives: [],
              loc: { start: 959, end: 973 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 976, end: 985 },
            },
            loc: { start: 976, end: 985 },
          },
          directives: [],
          loc: { start: 934, end: 985 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 988, end: 1003 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1004, end: 1006 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1008, end: 1010 },
                  },
                  loc: { start: 1008, end: 1010 },
                },
                loc: { start: 1008, end: 1011 },
              },
              directives: [],
              loc: { start: 1004, end: 1011 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1014, end: 1016 },
            },
            loc: { start: 1014, end: 1016 },
          },
          directives: [],
          loc: { start: 988, end: 1016 },
        },
      ],
      loc: { start: 855, end: 1018 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Status", loc: { start: 1024, end: 1030 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PENDING",
            loc: { start: 1035, end: 1042 },
          },
          directives: [],
          loc: { start: 1035, end: 1042 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 1045, end: 1055 },
          },
          directives: [],
          loc: { start: 1045, end: 1055 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "SHIPPED",
            loc: { start: 1058, end: 1065 },
          },
          directives: [],
          loc: { start: 1058, end: 1065 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DELIVERED",
            loc: { start: 1068, end: 1077 },
          },
          directives: [],
          loc: { start: 1068, end: 1077 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELED",
            loc: { start: 1080, end: 1088 },
          },
          directives: [],
          loc: { start: 1080, end: 1088 },
        },
      ],
      loc: { start: 1019, end: 1090 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 1097, end: 1102 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1107, end: 1109 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1111, end: 1113 },
              },
              loc: { start: 1111, end: 1113 },
            },
            loc: { start: 1111, end: 1114 },
          },
          directives: [],
          loc: { start: 1107, end: 1114 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 1117, end: 1122 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1124, end: 1127 },
              },
              loc: { start: 1124, end: 1127 },
            },
            loc: { start: 1124, end: 1128 },
          },
          directives: [],
          loc: { start: 1117, end: 1128 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 1131, end: 1137 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Status",
                loc: { start: 1139, end: 1145 },
              },
              loc: { start: 1139, end: 1145 },
            },
            loc: { start: 1139, end: 1146 },
          },
          directives: [],
          loc: { start: 1131, end: 1146 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 1149, end: 1159 },
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
                    loc: { start: 1162, end: 1171 },
                  },
                  loc: { start: 1162, end: 1171 },
                },
                loc: { start: 1162, end: 1172 },
              },
              loc: { start: 1161, end: 1173 },
            },
            loc: { start: 1161, end: 1174 },
          },
          directives: [],
          loc: { start: 1149, end: 1174 },
        },
      ],
      loc: { start: 1092, end: 1176 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1183, end: 1188 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "getOrder",
            loc: { start: 1193, end: 1201 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1202, end: 1204 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1206, end: 1208 },
                  },
                  loc: { start: 1206, end: 1208 },
                },
                loc: { start: 1206, end: 1209 },
              },
              directives: [],
              loc: { start: 1202, end: 1209 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1212, end: 1217 },
            },
            loc: { start: 1212, end: 1217 },
          },
          directives: [],
          loc: { start: 1193, end: 1217 },
        },
      ],
      loc: { start: 1178, end: 1219 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1226, end: 1234 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 1239, end: 1250 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 1251, end: 1256 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1258, end: 1261 },
                  },
                  loc: { start: 1258, end: 1261 },
                },
                loc: { start: 1258, end: 1262 },
              },
              directives: [],
              loc: { start: 1251, end: 1262 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1264, end: 1270 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 1272, end: 1278 },
                  },
                  loc: { start: 1272, end: 1278 },
                },
                loc: { start: 1272, end: 1279 },
              },
              directives: [],
              loc: { start: 1264, end: 1279 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1282, end: 1287 },
            },
            loc: { start: 1282, end: 1287 },
          },
          directives: [],
          loc: { start: 1239, end: 1287 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 1290, end: 1301 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1302, end: 1304 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1306, end: 1308 },
                  },
                  loc: { start: 1306, end: 1308 },
                },
                loc: { start: 1306, end: 1309 },
              },
              directives: [],
              loc: { start: 1302, end: 1309 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1311, end: 1317 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Status",
                    loc: { start: 1319, end: 1325 },
                  },
                  loc: { start: 1319, end: 1325 },
                },
                loc: { start: 1319, end: 1326 },
              },
              directives: [],
              loc: { start: 1311, end: 1326 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1329, end: 1334 },
            },
            loc: { start: 1329, end: 1334 },
          },
          directives: [],
          loc: { start: 1290, end: 1334 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 1337, end: 1348 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1349, end: 1351 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1353, end: 1355 },
                  },
                  loc: { start: 1353, end: 1355 },
                },
                loc: { start: 1353, end: 1356 },
              },
              directives: [],
              loc: { start: 1349, end: 1356 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 1359, end: 1361 },
            },
            loc: { start: 1359, end: 1361 },
          },
          directives: [],
          loc: { start: 1337, end: 1361 },
        },
      ],
      loc: { start: 1221, end: 1363 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1369, end: 1376 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1381, end: 1383 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1385, end: 1387 },
              },
              loc: { start: 1385, end: 1387 },
            },
            loc: { start: 1385, end: 1388 },
          },
          directives: [],
          loc: { start: 1381, end: 1388 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1391, end: 1395 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1397, end: 1403 },
              },
              loc: { start: 1397, end: 1403 },
            },
            loc: { start: 1397, end: 1404 },
          },
          directives: [],
          loc: { start: 1391, end: 1404 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1407, end: 1411 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1413, end: 1419 },
              },
              loc: { start: 1413, end: 1419 },
            },
            loc: { start: 1413, end: 1420 },
          },
          directives: [],
          loc: { start: 1407, end: 1420 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1423, end: 1434 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1436, end: 1442 },
              },
              loc: { start: 1436, end: 1442 },
            },
            loc: { start: 1436, end: 1443 },
          },
          directives: [],
          loc: { start: 1423, end: 1443 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1446, end: 1451 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1453, end: 1456 },
              },
              loc: { start: 1453, end: 1456 },
            },
            loc: { start: 1453, end: 1457 },
          },
          directives: [],
          loc: { start: 1446, end: 1457 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1460, end: 1465 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1467, end: 1473 },
              },
              loc: { start: 1467, end: 1473 },
            },
            loc: { start: 1467, end: 1474 },
          },
          directives: [],
          loc: { start: 1460, end: 1474 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1477, end: 1487 },
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
                    loc: { start: 1490, end: 1498 },
                  },
                  loc: { start: 1490, end: 1498 },
                },
                loc: { start: 1490, end: 1499 },
              },
              loc: { start: 1489, end: 1500 },
            },
            loc: { start: 1489, end: 1501 },
          },
          directives: [],
          loc: { start: 1477, end: 1501 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1504, end: 1515 },
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
                    loc: { start: 1518, end: 1528 },
                  },
                  loc: { start: 1518, end: 1528 },
                },
                loc: { start: 1518, end: 1529 },
              },
              loc: { start: 1517, end: 1530 },
            },
            loc: { start: 1517, end: 1531 },
          },
          directives: [],
          loc: { start: 1504, end: 1531 },
        },
      ],
      loc: { start: 1364, end: 1533 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1540, end: 1545 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1550, end: 1558 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1561, end: 1568 },
              },
              loc: { start: 1561, end: 1568 },
            },
            loc: { start: 1560, end: 1569 },
          },
          directives: [],
          loc: { start: 1550, end: 1569 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1572, end: 1579 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1580, end: 1582 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1584, end: 1586 },
                  },
                  loc: { start: 1584, end: 1586 },
                },
                loc: { start: 1584, end: 1587 },
              },
              directives: [],
              loc: { start: 1580, end: 1587 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1590, end: 1597 },
            },
            loc: { start: 1590, end: 1597 },
          },
          directives: [],
          loc: { start: 1572, end: 1597 },
        },
      ],
      loc: { start: 1535, end: 1599 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1606, end: 1614 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1619, end: 1632 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1633, end: 1638 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1640, end: 1652 },
                  },
                  loc: { start: 1640, end: 1652 },
                },
                loc: { start: 1640, end: 1653 },
              },
              directives: [],
              loc: { start: 1633, end: 1653 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1656, end: 1663 },
            },
            loc: { start: 1656, end: 1663 },
          },
          directives: [],
          loc: { start: 1619, end: 1663 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1666, end: 1679 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1680, end: 1682 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1684, end: 1686 },
                  },
                  loc: { start: 1684, end: 1686 },
                },
                loc: { start: 1684, end: 1687 },
              },
              directives: [],
              loc: { start: 1680, end: 1687 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1689, end: 1694 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1696, end: 1708 },
                  },
                  loc: { start: 1696, end: 1708 },
                },
                loc: { start: 1696, end: 1709 },
              },
              directives: [],
              loc: { start: 1689, end: 1709 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1712, end: 1719 },
            },
            loc: { start: 1712, end: 1719 },
          },
          directives: [],
          loc: { start: 1666, end: 1719 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1722, end: 1735 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1736, end: 1738 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1740, end: 1742 },
                  },
                  loc: { start: 1740, end: 1742 },
                },
                loc: { start: 1740, end: 1743 },
              },
              directives: [],
              loc: { start: 1736, end: 1743 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1746, end: 1753 },
            },
            loc: { start: 1746, end: 1753 },
          },
          directives: [],
          loc: { start: 1722, end: 1753 },
        },
      ],
      loc: { start: 1601, end: 1755 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1763, end: 1775 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1780, end: 1784 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1786, end: 1792 },
              },
              loc: { start: 1786, end: 1792 },
            },
            loc: { start: 1786, end: 1793 },
          },
          directives: [],
          loc: { start: 1780, end: 1793 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1796, end: 1800 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1802, end: 1808 },
              },
              loc: { start: 1802, end: 1808 },
            },
            loc: { start: 1802, end: 1809 },
          },
          directives: [],
          loc: { start: 1796, end: 1809 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1812, end: 1823 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1825, end: 1831 },
              },
              loc: { start: 1825, end: 1831 },
            },
            loc: { start: 1825, end: 1832 },
          },
          directives: [],
          loc: { start: 1812, end: 1832 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1835, end: 1840 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1842, end: 1845 },
              },
              loc: { start: 1842, end: 1845 },
            },
            loc: { start: 1842, end: 1846 },
          },
          directives: [],
          loc: { start: 1835, end: 1846 },
        },
      ],
      loc: { start: 1757, end: 1848 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1854, end: 1859 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1849, end: 1859 },
    },
  ],
  loc: { start: 0, end: 1860 },
} as unknown as DocumentNode;
