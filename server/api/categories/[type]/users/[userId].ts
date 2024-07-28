import { transactionType } from "~/app/interfaces/types";

export default defineEventHandler(async (event) => {
  let transactionType = 1;

  (event.context.params!.type as transactionType) == "income" ? (transactionType = 1) : (transactionType = 2);

  return await prisma.categories.findMany({
    where: {
      user_id: Number(event.context.params!.userId),
      transaction_type_id: transactionType,
    },
    select: {
      category_id: true,
      label: true,
      color: true,
    },
  });
});
