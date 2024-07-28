import user from "~/entities/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { input_category_id, input_type, input_value } = await readBody(event);

  const transactionType = input_type == "income" ? 1 : 2;

  await prisma.transactions.create({
    data: {
      user_id: user.user_id,
      category_id: Number(input_category_id),
      value: Number(input_value),
      transaction_type_id: transactionType,
      date: new Date(),
    },
  });
});
