import Fuse from "fuse.js";
import { orders } from "../content/labOrders";

const index = new Fuse(orders, {
  keys: [
    { name: "name", weight: 0.55 },
    { name: "aliases", weight: 0.35 },
    { name: "brief", weight: 0.1 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
});

export function searchOrders(query) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  const exact = orders.filter((order) =>
    [order.name, order.id, ...order.aliases].some(
      (value) => value.toLowerCase() === term
    )
  );
  return [
    ...exact,
    ...index
      .search(term)
      .map(({ item }) => item)
      .filter((item) => !exact.includes(item)),
  ];
}
