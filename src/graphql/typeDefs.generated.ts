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
      name: { kind: "Name", value: "Mutation", loc: { start: 553, end: 561 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 566, end: 581 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 582, end: 590 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 592, end: 595 },
                  },
                  loc: { start: 592, end: 595 },
                },
                loc: { start: 592, end: 596 },
              },
              directives: [],
              loc: { start: 582, end: 596 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 598, end: 607 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 609, end: 611 },
                  },
                  loc: { start: 609, end: 611 },
                },
                loc: { start: 609, end: 612 },
              },
              directives: [],
              loc: { start: 598, end: 612 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderId",
                loc: { start: 614, end: 621 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 623, end: 625 },
                  },
                  loc: { start: 623, end: 625 },
                },
                loc: { start: 623, end: 626 },
              },
              directives: [],
              loc: { start: 614, end: 626 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "size",
                loc: { start: 628, end: 632 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 634, end: 640 },
                },
                loc: { start: 634, end: 640 },
              },
              directives: [],
              loc: { start: 628, end: 640 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "color",
                loc: { start: 642, end: 647 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 649, end: 655 },
                },
                loc: { start: 649, end: 655 },
              },
              directives: [],
              loc: { start: 642, end: 655 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 658, end: 667 },
            },
            loc: { start: 658, end: 667 },
          },
          directives: [],
          loc: { start: 566, end: 667 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 670, end: 685 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 686, end: 688 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 690, end: 692 },
                  },
                  loc: { start: 690, end: 692 },
                },
                loc: { start: 690, end: 693 },
              },
              directives: [],
              loc: { start: 686, end: 693 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 695, end: 703 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 705, end: 708 },
                  },
                  loc: { start: 705, end: 708 },
                },
                loc: { start: 705, end: 709 },
              },
              directives: [],
              loc: { start: 695, end: 709 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 712, end: 721 },
            },
            loc: { start: 712, end: 721 },
          },
          directives: [],
          loc: { start: 670, end: 721 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 724, end: 739 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 740, end: 742 },
              },
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
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 750, end: 752 } },
            loc: { start: 750, end: 752 },
          },
          directives: [],
          loc: { start: 724, end: 752 },
        },
      ],
      loc: { start: 548, end: 754 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 760, end: 765 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 770, end: 772 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 774, end: 776 },
              },
              loc: { start: 774, end: 776 },
            },
            loc: { start: 774, end: 777 },
          },
          directives: [],
          loc: { start: 770, end: 777 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 780, end: 785 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 787, end: 790 },
              },
              loc: { start: 787, end: 790 },
            },
            loc: { start: 787, end: 791 },
          },
          directives: [],
          loc: { start: 780, end: 791 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 794, end: 800 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 802, end: 808 },
            },
            loc: { start: 802, end: 808 },
          },
          directives: [],
          loc: { start: 794, end: 808 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 811, end: 821 },
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
                    loc: { start: 824, end: 833 },
                  },
                  loc: { start: 824, end: 833 },
                },
                loc: { start: 824, end: 834 },
              },
              loc: { start: 823, end: 835 },
            },
            loc: { start: 823, end: 836 },
          },
          directives: [],
          loc: { start: 811, end: 836 },
        },
      ],
      loc: { start: 755, end: 838 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 845, end: 850 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 855, end: 860 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 861, end: 863 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 865, end: 867 },
                  },
                  loc: { start: 865, end: 867 },
                },
                loc: { start: 865, end: 868 },
              },
              directives: [],
              loc: { start: 861, end: 868 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 870, end: 876 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 878, end: 884 },
                },
                loc: { start: 878, end: 884 },
              },
              directives: [],
              loc: { start: 870, end: 884 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 887, end: 892 },
            },
            loc: { start: 887, end: 892 },
          },
          directives: [],
          loc: { start: 855, end: 892 },
        },
      ],
      loc: { start: 840, end: 894 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 901, end: 909 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 914, end: 925 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 926, end: 931 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 933, end: 936 },
                  },
                  loc: { start: 933, end: 936 },
                },
                loc: { start: 933, end: 937 },
              },
              directives: [],
              loc: { start: 926, end: 937 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 940, end: 945 },
            },
            loc: { start: 940, end: 945 },
          },
          directives: [],
          loc: { start: 914, end: 945 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 948, end: 959 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 960, end: 962 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 964, end: 966 },
                  },
                  loc: { start: 964, end: 966 },
                },
                loc: { start: 964, end: 967 },
              },
              directives: [],
              loc: { start: 960, end: 967 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 969, end: 975 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 977, end: 983 },
                },
                loc: { start: 977, end: 983 },
              },
              directives: [],
              loc: { start: 969, end: 983 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 986, end: 991 },
            },
            loc: { start: 986, end: 991 },
          },
          directives: [],
          loc: { start: 948, end: 991 },
        },
      ],
      loc: { start: 896, end: 993 },
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
            value: "weightedRating",
            loc: { start: 1275, end: 1289 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1291, end: 1294 },
              },
              loc: { start: 1291, end: 1294 },
            },
            loc: { start: 1291, end: 1295 },
          },
          directives: [],
          loc: { start: 1275, end: 1295 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1298, end: 1309 },
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
                    loc: { start: 1312, end: 1322 },
                  },
                  loc: { start: 1312, end: 1322 },
                },
                loc: { start: 1312, end: 1323 },
              },
              loc: { start: 1311, end: 1324 },
            },
            loc: { start: 1311, end: 1325 },
          },
          directives: [],
          loc: { start: 1298, end: 1325 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1328, end: 1350 },
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
                  loc: { start: 1353, end: 1372 },
                },
                loc: { start: 1353, end: 1372 },
              },
              loc: { start: 1352, end: 1373 },
            },
            loc: { start: 1352, end: 1374 },
          },
          directives: [],
          loc: { start: 1328, end: 1374 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1377, end: 1398 },
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
                  loc: { start: 1401, end: 1419 },
                },
                loc: { start: 1401, end: 1419 },
              },
              loc: { start: 1400, end: 1420 },
            },
            loc: { start: 1400, end: 1421 },
          },
          directives: [],
          loc: { start: 1377, end: 1421 },
        },
      ],
      loc: { start: 1135, end: 1423 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1430, end: 1435 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1440, end: 1448 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1449, end: 1455 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1457, end: 1460 },
                },
                loc: { start: 1457, end: 1460 },
              },
              directives: [],
              loc: { start: 1449, end: 1460 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortByField",
                loc: { start: 1462, end: 1473 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1475, end: 1481 },
                },
                loc: { start: 1475, end: 1481 },
              },
              directives: [],
              loc: { start: 1462, end: 1481 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortOrder",
                loc: { start: 1483, end: 1492 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1494, end: 1500 },
                },
                loc: { start: 1494, end: 1500 },
              },
              directives: [],
              loc: { start: 1483, end: 1500 },
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
                    loc: { start: 1504, end: 1511 },
                  },
                  loc: { start: 1504, end: 1511 },
                },
                loc: { start: 1504, end: 1512 },
              },
              loc: { start: 1503, end: 1513 },
            },
            loc: { start: 1503, end: 1514 },
          },
          directives: [],
          loc: { start: 1440, end: 1514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1517, end: 1524 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1525, end: 1527 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1529, end: 1531 },
                  },
                  loc: { start: 1529, end: 1531 },
                },
                loc: { start: 1529, end: 1532 },
              },
              directives: [],
              loc: { start: 1525, end: 1532 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1535, end: 1542 },
            },
            loc: { start: 1535, end: 1542 },
          },
          directives: [],
          loc: { start: 1517, end: 1542 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1545, end: 1561 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1562, end: 1571 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1573, end: 1575 },
                  },
                  loc: { start: 1573, end: 1575 },
                },
                loc: { start: 1573, end: 1576 },
              },
              directives: [],
              loc: { start: 1562, end: 1576 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1578, end: 1586 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1588, end: 1594 },
                  },
                  loc: { start: 1588, end: 1594 },
                },
                loc: { start: 1588, end: 1595 },
              },
              directives: [],
              loc: { start: 1578, end: 1595 },
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
                    loc: { start: 1599, end: 1606 },
                  },
                  loc: { start: 1599, end: 1606 },
                },
                loc: { start: 1599, end: 1607 },
              },
              loc: { start: 1598, end: 1608 },
            },
            loc: { start: 1598, end: 1609 },
          },
          directives: [],
          loc: { start: 1545, end: 1609 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1612, end: 1631 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1632, end: 1639 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1641, end: 1647 },
                  },
                  loc: { start: 1641, end: 1647 },
                },
                loc: { start: 1641, end: 1648 },
              },
              directives: [],
              loc: { start: 1632, end: 1648 },
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
                    loc: { start: 1652, end: 1659 },
                  },
                  loc: { start: 1652, end: 1659 },
                },
                loc: { start: 1652, end: 1660 },
              },
              loc: { start: 1651, end: 1661 },
            },
            loc: { start: 1651, end: 1662 },
          },
          directives: [],
          loc: { start: 1612, end: 1662 },
        },
      ],
      loc: { start: 1425, end: 1664 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 1670, end: 1676 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1681, end: 1683 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1685, end: 1687 },
              },
              loc: { start: 1685, end: 1687 },
            },
            loc: { start: 1685, end: 1688 },
          },
          directives: [],
          loc: { start: 1681, end: 1688 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1691, end: 1696 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1698, end: 1704 },
              },
              loc: { start: 1698, end: 1704 },
            },
            loc: { start: 1698, end: 1705 },
          },
          directives: [],
          loc: { start: 1691, end: 1705 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1708, end: 1715 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1717, end: 1723 },
              },
              loc: { start: 1717, end: 1723 },
            },
            loc: { start: 1717, end: 1724 },
          },
          directives: [],
          loc: { start: 1708, end: 1724 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 1727, end: 1733 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1735, end: 1738 },
              },
              loc: { start: 1735, end: 1738 },
            },
            loc: { start: 1735, end: 1739 },
          },
          directives: [],
          loc: { start: 1727, end: 1739 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1742, end: 1747 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1749, end: 1755 },
              },
              loc: { start: 1749, end: 1755 },
            },
            loc: { start: 1749, end: 1756 },
          },
          directives: [],
          loc: { start: 1742, end: 1756 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1759, end: 1763 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1765, end: 1771 },
              },
              loc: { start: 1765, end: 1771 },
            },
            loc: { start: 1765, end: 1772 },
          },
          directives: [],
          loc: { start: 1759, end: 1772 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1775, end: 1782 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1784, end: 1791 },
              },
              loc: { start: 1784, end: 1791 },
            },
            loc: { start: 1784, end: 1792 },
          },
          directives: [],
          loc: { start: 1775, end: 1792 },
        },
      ],
      loc: { start: 1665, end: 1794 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1801, end: 1806 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 1811, end: 1818 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1819, end: 1828 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1830, end: 1832 },
                  },
                  loc: { start: 1830, end: 1832 },
                },
                loc: { start: 1830, end: 1833 },
              },
              directives: [],
              loc: { start: 1819, end: 1833 },
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
                    value: "Review",
                    loc: { start: 1837, end: 1843 },
                  },
                  loc: { start: 1837, end: 1843 },
                },
                loc: { start: 1837, end: 1844 },
              },
              loc: { start: 1836, end: 1845 },
            },
            loc: { start: 1836, end: 1846 },
          },
          directives: [],
          loc: { start: 1811, end: 1846 },
        },
      ],
      loc: { start: 1796, end: 1848 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1855, end: 1863 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 1868, end: 1880 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 1881, end: 1886 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1888, end: 1894 },
                  },
                  loc: { start: 1888, end: 1894 },
                },
                loc: { start: 1888, end: 1895 },
              },
              directives: [],
              loc: { start: 1881, end: 1895 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 1897, end: 1904 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1906, end: 1912 },
                  },
                  loc: { start: 1906, end: 1912 },
                },
                loc: { start: 1906, end: 1913 },
              },
              directives: [],
              loc: { start: 1897, end: 1913 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 1915, end: 1921 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1923, end: 1926 },
                  },
                  loc: { start: 1923, end: 1926 },
                },
                loc: { start: 1923, end: 1927 },
              },
              directives: [],
              loc: { start: 1915, end: 1927 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1929, end: 1938 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1940, end: 1946 },
                  },
                  loc: { start: 1940, end: 1946 },
                },
                loc: { start: 1940, end: 1947 },
              },
              directives: [],
              loc: { start: 1929, end: 1947 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1949, end: 1954 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1956, end: 1962 },
                  },
                  loc: { start: 1956, end: 1962 },
                },
                loc: { start: 1956, end: 1963 },
              },
              directives: [],
              loc: { start: 1949, end: 1963 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1965, end: 1969 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1971, end: 1977 },
                  },
                  loc: { start: 1971, end: 1977 },
                },
                loc: { start: 1971, end: 1978 },
              },
              directives: [],
              loc: { start: 1965, end: 1978 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 1981, end: 1987 },
            },
            loc: { start: 1981, end: 1987 },
          },
          directives: [],
          loc: { start: 1868, end: 1987 },
        },
      ],
      loc: { start: 1850, end: 1989 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1995, end: 2000 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1990, end: 2000 },
    },
  ],
  loc: { start: 0, end: 2001 },
} as unknown as DocumentNode;
