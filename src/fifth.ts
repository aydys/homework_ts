type States = "initial" | "inWork" | "buyingSupplies" | "producing" | "fullfilled";
type FilteredStates = Exclude<States, "buingSupplies" | "prodicing">
type FIXME = FilteredStates[];

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );