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
      name: { kind: "Name", value: "Product", loc: { start: 742, end: 749 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 754, end: 756 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 758, end: 760 },
              },
              loc: { start: 758, end: 760 },
            },
            loc: { start: 758, end: 761 },
          },
          directives: [],
          loc: { start: 754, end: 761 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 764, end: 768 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 770, end: 776 },
              },
              loc: { start: 770, end: 776 },
            },
            loc: { start: 770, end: 777 },
          },
          directives: [],
          loc: { start: 764, end: 777 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 780, end: 784 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 786, end: 792 },
              },
              loc: { start: 786, end: 792 },
            },
            loc: { start: 786, end: 793 },
          },
          directives: [],
          loc: { start: 780, end: 793 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 796, end: 807 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 809, end: 815 },
              },
              loc: { start: 809, end: 815 },
            },
            loc: { start: 809, end: 816 },
          },
          directives: [],
          loc: { start: 796, end: 816 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 819, end: 824 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 826, end: 829 },
              },
              loc: { start: 826, end: 829 },
            },
            loc: { start: 826, end: 830 },
          },
          directives: [],
          loc: { start: 819, end: 830 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 833, end: 838 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 840, end: 846 },
              },
              loc: { start: 840, end: 846 },
            },
            loc: { start: 840, end: 847 },
          },
          directives: [],
          loc: { start: 833, end: 847 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 850, end: 860 },
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
                    loc: { start: 863, end: 871 },
                  },
                  loc: { start: 863, end: 871 },
                },
                loc: { start: 863, end: 872 },
              },
              loc: { start: 862, end: 873 },
            },
            loc: { start: 862, end: 874 },
          },
          directives: [],
          loc: { start: 850, end: 874 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 877, end: 888 },
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
                    loc: { start: 891, end: 901 },
                  },
                  loc: { start: 891, end: 901 },
                },
                loc: { start: 891, end: 902 },
              },
              loc: { start: 890, end: 903 },
            },
            loc: { start: 890, end: 904 },
          },
          directives: [],
          loc: { start: 877, end: 904 },
        },
      ],
      loc: { start: 737, end: 906 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 913, end: 918 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 923, end: 931 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 934, end: 941 },
              },
              loc: { start: 934, end: 941 },
            },
            loc: { start: 933, end: 942 },
          },
          directives: [],
          loc: { start: 923, end: 942 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 945, end: 952 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 953, end: 955 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 957, end: 959 },
                  },
                  loc: { start: 957, end: 959 },
                },
                loc: { start: 957, end: 960 },
              },
              directives: [],
              loc: { start: 953, end: 960 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 963, end: 970 },
            },
            loc: { start: 963, end: 970 },
          },
          directives: [],
          loc: { start: 945, end: 970 },
        },
      ],
      loc: { start: 908, end: 972 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 979, end: 987 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 992, end: 1005 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1006, end: 1011 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1013, end: 1025 },
                  },
                  loc: { start: 1013, end: 1025 },
                },
                loc: { start: 1013, end: 1026 },
              },
              directives: [],
              loc: { start: 1006, end: 1026 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1029, end: 1036 },
            },
            loc: { start: 1029, end: 1036 },
          },
          directives: [],
          loc: { start: 992, end: 1036 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1039, end: 1052 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1053, end: 1055 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1057, end: 1059 },
                  },
                  loc: { start: 1057, end: 1059 },
                },
                loc: { start: 1057, end: 1060 },
              },
              directives: [],
              loc: { start: 1053, end: 1060 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1062, end: 1067 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1069, end: 1081 },
                  },
                  loc: { start: 1069, end: 1081 },
                },
                loc: { start: 1069, end: 1082 },
              },
              directives: [],
              loc: { start: 1062, end: 1082 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1085, end: 1092 },
            },
            loc: { start: 1085, end: 1092 },
          },
          directives: [],
          loc: { start: 1039, end: 1092 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1095, end: 1108 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1109, end: 1111 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1113, end: 1115 },
                  },
                  loc: { start: 1113, end: 1115 },
                },
                loc: { start: 1113, end: 1116 },
              },
              directives: [],
              loc: { start: 1109, end: 1116 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1119, end: 1126 },
            },
            loc: { start: 1119, end: 1126 },
          },
          directives: [],
          loc: { start: 1095, end: 1126 },
        },
      ],
      loc: { start: 974, end: 1128 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1136, end: 1148 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1153, end: 1157 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1159, end: 1165 },
              },
              loc: { start: 1159, end: 1165 },
            },
            loc: { start: 1159, end: 1166 },
          },
          directives: [],
          loc: { start: 1153, end: 1166 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1169, end: 1173 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1175, end: 1181 },
              },
              loc: { start: 1175, end: 1181 },
            },
            loc: { start: 1175, end: 1182 },
          },
          directives: [],
          loc: { start: 1169, end: 1182 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1185, end: 1196 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1198, end: 1204 },
              },
              loc: { start: 1198, end: 1204 },
            },
            loc: { start: 1198, end: 1205 },
          },
          directives: [],
          loc: { start: 1185, end: 1205 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1208, end: 1213 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1215, end: 1218 },
              },
              loc: { start: 1215, end: 1218 },
            },
            loc: { start: 1215, end: 1219 },
          },
          directives: [],
          loc: { start: 1208, end: 1219 },
        },
      ],
      loc: { start: 1130, end: 1221 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1227, end: 1232 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1222, end: 1232 },
    },
  ],
  loc: { start: 0, end: 1233 },
} as unknown as DocumentNode;
