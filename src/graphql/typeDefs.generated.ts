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
      ],
      loc: { start: 856, end: 910 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 917, end: 925 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 930, end: 941 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "total",
                loc: { start: 942, end: 947 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 949, end: 952 },
                  },
                  loc: { start: 949, end: 952 },
                },
                loc: { start: 949, end: 953 },
              },
              directives: [],
              loc: { start: 942, end: 953 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 956, end: 961 },
            },
            loc: { start: 956, end: 961 },
          },
          directives: [],
          loc: { start: 930, end: 961 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 964, end: 975 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 976, end: 978 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 980, end: 982 },
                  },
                  loc: { start: 980, end: 982 },
                },
                loc: { start: 980, end: 983 },
              },
              directives: [],
              loc: { start: 976, end: 983 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 985, end: 991 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 993, end: 999 },
                },
                loc: { start: 993, end: 999 },
              },
              directives: [],
              loc: { start: 985, end: 999 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1001, end: 1006 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1008, end: 1014 },
                },
                loc: { start: 1008, end: 1014 },
              },
              directives: [],
              loc: { start: 1001, end: 1014 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1017, end: 1022 },
            },
            loc: { start: 1017, end: 1022 },
          },
          directives: [],
          loc: { start: 964, end: 1022 },
        },
      ],
      loc: { start: 912, end: 1024 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductColorVariant",
        loc: { start: 1030, end: 1049 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1054, end: 1056 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1058, end: 1060 },
              },
              loc: { start: 1058, end: 1060 },
            },
            loc: { start: 1058, end: 1061 },
          },
          directives: [],
          loc: { start: 1054, end: 1061 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1064, end: 1068 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1070, end: 1076 },
              },
              loc: { start: 1070, end: 1076 },
            },
            loc: { start: 1070, end: 1077 },
          },
          directives: [],
          loc: { start: 1064, end: 1077 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1080, end: 1084 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1086, end: 1092 },
              },
              loc: { start: 1086, end: 1092 },
            },
            loc: { start: 1086, end: 1093 },
          },
          directives: [],
          loc: { start: 1080, end: 1093 },
        },
      ],
      loc: { start: 1025, end: 1095 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductSizeVariant",
        loc: { start: 1101, end: 1119 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1124, end: 1126 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1128, end: 1130 },
              },
              loc: { start: 1128, end: 1130 },
            },
            loc: { start: 1128, end: 1131 },
          },
          directives: [],
          loc: { start: 1124, end: 1131 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1134, end: 1138 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1140, end: 1146 },
              },
              loc: { start: 1140, end: 1146 },
            },
            loc: { start: 1140, end: 1147 },
          },
          directives: [],
          loc: { start: 1134, end: 1147 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1150, end: 1154 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1156, end: 1162 },
              },
              loc: { start: 1156, end: 1162 },
            },
            loc: { start: 1156, end: 1163 },
          },
          directives: [],
          loc: { start: 1150, end: 1163 },
        },
      ],
      loc: { start: 1096, end: 1165 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1171, end: 1178 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1183, end: 1185 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1187, end: 1189 },
              },
              loc: { start: 1187, end: 1189 },
            },
            loc: { start: 1187, end: 1190 },
          },
          directives: [],
          loc: { start: 1183, end: 1190 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1193, end: 1197 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1199, end: 1205 },
              },
              loc: { start: 1199, end: 1205 },
            },
            loc: { start: 1199, end: 1206 },
          },
          directives: [],
          loc: { start: 1193, end: 1206 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1209, end: 1213 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1215, end: 1221 },
              },
              loc: { start: 1215, end: 1221 },
            },
            loc: { start: 1215, end: 1222 },
          },
          directives: [],
          loc: { start: 1209, end: 1222 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1225, end: 1236 },
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
          loc: { start: 1225, end: 1245 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1248, end: 1253 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1255, end: 1258 },
              },
              loc: { start: 1255, end: 1258 },
            },
            loc: { start: 1255, end: 1259 },
          },
          directives: [],
          loc: { start: 1248, end: 1259 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1262, end: 1267 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1269, end: 1275 },
              },
              loc: { start: 1269, end: 1275 },
            },
            loc: { start: 1269, end: 1276 },
          },
          directives: [],
          loc: { start: 1262, end: 1276 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 1279, end: 1289 },
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
                    loc: { start: 1292, end: 1300 },
                  },
                  loc: { start: 1292, end: 1300 },
                },
                loc: { start: 1292, end: 1301 },
              },
              loc: { start: 1291, end: 1302 },
            },
            loc: { start: 1291, end: 1303 },
          },
          directives: [],
          loc: { start: 1279, end: 1303 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "weightedRating",
            loc: { start: 1306, end: 1320 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1322, end: 1325 },
              },
              loc: { start: 1322, end: 1325 },
            },
            loc: { start: 1322, end: 1326 },
          },
          directives: [],
          loc: { start: 1306, end: 1326 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1329, end: 1340 },
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
                    loc: { start: 1343, end: 1353 },
                  },
                  loc: { start: 1343, end: 1353 },
                },
                loc: { start: 1343, end: 1354 },
              },
              loc: { start: 1342, end: 1355 },
            },
            loc: { start: 1342, end: 1356 },
          },
          directives: [],
          loc: { start: 1329, end: 1356 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_color_variants",
            loc: { start: 1359, end: 1381 },
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
                  loc: { start: 1384, end: 1403 },
                },
                loc: { start: 1384, end: 1403 },
              },
              loc: { start: 1383, end: 1404 },
            },
            loc: { start: 1383, end: 1405 },
          },
          directives: [],
          loc: { start: 1359, end: 1405 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product_size_variants",
            loc: { start: 1408, end: 1429 },
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
                  loc: { start: 1432, end: 1450 },
                },
                loc: { start: 1432, end: 1450 },
              },
              loc: { start: 1431, end: 1451 },
            },
            loc: { start: 1431, end: 1452 },
          },
          directives: [],
          loc: { start: 1408, end: 1452 },
        },
      ],
      loc: { start: 1166, end: 1454 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1461, end: 1466 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1471, end: 1479 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1480, end: 1486 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1488, end: 1491 },
                },
                loc: { start: 1488, end: 1491 },
              },
              directives: [],
              loc: { start: 1480, end: 1491 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortByField",
                loc: { start: 1493, end: 1504 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1506, end: 1512 },
                },
                loc: { start: 1506, end: 1512 },
              },
              directives: [],
              loc: { start: 1493, end: 1512 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sortOrder",
                loc: { start: 1514, end: 1523 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1525, end: 1531 },
                },
                loc: { start: 1525, end: 1531 },
              },
              directives: [],
              loc: { start: 1514, end: 1531 },
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
                    loc: { start: 1535, end: 1542 },
                  },
                  loc: { start: 1535, end: 1542 },
                },
                loc: { start: 1535, end: 1543 },
              },
              loc: { start: 1534, end: 1544 },
            },
            loc: { start: 1534, end: 1545 },
          },
          directives: [],
          loc: { start: 1471, end: 1545 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1548, end: 1555 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1556, end: 1558 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1560, end: 1562 },
                  },
                  loc: { start: 1560, end: 1562 },
                },
                loc: { start: 1560, end: 1563 },
              },
              directives: [],
              loc: { start: 1556, end: 1563 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1566, end: 1573 },
            },
            loc: { start: 1566, end: 1573 },
          },
          directives: [],
          loc: { start: 1548, end: 1573 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_similar",
            loc: { start: 1576, end: 1592 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1593, end: 1602 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1604, end: 1606 },
                  },
                  loc: { start: 1604, end: 1606 },
                },
                loc: { start: 1604, end: 1607 },
              },
              directives: [],
              loc: { start: 1593, end: 1607 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "category",
                loc: { start: 1609, end: 1617 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1619, end: 1625 },
                  },
                  loc: { start: 1619, end: 1625 },
                },
                loc: { start: 1619, end: 1626 },
              },
              directives: [],
              loc: { start: 1609, end: 1626 },
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
                    loc: { start: 1630, end: 1637 },
                  },
                  loc: { start: 1630, end: 1637 },
                },
                loc: { start: 1630, end: 1638 },
              },
              loc: { start: 1629, end: 1639 },
            },
            loc: { start: 1629, end: 1640 },
          },
          directives: [],
          loc: { start: 1576, end: 1640 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products_by_keyword",
            loc: { start: 1643, end: 1662 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "keyword",
                loc: { start: 1663, end: 1670 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1672, end: 1678 },
                  },
                  loc: { start: 1672, end: 1678 },
                },
                loc: { start: 1672, end: 1679 },
              },
              directives: [],
              loc: { start: 1663, end: 1679 },
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
                    loc: { start: 1683, end: 1690 },
                  },
                  loc: { start: 1683, end: 1690 },
                },
                loc: { start: 1683, end: 1691 },
              },
              loc: { start: 1682, end: 1692 },
            },
            loc: { start: 1682, end: 1693 },
          },
          directives: [],
          loc: { start: 1643, end: 1693 },
        },
      ],
      loc: { start: 1456, end: 1695 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 1701, end: 1707 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1712, end: 1714 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1716, end: 1718 },
              },
              loc: { start: 1716, end: 1718 },
            },
            loc: { start: 1716, end: 1719 },
          },
          directives: [],
          loc: { start: 1712, end: 1719 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1722, end: 1727 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1729, end: 1735 },
              },
              loc: { start: 1729, end: 1735 },
            },
            loc: { start: 1729, end: 1736 },
          },
          directives: [],
          loc: { start: 1722, end: 1736 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 1739, end: 1746 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1748, end: 1754 },
              },
              loc: { start: 1748, end: 1754 },
            },
            loc: { start: 1748, end: 1755 },
          },
          directives: [],
          loc: { start: 1739, end: 1755 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 1758, end: 1764 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1766, end: 1769 },
              },
              loc: { start: 1766, end: 1769 },
            },
            loc: { start: 1766, end: 1770 },
          },
          directives: [],
          loc: { start: 1758, end: 1770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1773, end: 1778 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1780, end: 1786 },
              },
              loc: { start: 1780, end: 1786 },
            },
            loc: { start: 1780, end: 1787 },
          },
          directives: [],
          loc: { start: 1773, end: 1787 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1790, end: 1794 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1796, end: 1802 },
              },
              loc: { start: 1796, end: 1802 },
            },
            loc: { start: 1796, end: 1803 },
          },
          directives: [],
          loc: { start: 1790, end: 1803 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1806, end: 1813 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1815, end: 1822 },
              },
              loc: { start: 1815, end: 1822 },
            },
            loc: { start: 1815, end: 1823 },
          },
          directives: [],
          loc: { start: 1806, end: 1823 },
        },
      ],
      loc: { start: 1696, end: 1825 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1832, end: 1837 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 1842, end: 1849 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1850, end: 1859 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1861, end: 1863 },
                  },
                  loc: { start: 1861, end: 1863 },
                },
                loc: { start: 1861, end: 1864 },
              },
              directives: [],
              loc: { start: 1850, end: 1864 },
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
                    loc: { start: 1868, end: 1874 },
                  },
                  loc: { start: 1868, end: 1874 },
                },
                loc: { start: 1868, end: 1875 },
              },
              loc: { start: 1867, end: 1876 },
            },
            loc: { start: 1867, end: 1877 },
          },
          directives: [],
          loc: { start: 1842, end: 1877 },
        },
      ],
      loc: { start: 1827, end: 1879 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1886, end: 1894 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 1899, end: 1911 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "title",
                loc: { start: 1912, end: 1917 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1919, end: 1925 },
                  },
                  loc: { start: 1919, end: 1925 },
                },
                loc: { start: 1919, end: 1926 },
              },
              directives: [],
              loc: { start: 1912, end: 1926 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 1928, end: 1935 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1937, end: 1943 },
                  },
                  loc: { start: 1937, end: 1943 },
                },
                loc: { start: 1937, end: 1944 },
              },
              directives: [],
              loc: { start: 1928, end: 1944 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 1946, end: 1952 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1954, end: 1957 },
                  },
                  loc: { start: 1954, end: 1957 },
                },
                loc: { start: 1954, end: 1958 },
              },
              directives: [],
              loc: { start: 1946, end: 1958 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1960, end: 1969 },
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
              loc: { start: 1960, end: 1978 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1980, end: 1985 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1987, end: 1993 },
                  },
                  loc: { start: 1987, end: 1993 },
                },
                loc: { start: 1987, end: 1994 },
              },
              directives: [],
              loc: { start: 1980, end: 1994 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1996, end: 2000 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2002, end: 2008 },
                  },
                  loc: { start: 2002, end: 2008 },
                },
                loc: { start: 2002, end: 2009 },
              },
              directives: [],
              loc: { start: 1996, end: 2009 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Review",
              loc: { start: 2012, end: 2018 },
            },
            loc: { start: 2012, end: 2018 },
          },
          directives: [],
          loc: { start: 1899, end: 2018 },
        },
      ],
      loc: { start: 1881, end: 2020 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2026, end: 2031 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2021, end: 2031 },
    },
  ],
  loc: { start: 0, end: 2032 },
} as unknown as DocumentNode;
