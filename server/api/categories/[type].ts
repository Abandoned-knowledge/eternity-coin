import { transactionType } from "~/app/interfaces/types";
import user from "~/entities/user";

export default defineEventHandler(async (event) => {
  let transactionType = 1;

  (event.context.params!.type as transactionType) == "income" ? (transactionType = 1) : (transactionType = 2);

  return await prisma.categories.findMany({
    where: {
      user_id: user.user_id,
      transaction_type_id: transactionType,
    },
    select: {
      category_id: true,
      label: true,
      color: true,
    },
  });
});
