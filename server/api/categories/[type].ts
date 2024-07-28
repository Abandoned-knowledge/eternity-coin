import { transactionType } from "~/app/interfaces/types";
import user from "~/entities/user";

export default defineEventHandler(async (event) => {
  let transactionType = (event.context.params!.type as transactionType) == "income" ? 1 : 2;

  return await prisma.categories.findMany({
    select: {
      category_id: true,
      label: true,
      color: true,
    },
    where: {
      user_id: user.user_id,
      type_id: transactionType,
    },
  });
});
