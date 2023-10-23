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
          name: { kind: "Name", value: "email", loc: { start: 811, end: 816 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 818, end: 824 },
            },
            loc: { start: 818, end: 824 },
          },
          directives: [],
          loc: { start: 811, end: 824 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 827, end: 837 },
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
                    loc: { start: 840, end: 849 },
                  },
                  loc: { start: 840, end: 849 },
                },
                loc: { start: 840, end: 850 },
              },
              loc: { start: 839, end: 851 },
            },
            loc: { start: 839, end: 852 },
          },
          directives: [],
          loc: { start: 827, end: 852 },
        },
      ],
      loc: { start: 755, end: 854 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 861, end: 866 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 871, end: 876 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 877, end: 879 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 881, end: 883 },
                  },
                  loc: { start: 881, end: 883 },
                },
                loc: { start: 881, end: 884 },
              },
              directives: [],
              loc: { start: 877, end: 884 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 886, end: 892 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 894, end: 900 },
                },
                loc: { start: 894, end: 900 },
              },
              directives: [],
              loc: { start: 886, end: 900 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 903, end: 908 },
            },
            loc: { start: 903, end: 908 },
          },
          directives: [],
          loc: { start: 871, end: 908 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orders",
            loc: { start: 911, end: 917 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 918, end: 923 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 925, end: 931 },
                },
                loc: { start: 925, end: 931 },
              },
              directives: [],
              loc: { start: 918, end: 931 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Order",
                  loc: { start: 935, end: 940 },
                },
                loc: { start: 935, end: 940 },
              },
              loc: { start: 934, end: 941 },
            },
            loc: { start: 934, end: 942 },
          },
          directives: [],
          loc: { start: 911, end: 942 },
        },
      ],
      loc: { start: 856, end: 944 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 951, end: 959 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 964, end: 975 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 976, end: 981 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 983, end: 986 },
                  },
                  loc: { start: 983, end: 986 },
                },
                loc: { start: 983, end: 987 },
              },
              directives: [],
              loc: { start: 976, end: 987 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 990, end: 995 },
            },
            loc: { start: 990, end: 995 },
          },
          directives: [],
          loc: { start: 964, end: 995 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 998, end: 1009 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1010, end: 1012 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1014, end: 1016 },
                  },
                  loc: { start: 1014, end: 1016 },
                },
                loc: { start: 1014, end: 1017 },
              },
              directives: [],
              loc: { start: 1010, end: 1017 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1019, end: 1025 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1027, end: 1033 },
                },
                loc: { start: 1027, end: 1033 },
              },
              directives: [],
              loc: { start: 1019, end: 1033 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1035, end: 1040 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1042, end: 1048 },
                },
                loc: { start: 1042, end: 1048 },
              },
              directives: [],
              loc: { start: 1035, end: 1048 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1051, end: 1056 },
            },
            loc: { start: 1051, end: 1056 },
          },
          directives: [],
          loc: { start: 998, end: 1056 },
        },
      ],
      loc: { start: 946, end: 1058 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductColorVariant",
        loc: { start: 1064, end: 1083 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1088, end: 1090 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1092, end: 1094 },
              },
              loc: { start: 1092, end: 1094 },
            },
            loc: { start: 1092, end: 1095 },
          },
          directives: [],
          loc: { start: 1088, end: 1095 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1098, end: 1102 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1104, end: 1110 },
              },
              loc: { start: 1104, end: 1110 },
            },
            loc: { start: 1104, end: 1111 },
          },
          directives: [],
          loc: { start: 1098, end: 1111 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1114, end: 1118 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1120, end: 1126 },
              },
              loc: { start: 1120, end: 1126 },
            },
            loc: { start: 1120, end: 1127 },
          },
          directives: [],
          loc: { start: 1114, end: 1127 },
        },
      ],
      loc: { start: 1059, end: 1129 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductSizeVariant",
        loc: { start: 1135, end: 1153 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1158, end: 1160 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1162, end: 1164 },
              },
              loc: { start: 1162, end: 1164 },
            },
            loc: { start: 1162, end: 1165 },
          },
          directives: [],
          loc: { start: 1158, end: 1165 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1168, end: 1172 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1174, end: 1180 },
              },
              loc: { start: 1174, end: 1180 },
            },
            loc: { start: 1174, end: 1181 },
          },
          directives: [],
          loc: { start: 1168, end: 1181 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1184, end: 1188 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1190, end: 1196 },
              },
              loc: { start: 1190, end: 1196 },
            },
            loc: { start: 1190, end: 1197 },
          },
          directives: [],
          loc: { start: 1184, end: 1197 },
        },
      ],
      loc: { start: 1130, end: 1199 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1205, end: 1212 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1217, end: 1219 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1221, end: 1223 },
              },
              loc: { start: 1221, end: 1223 },
            },
            loc: { start: 1221, end: 1224 },
          },
          directives: [],
          loc: { start: 1217, end: 1224 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1227, end: 1231 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1233, end: 1239 },
              },
              loc: { start: 1233, end: 1239 },
            },
            loc: { start: 1233, end: 1240 },
          },
          directives: [],
          loc: { start: 1227, end: 1240 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1243, end: 1247 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1249, end: 1255 },
              },
              loc: { start: 1249, end: 1255 },
            },
            loc: { start: 1249, end: 1256 },
          },
          directives: [],
          loc: { start: 1243, end: 1256 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1259, end: 1270 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1272, end: 1278 },
              },
              loc: { start: 1272, end: 1278 },
            },
            loc: { start: 1272, end: 1279 },
          },
          directives: [],
          loc: { start: 1259, end: 1279 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1282, end: 1287 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1289, end: 1292 },
              },
              loc: { start: 1289, end: 1292 },
            },
            loc: { start: 1289, end: 1293 },
          },
          directives: [],
          loc: { start: 1282, end: 1293 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1296, end: 1301 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1303, end: 1309 },
              },
              loc: { start: 1303, end: 1309 },
            },
            loc: { start: 1303, end: 1310 },
          },
          directives: [],
          loc: { start: 1296, end: 1310 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1313, end: 1323 },
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
                    loc: { start: 1326, end: 1334 },
                  },
                  loc: { start: 1326, end: 1334 },
                },
                loc: { start: 1326, end: 1335 },
              },
              loc: { start: 1325, end: 1336 },
            },
            loc: { start: 1325, end: 1337 },
          },
          directives: [],
          loc: { start: 1313, end: 1337 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "weightedRating",
            loc: { start: 1340, end: 1354 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1356, end: 1359 },
              },
              loc: { start: 1356, end: 1359 },
            },
            loc: { start: 1356, end: 1360 },
          },
          directives: [],
          loc: { start: 1340, end: 1360 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1363, end: 1374 },
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
                    loc: { start: 1377, end: 1387 },
                  },
                  loc: { start: 1377, end: 1387 },
                },
                loc: { start: 1377, end: 1388 },
              },
              loc: { start: 1376, end: 1389 },
            },
            loc: { start: 1376, end: 1390 },
          },
          directives: [],
          loc: { start: 1363, end: 1390 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1393, end: 1415 },
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
                  loc: { start: 1418, end: 1437 },
                },
                loc: { start: 1418, end: 1437 },
              },
              loc: { start: 1417, end: 1438 },
            },
            loc: { start: 1417, end: 1439 },
          },
          directives: [],
          loc: { start: 1393, end: 1439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1442, end: 1463 },
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
                  loc: { start: 1466, end: 1484 },
                },
                loc: { start: 1466, end: 1484 },
              },
              loc: { start: 1465, end: 1485 },
            },
            loc: { start: 1465, end: 1486 },
          },
          directives: [],
          loc: { start: 1442, end: 1486 },
        },
      ],
      loc: { start: 1200, end: 1488 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1495, end: 1500 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1505, end: 1513 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1514, end: 1520 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1522, end: 1525 },
                },
                loc: { start: 1522, end: 1525 },
              },
              directives: [],
              loc: { start: 1514, end: 1525 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortByField",
                loc: { start: 1527, end: 1538 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1540, end: 1546 },
                },
                loc: { start: 1540, end: 1546 },
              },
              directives: [],
              loc: { start: 1527, end: 1546 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortOrder",
                loc: { start: 1548, end: 1557 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1559, end: 1565 },
                },
                loc: { start: 1559, end: 1565 },
              },
              directives: [],
              loc: { start: 1548, end: 1565 },
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
                    loc: { start: 1569, end: 1576 },
                  },
                  loc: { start: 1569, end: 1576 },
                },
                loc: { start: 1569, end: 1577 },
              },
              loc: { start: 1568, end: 1578 },
            },
            loc: { start: 1568, end: 1579 },
          },
          directives: [],
          loc: { start: 1505, end: 1579 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1582, end: 1589 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1590, end: 1592 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1594, end: 1596 },
                  },
                  loc: { start: 1594, end: 1596 },
                },
                loc: { start: 1594, end: 1597 },
              },
              directives: [],
              loc: { start: 1590, end: 1597 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1600, end: 1607 },
            },
            loc: { start: 1600, end: 1607 },
          },
          directives: [],
          loc: { start: 1582, end: 1607 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1610, end: 1626 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1627, end: 1636 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1638, end: 1640 },
                  },
                  loc: { start: 1638, end: 1640 },
                },
                loc: { start: 1638, end: 1641 },
              },
              directives: [],
              loc: { start: 1627, end: 1641 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1643, end: 1651 },
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
              loc: { start: 1643, end: 1660 },
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
                    loc: { start: 1664, end: 1671 },
                  },
                  loc: { start: 1664, end: 1671 },
                },
                loc: { start: 1664, end: 1672 },
              },
              loc: { start: 1663, end: 1673 },
            },
            loc: { start: 1663, end: 1674 },
          },
          directives: [],
          loc: { start: 1610, end: 1674 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1677, end: 1696 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1697, end: 1704 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1706, end: 1712 },
                  },
                  loc: { start: 1706, end: 1712 },
                },
                loc: { start: 1706, end: 1713 },
              },
              directives: [],
              loc: { start: 1697, end: 1713 },
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
                    loc: { start: 1717, end: 1724 },
                  },
                  loc: { start: 1717, end: 1724 },
                },
                loc: { start: 1717, end: 1725 },
              },
              loc: { start: 1716, end: 1726 },
            },
            loc: { start: 1716, end: 1727 },
          },
          directives: [],
          loc: { start: 1677, end: 1727 },
        },
      ],
      loc: { start: 1490, end: 1729 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 1735, end: 1741 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1746, end: 1748 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1750, end: 1752 },
              },
              loc: { start: 1750, end: 1752 },
            },
            loc: { start: 1750, end: 1753 },
          },
          directives: [],
          loc: { start: 1746, end: 1753 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1756, end: 1761 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1763, end: 1769 },
              },
              loc: { start: 1763, end: 1769 },
            },
            loc: { start: 1763, end: 1770 },
          },
          directives: [],
          loc: { start: 1756, end: 1770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1773, end: 1780 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1782, end: 1788 },
              },
              loc: { start: 1782, end: 1788 },
            },
            loc: { start: 1782, end: 1789 },
          },
          directives: [],
          loc: { start: 1773, end: 1789 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 1792, end: 1798 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1800, end: 1803 },
              },
              loc: { start: 1800, end: 1803 },
            },
            loc: { start: 1800, end: 1804 },
          },
          directives: [],
          loc: { start: 1792, end: 1804 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1807, end: 1812 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1814, end: 1820 },
              },
              loc: { start: 1814, end: 1820 },
            },
            loc: { start: 1814, end: 1821 },
          },
          directives: [],
          loc: { start: 1807, end: 1821 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1824, end: 1828 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1830, end: 1836 },
              },
              loc: { start: 1830, end: 1836 },
            },
            loc: { start: 1830, end: 1837 },
          },
          directives: [],
          loc: { start: 1824, end: 1837 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1840, end: 1847 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1849, end: 1856 },
              },
              loc: { start: 1849, end: 1856 },
            },
            loc: { start: 1849, end: 1857 },
          },
          directives: [],
          loc: { start: 1840, end: 1857 },
        },
      ],
      loc: { start: 1730, end: 1859 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1866, end: 1871 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 1876, end: 1883 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1884, end: 1893 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1895, end: 1897 },
                  },
                  loc: { start: 1895, end: 1897 },
                },
                loc: { start: 1895, end: 1898 },
              },
              directives: [],
              loc: { start: 1884, end: 1898 },
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
                    loc: { start: 1902, end: 1908 },
                  },
                  loc: { start: 1902, end: 1908 },
                },
                loc: { start: 1902, end: 1909 },
              },
              loc: { start: 1901, end: 1910 },
            },
            loc: { start: 1901, end: 1911 },
          },
          directives: [],
          loc: { start: 1876, end: 1911 },
        },
      ],
      loc: { start: 1861, end: 1913 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1920, end: 1928 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 1933, end: 1945 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 1946, end: 1951 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1953, end: 1959 },
                  },
                  loc: { start: 1953, end: 1959 },
                },
                loc: { start: 1953, end: 1960 },
              },
              directives: [],
              loc: { start: 1946, end: 1960 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 1962, end: 1969 },
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
              loc: { start: 1962, end: 1978 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 1980, end: 1986 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1988, end: 1991 },
                  },
                  loc: { start: 1988, end: 1991 },
                },
                loc: { start: 1988, end: 1992 },
              },
              directives: [],
              loc: { start: 1980, end: 1992 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1994, end: 2003 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2005, end: 2011 },
                  },
                  loc: { start: 2005, end: 2011 },
                },
                loc: { start: 2005, end: 2012 },
              },
              directives: [],
              loc: { start: 1994, end: 2012 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 2014, end: 2019 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2021, end: 2027 },
                  },
                  loc: { start: 2021, end: 2027 },
                },
                loc: { start: 2021, end: 2028 },
              },
              directives: [],
              loc: { start: 2014, end: 2028 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 2030, end: 2034 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2036, end: 2042 },
                  },
                  loc: { start: 2036, end: 2042 },
                },
                loc: { start: 2036, end: 2043 },
              },
              directives: [],
              loc: { start: 2030, end: 2043 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2046, end: 2052 },
            },
            loc: { start: 2046, end: 2052 },
          },
          directives: [],
          loc: { start: 1933, end: 2052 },
        },
      ],
      loc: { start: 1915, end: 2054 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2060, end: 2065 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2055, end: 2065 },
    },
  ],
  loc: { start: 0, end: 2066 },
} as unknown as DocumentNode;
