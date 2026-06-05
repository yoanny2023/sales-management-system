import { Product } from "../types/product.types";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    stock: 34,
    createdAt: "2026-05-10T10:00:00.000Z",
    userId: 1,
  },
  {
    id: 2,
    name: "Adidas Samba",
    price: 95,
    stock: 18,
    createdAt: "2026-05-14T14:30:00.000Z",
    userId: 1,
  },
  {
    id: 3,
    name: "Jordan Retro",
    price: 180,
    stock: 8,
    createdAt: "2026-05-20T08:10:00.000Z",
    userId: 1,
  },
  {
    id: 4,
    name: "Puma RS-X",
    price: 110,
    stock: 42,
    createdAt: "2026-05-24T16:00:00.000Z",
    userId: 1,
  },
];