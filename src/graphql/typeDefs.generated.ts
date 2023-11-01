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
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Order",
                    loc: { start: 935, end: 940 },
                  },
                  loc: { start: 935, end: 940 },
                },
                loc: { start: 935, end: 941 },
              },
              loc: { start: 934, end: 942 },
            },
            loc: { start: 934, end: 943 },
          },
          directives: [],
          loc: { start: 911, end: 943 },
        },
      ],
      loc: { start: 856, end: 945 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 952, end: 960 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 965, end: 976 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 977, end: 982 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 984, end: 987 },
                  },
                  loc: { start: 984, end: 987 },
                },
                loc: { start: 984, end: 988 },
              },
              directives: [],
              loc: { start: 977, end: 988 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 991, end: 996 },
            },
            loc: { start: 991, end: 996 },
          },
          directives: [],
          loc: { start: 965, end: 996 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 999, end: 1010 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1011, end: 1013 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1015, end: 1017 },
                  },
                  loc: { start: 1015, end: 1017 },
                },
                loc: { start: 1015, end: 1018 },
              },
              directives: [],
              loc: { start: 1011, end: 1018 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1020, end: 1026 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1028, end: 1034 },
                },
                loc: { start: 1028, end: 1034 },
              },
              directives: [],
              loc: { start: 1020, end: 1034 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1036, end: 1041 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1043, end: 1049 },
                },
                loc: { start: 1043, end: 1049 },
              },
              directives: [],
              loc: { start: 1036, end: 1049 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1052, end: 1057 },
            },
            loc: { start: 1052, end: 1057 },
          },
          directives: [],
          loc: { start: 999, end: 1057 },
        },
      ],
      loc: { start: 947, end: 1059 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductColorVariant",
        loc: { start: 1065, end: 1084 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1089, end: 1091 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1093, end: 1095 },
              },
              loc: { start: 1093, end: 1095 },
            },
            loc: { start: 1093, end: 1096 },
          },
          directives: [],
          loc: { start: 1089, end: 1096 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1099, end: 1103 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1105, end: 1111 },
              },
              loc: { start: 1105, end: 1111 },
            },
            loc: { start: 1105, end: 1112 },
          },
          directives: [],
          loc: { start: 1099, end: 1112 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1115, end: 1119 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1121, end: 1127 },
              },
              loc: { start: 1121, end: 1127 },
            },
            loc: { start: 1121, end: 1128 },
          },
          directives: [],
          loc: { start: 1115, end: 1128 },
        },
      ],
      loc: { start: 1060, end: 1130 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductSizeVariant",
        loc: { start: 1136, end: 1154 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1159, end: 1161 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1163, end: 1165 },
              },
              loc: { start: 1163, end: 1165 },
            },
            loc: { start: 1163, end: 1166 },
          },
          directives: [],
          loc: { start: 1159, end: 1166 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1169, end: 1173 },
          },
          arguments: [],
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
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1185, end: 1189 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1191, end: 1197 },
              },
              loc: { start: 1191, end: 1197 },
            },
            loc: { start: 1191, end: 1198 },
          },
          directives: [],
          loc: { start: 1185, end: 1198 },
        },
      ],
      loc: { start: 1131, end: 1200 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1206, end: 1213 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1218, end: 1220 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1222, end: 1224 },
              },
              loc: { start: 1222, end: 1224 },
            },
            loc: { start: 1222, end: 1225 },
          },
          directives: [],
          loc: { start: 1218, end: 1225 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1228, end: 1232 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1234, end: 1240 },
              },
              loc: { start: 1234, end: 1240 },
            },
            loc: { start: 1234, end: 1241 },
          },
          directives: [],
          loc: { start: 1228, end: 1241 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1244, end: 1248 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1250, end: 1256 },
              },
              loc: { start: 1250, end: 1256 },
            },
            loc: { start: 1250, end: 1257 },
          },
          directives: [],
          loc: { start: 1244, end: 1257 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1260, end: 1271 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1273, end: 1279 },
              },
              loc: { start: 1273, end: 1279 },
            },
            loc: { start: 1273, end: 1280 },
          },
          directives: [],
          loc: { start: 1260, end: 1280 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1283, end: 1288 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1290, end: 1293 },
              },
              loc: { start: 1290, end: 1293 },
            },
            loc: { start: 1290, end: 1294 },
          },
          directives: [],
          loc: { start: 1283, end: 1294 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1297, end: 1302 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1304, end: 1310 },
              },
              loc: { start: 1304, end: 1310 },
            },
            loc: { start: 1304, end: 1311 },
          },
          directives: [],
          loc: { start: 1297, end: 1311 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1314, end: 1324 },
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
                    loc: { start: 1327, end: 1335 },
                  },
                  loc: { start: 1327, end: 1335 },
                },
                loc: { start: 1327, end: 1336 },
              },
              loc: { start: 1326, end: 1337 },
            },
            loc: { start: 1326, end: 1338 },
          },
          directives: [],
          loc: { start: 1314, end: 1338 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "weightedRating",
            loc: { start: 1341, end: 1355 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1357, end: 1360 },
              },
              loc: { start: 1357, end: 1360 },
            },
            loc: { start: 1357, end: 1361 },
          },
          directives: [],
          loc: { start: 1341, end: 1361 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1364, end: 1375 },
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
                    loc: { start: 1378, end: 1388 },
                  },
                  loc: { start: 1378, end: 1388 },
                },
                loc: { start: 1378, end: 1389 },
              },
              loc: { start: 1377, end: 1390 },
            },
            loc: { start: 1377, end: 1391 },
          },
          directives: [],
          loc: { start: 1364, end: 1391 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1394, end: 1416 },
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
                  loc: { start: 1419, end: 1438 },
                },
                loc: { start: 1419, end: 1438 },
              },
              loc: { start: 1418, end: 1439 },
            },
            loc: { start: 1418, end: 1440 },
          },
          directives: [],
          loc: { start: 1394, end: 1440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1443, end: 1464 },
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
                  loc: { start: 1467, end: 1485 },
                },
                loc: { start: 1467, end: 1485 },
              },
              loc: { start: 1466, end: 1486 },
            },
            loc: { start: 1466, end: 1487 },
          },
          directives: [],
          loc: { start: 1443, end: 1487 },
        },
      ],
      loc: { start: 1201, end: 1489 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1496, end: 1501 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1506, end: 1514 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1515, end: 1521 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1523, end: 1526 },
                },
                loc: { start: 1523, end: 1526 },
              },
              directives: [],
              loc: { start: 1515, end: 1526 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortByField",
                loc: { start: 1528, end: 1539 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1541, end: 1547 },
                },
                loc: { start: 1541, end: 1547 },
              },
              directives: [],
              loc: { start: 1528, end: 1547 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortOrder",
                loc: { start: 1549, end: 1558 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1560, end: 1566 },
                },
                loc: { start: 1560, end: 1566 },
              },
              directives: [],
              loc: { start: 1549, end: 1566 },
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
                    loc: { start: 1570, end: 1577 },
                  },
                  loc: { start: 1570, end: 1577 },
                },
                loc: { start: 1570, end: 1578 },
              },
              loc: { start: 1569, end: 1579 },
            },
            loc: { start: 1569, end: 1580 },
          },
          directives: [],
          loc: { start: 1506, end: 1580 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1583, end: 1590 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1591, end: 1593 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1595, end: 1597 },
                  },
                  loc: { start: 1595, end: 1597 },
                },
                loc: { start: 1595, end: 1598 },
              },
              directives: [],
              loc: { start: 1591, end: 1598 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1601, end: 1608 },
            },
            loc: { start: 1601, end: 1608 },
          },
          directives: [],
          loc: { start: 1583, end: 1608 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1611, end: 1627 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1628, end: 1637 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1639, end: 1641 },
                  },
                  loc: { start: 1639, end: 1641 },
                },
                loc: { start: 1639, end: 1642 },
              },
              directives: [],
              loc: { start: 1628, end: 1642 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1644, end: 1652 },
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
              loc: { start: 1644, end: 1661 },
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
          loc: { start: 1611, end: 1675 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1678, end: 1697 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1698, end: 1705 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1707, end: 1713 },
                  },
                  loc: { start: 1707, end: 1713 },
                },
                loc: { start: 1707, end: 1714 },
              },
              directives: [],
              loc: { start: 1698, end: 1714 },
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
                    loc: { start: 1718, end: 1725 },
                  },
                  loc: { start: 1718, end: 1725 },
                },
                loc: { start: 1718, end: 1726 },
              },
              loc: { start: 1717, end: 1727 },
            },
            loc: { start: 1717, end: 1728 },
          },
          directives: [],
          loc: { start: 1678, end: 1728 },
        },
      ],
      loc: { start: 1491, end: 1730 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 1736, end: 1742 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1747, end: 1749 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1751, end: 1753 },
              },
              loc: { start: 1751, end: 1753 },
            },
            loc: { start: 1751, end: 1754 },
          },
          directives: [],
          loc: { start: 1747, end: 1754 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1757, end: 1762 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1764, end: 1770 },
              },
              loc: { start: 1764, end: 1770 },
            },
            loc: { start: 1764, end: 1771 },
          },
          directives: [],
          loc: { start: 1757, end: 1771 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1774, end: 1781 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1783, end: 1789 },
              },
              loc: { start: 1783, end: 1789 },
            },
            loc: { start: 1783, end: 1790 },
          },
          directives: [],
          loc: { start: 1774, end: 1790 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 1793, end: 1799 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1801, end: 1804 },
              },
              loc: { start: 1801, end: 1804 },
            },
            loc: { start: 1801, end: 1805 },
          },
          directives: [],
          loc: { start: 1793, end: 1805 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1808, end: 1813 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1815, end: 1821 },
              },
              loc: { start: 1815, end: 1821 },
            },
            loc: { start: 1815, end: 1822 },
          },
          directives: [],
          loc: { start: 1808, end: 1822 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1825, end: 1829 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1831, end: 1837 },
              },
              loc: { start: 1831, end: 1837 },
            },
            loc: { start: 1831, end: 1838 },
          },
          directives: [],
          loc: { start: 1825, end: 1838 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1841, end: 1848 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1850, end: 1857 },
              },
              loc: { start: 1850, end: 1857 },
            },
            loc: { start: 1850, end: 1858 },
          },
          directives: [],
          loc: { start: 1841, end: 1858 },
        },
      ],
      loc: { start: 1731, end: 1860 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1867, end: 1872 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 1877, end: 1884 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1885, end: 1894 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1896, end: 1898 },
                  },
                  loc: { start: 1896, end: 1898 },
                },
                loc: { start: 1896, end: 1899 },
              },
              directives: [],
              loc: { start: 1885, end: 1899 },
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
                    loc: { start: 1903, end: 1909 },
                  },
                  loc: { start: 1903, end: 1909 },
                },
                loc: { start: 1903, end: 1910 },
              },
              loc: { start: 1902, end: 1911 },
            },
            loc: { start: 1902, end: 1912 },
          },
          directives: [],
          loc: { start: 1877, end: 1912 },
        },
      ],
      loc: { start: 1862, end: 1914 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1921, end: 1929 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 1934, end: 1946 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 1947, end: 1952 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1954, end: 1960 },
                  },
                  loc: { start: 1954, end: 1960 },
                },
                loc: { start: 1954, end: 1961 },
              },
              directives: [],
              loc: { start: 1947, end: 1961 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 1963, end: 1970 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1972, end: 1978 },
                  },
                  loc: { start: 1972, end: 1978 },
                },
                loc: { start: 1972, end: 1979 },
              },
              directives: [],
              loc: { start: 1963, end: 1979 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 1981, end: 1987 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1989, end: 1992 },
                  },
                  loc: { start: 1989, end: 1992 },
                },
                loc: { start: 1989, end: 1993 },
              },
              directives: [],
              loc: { start: 1981, end: 1993 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1995, end: 2004 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2006, end: 2012 },
                  },
                  loc: { start: 2006, end: 2012 },
                },
                loc: { start: 2006, end: 2013 },
              },
              directives: [],
              loc: { start: 1995, end: 2013 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 2015, end: 2020 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2022, end: 2028 },
                  },
                  loc: { start: 2022, end: 2028 },
                },
                loc: { start: 2022, end: 2029 },
              },
              directives: [],
              loc: { start: 2015, end: 2029 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 2031, end: 2035 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2037, end: 2043 },
                  },
                  loc: { start: 2037, end: 2043 },
                },
                loc: { start: 2037, end: 2044 },
              },
              directives: [],
              loc: { start: 2031, end: 2044 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2047, end: 2053 },
            },
            loc: { start: 2047, end: 2053 },
          },
          directives: [],
          loc: { start: 1934, end: 2053 },
        },
      ],
      loc: { start: 1916, end: 2055 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2061, end: 2066 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2056, end: 2066 },
    },
  ],
  loc: { start: 0, end: 2067 },
} as unknown as DocumentNode;
