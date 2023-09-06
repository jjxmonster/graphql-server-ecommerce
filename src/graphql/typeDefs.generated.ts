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
            value: "description",
            loc: { start: 60, end: 71 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 73, end: 79 },
            },
            loc: { start: 73, end: 79 },
          },
          directives: [],
          loc: { start: 60, end: 79 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 82, end: 90 },
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
                    loc: { start: 93, end: 100 },
                  },
                  loc: { start: 93, end: 100 },
                },
                loc: { start: 93, end: 101 },
              },
              loc: { start: 92, end: 102 },
            },
            loc: { start: 92, end: 103 },
          },
          directives: [],
          loc: { start: 82, end: 103 },
        },
      ],
      loc: { start: 0, end: 105 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 112, end: 117 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 122, end: 132 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 135, end: 143 },
              },
              loc: { start: 135, end: 143 },
            },
            loc: { start: 134, end: 144 },
          },
          directives: [],
          loc: { start: 122, end: 144 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 147, end: 155 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 156, end: 158 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 160, end: 162 },
                  },
                  loc: { start: 160, end: 162 },
                },
                loc: { start: 160, end: 163 },
              },
              directives: [],
              loc: { start: 156, end: 163 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 166, end: 174 },
            },
            loc: { start: 166, end: 174 },
          },
          directives: [],
          loc: { start: 147, end: 174 },
        },
      ],
      loc: { start: 107, end: 176 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 183, end: 191 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCategory",
            loc: { start: 196, end: 210 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 211, end: 216 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CategoryInput",
                    loc: { start: 218, end: 231 },
                  },
                  loc: { start: 218, end: 231 },
                },
                loc: { start: 218, end: 232 },
              },
              directives: [],
              loc: { start: 211, end: 232 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 235, end: 243 },
            },
            loc: { start: 235, end: 243 },
          },
          directives: [],
          loc: { start: 196, end: 243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCategory",
            loc: { start: 246, end: 260 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 261, end: 263 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 265, end: 267 },
                  },
                  loc: { start: 265, end: 267 },
                },
                loc: { start: 265, end: 268 },
              },
              directives: [],
              loc: { start: 261, end: 268 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 270, end: 275 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CategoryInput",
                    loc: { start: 277, end: 290 },
                  },
                  loc: { start: 277, end: 290 },
                },
                loc: { start: 277, end: 291 },
              },
              directives: [],
              loc: { start: 270, end: 291 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 294, end: 302 },
            },
            loc: { start: 294, end: 302 },
          },
          directives: [],
          loc: { start: 246, end: 302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCategory",
            loc: { start: 305, end: 319 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 320, end: 322 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 324, end: 326 },
                  },
                  loc: { start: 324, end: 326 },
                },
                loc: { start: 324, end: 327 },
              },
              directives: [],
              loc: { start: 320, end: 327 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 330, end: 338 },
            },
            loc: { start: 330, end: 338 },
          },
          directives: [],
          loc: { start: 305, end: 338 },
        },
      ],
      loc: { start: 178, end: 340 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CategoryInput",
        loc: { start: 348, end: 361 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 366, end: 370 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 372, end: 378 },
              },
              loc: { start: 372, end: 378 },
            },
            loc: { start: 372, end: 379 },
          },
          directives: [],
          loc: { start: 366, end: 379 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 382, end: 386 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 388, end: 394 },
              },
              loc: { start: 388, end: 394 },
            },
            loc: { start: 388, end: 395 },
          },
          directives: [],
          loc: { start: 382, end: 395 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 398, end: 409 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 411, end: 417 },
            },
            loc: { start: 411, end: 417 },
          },
          directives: [],
          loc: { start: 398, end: 417 },
        },
      ],
      loc: { start: 342, end: 419 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 425, end: 435 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 440, end: 442 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 444, end: 446 },
              },
              loc: { start: 444, end: 446 },
            },
            loc: { start: 444, end: 447 },
          },
          directives: [],
          loc: { start: 440, end: 447 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 450, end: 454 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 456, end: 462 },
              },
              loc: { start: 456, end: 462 },
            },
            loc: { start: 456, end: 463 },
          },
          directives: [],
          loc: { start: 450, end: 463 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 466, end: 474 },
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
                    loc: { start: 477, end: 484 },
                  },
                  loc: { start: 477, end: 484 },
                },
                loc: { start: 477, end: 485 },
              },
              loc: { start: 476, end: 486 },
            },
            loc: { start: 476, end: 487 },
          },
          directives: [],
          loc: { start: 466, end: 487 },
        },
      ],
      loc: { start: 420, end: 489 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 496, end: 501 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 506, end: 517 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 520, end: 530 },
              },
              loc: { start: 520, end: 530 },
            },
            loc: { start: 519, end: 531 },
          },
          directives: [],
          loc: { start: 506, end: 531 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 534, end: 544 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 545, end: 547 },
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
              loc: { start: 545, end: 552 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 555, end: 565 },
            },
            loc: { start: 555, end: 565 },
          },
          directives: [],
          loc: { start: 534, end: 565 },
        },
      ],
      loc: { start: 491, end: 567 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 574, end: 582 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCollection",
            loc: { start: 587, end: 603 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 604, end: 609 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 611, end: 626 },
                  },
                  loc: { start: 611, end: 626 },
                },
                loc: { start: 611, end: 627 },
              },
              directives: [],
              loc: { start: 604, end: 627 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 630, end: 640 },
            },
            loc: { start: 630, end: 640 },
          },
          directives: [],
          loc: { start: 587, end: 640 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCollection",
            loc: { start: 643, end: 659 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 660, end: 662 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 664, end: 666 },
                  },
                  loc: { start: 664, end: 666 },
                },
                loc: { start: 664, end: 667 },
              },
              directives: [],
              loc: { start: 660, end: 667 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 669, end: 674 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 676, end: 691 },
                  },
                  loc: { start: 676, end: 691 },
                },
                loc: { start: 676, end: 692 },
              },
              directives: [],
              loc: { start: 669, end: 692 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 695, end: 705 },
            },
            loc: { start: 695, end: 705 },
          },
          directives: [],
          loc: { start: 643, end: 705 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCollection",
            loc: { start: 708, end: 724 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 725, end: 727 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 729, end: 731 },
                  },
                  loc: { start: 729, end: 731 },
                },
                loc: { start: 729, end: 732 },
              },
              directives: [],
              loc: { start: 725, end: 732 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 735, end: 745 },
            },
            loc: { start: 735, end: 745 },
          },
          directives: [],
          loc: { start: 708, end: 745 },
        },
      ],
      loc: { start: 569, end: 747 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CollectionInput",
        loc: { start: 755, end: 770 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 775, end: 779 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 781, end: 787 },
              },
              loc: { start: 781, end: 787 },
            },
            loc: { start: 781, end: 788 },
          },
          directives: [],
          loc: { start: 775, end: 788 },
        },
      ],
      loc: { start: 749, end: 790 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 796, end: 803 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 808, end: 810 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 812, end: 814 },
              },
              loc: { start: 812, end: 814 },
            },
            loc: { start: 812, end: 815 },
          },
          directives: [],
          loc: { start: 808, end: 815 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 818, end: 822 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 824, end: 830 },
              },
              loc: { start: 824, end: 830 },
            },
            loc: { start: 824, end: 831 },
          },
          directives: [],
          loc: { start: 818, end: 831 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 834, end: 838 } },
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
          loc: { start: 834, end: 847 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 850, end: 861 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 863, end: 869 },
              },
              loc: { start: 863, end: 869 },
            },
            loc: { start: 863, end: 870 },
          },
          directives: [],
          loc: { start: 850, end: 870 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 873, end: 878 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 880, end: 883 },
              },
              loc: { start: 880, end: 883 },
            },
            loc: { start: 880, end: 884 },
          },
          directives: [],
          loc: { start: 873, end: 884 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 887, end: 892 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 894, end: 900 },
              },
              loc: { start: 894, end: 900 },
            },
            loc: { start: 894, end: 901 },
          },
          directives: [],
          loc: { start: 887, end: 901 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 904, end: 914 },
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
                    loc: { start: 917, end: 925 },
                  },
                  loc: { start: 917, end: 925 },
                },
                loc: { start: 917, end: 926 },
              },
              loc: { start: 916, end: 927 },
            },
            loc: { start: 916, end: 928 },
          },
          directives: [],
          loc: { start: 904, end: 928 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 931, end: 942 },
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
                    loc: { start: 945, end: 955 },
                  },
                  loc: { start: 945, end: 955 },
                },
                loc: { start: 945, end: 956 },
              },
              loc: { start: 944, end: 957 },
            },
            loc: { start: 944, end: 958 },
          },
          directives: [],
          loc: { start: 931, end: 958 },
        },
      ],
      loc: { start: 791, end: 960 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 967, end: 972 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 977, end: 985 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 988, end: 995 },
              },
              loc: { start: 988, end: 995 },
            },
            loc: { start: 987, end: 996 },
          },
          directives: [],
          loc: { start: 977, end: 996 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 999, end: 1006 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1007, end: 1009 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1011, end: 1013 },
                  },
                  loc: { start: 1011, end: 1013 },
                },
                loc: { start: 1011, end: 1014 },
              },
              directives: [],
              loc: { start: 1007, end: 1014 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1017, end: 1024 },
            },
            loc: { start: 1017, end: 1024 },
          },
          directives: [],
          loc: { start: 999, end: 1024 },
        },
      ],
      loc: { start: 962, end: 1026 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1033, end: 1041 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1046, end: 1059 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1060, end: 1065 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1067, end: 1079 },
                  },
                  loc: { start: 1067, end: 1079 },
                },
                loc: { start: 1067, end: 1080 },
              },
              directives: [],
              loc: { start: 1060, end: 1080 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1083, end: 1090 },
            },
            loc: { start: 1083, end: 1090 },
          },
          directives: [],
          loc: { start: 1046, end: 1090 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1093, end: 1106 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1107, end: 1109 },
              },
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
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1116, end: 1121 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1123, end: 1135 },
                  },
                  loc: { start: 1123, end: 1135 },
                },
                loc: { start: 1123, end: 1136 },
              },
              directives: [],
              loc: { start: 1116, end: 1136 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1139, end: 1146 },
            },
            loc: { start: 1139, end: 1146 },
          },
          directives: [],
          loc: { start: 1093, end: 1146 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1149, end: 1162 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1163, end: 1165 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1167, end: 1169 },
                  },
                  loc: { start: 1167, end: 1169 },
                },
                loc: { start: 1167, end: 1170 },
              },
              directives: [],
              loc: { start: 1163, end: 1170 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1173, end: 1180 },
            },
            loc: { start: 1173, end: 1180 },
          },
          directives: [],
          loc: { start: 1149, end: 1180 },
        },
      ],
      loc: { start: 1028, end: 1182 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1190, end: 1202 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1207, end: 1211 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1213, end: 1219 },
              },
              loc: { start: 1213, end: 1219 },
            },
            loc: { start: 1213, end: 1220 },
          },
          directives: [],
          loc: { start: 1207, end: 1220 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1223, end: 1227 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1229, end: 1235 },
              },
              loc: { start: 1229, end: 1235 },
            },
            loc: { start: 1229, end: 1236 },
          },
          directives: [],
          loc: { start: 1223, end: 1236 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1239, end: 1250 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1252, end: 1258 },
              },
              loc: { start: 1252, end: 1258 },
            },
            loc: { start: 1252, end: 1259 },
          },
          directives: [],
          loc: { start: 1239, end: 1259 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1262, end: 1267 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1269, end: 1272 },
              },
              loc: { start: 1269, end: 1272 },
            },
            loc: { start: 1269, end: 1273 },
          },
          directives: [],
          loc: { start: 1262, end: 1273 },
        },
      ],
      loc: { start: 1184, end: 1275 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1281, end: 1286 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1276, end: 1286 },
    },
  ],
  loc: { start: 0, end: 1287 },
} as unknown as DocumentNode;
