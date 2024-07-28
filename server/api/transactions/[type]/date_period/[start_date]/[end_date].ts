import { PrismaClient } from "@prisma/client";
import user from "~/entities/user";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { start_date, end_date, type } = event.context.params!;
  const transactionType = type == "income" ? 1 : 2;
  let transactions;

  const select = {
    value: true,
    date: true,
    categories: {
      select: {
        category_id: true,
        color: true,
        label: true,
        type_id: true,
      },
    },
  };


  if (type == "all") {
    transactions = await prisma.transactions.findMany({
      select: select,
      where: {
        user_id: user.user_id,
        date: {
          gte: new Date(start_date),
          lte: new Date(end_date),
        },
      },
    });
  } else {
    transactions = await prisma.transactions.findMany({
      select: select,
      where: {
        user_id: user.user_id,
        date: {
          gte: new Date(start_date),
          lte: new Date(end_date),
        },
        categories: {
          type_id: transactionType,
        },
      },
    });
  }

  return transactions;
});
