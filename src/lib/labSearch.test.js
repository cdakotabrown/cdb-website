import { searchOrders } from "./labSearch";

describe("lab search", () => {
  it("prioritizes exact names, IDs, and aliases", () => {
    expect(searchOrders("  PLT ")[0].id).toBe("platelet-count");
    expect(searchOrders("lipid-panel")[0].id).toBe("lipid-panel");
    expect(searchOrders("glucose")[0].id).toBe("glucose");
  });
  it("allows spelling errors without returning records for blank searches", () => {
    expect(
      searchOrders("cholestrol").some(
        (order) => order.id === "total-cholesterol"
      )
    ).toBe(true);
    expect(searchOrders("  ")).toEqual([]);
  });
});
