export default defineEventHandler(() => {
  return [
    {
      title: "Dashboard",
      to: "/",
      iconName: "Dashboard",
    },
    {
      title: "Income",
      to: "/income",
      iconName: "Income",
    },
    {
      title: "Expense",
      to: "/expense",
      iconName: "Expense",
    },
    {
      title: "Transactions",
      to: "/transactions",
      iconName: "Transaction",
    },
  ];
});
