import { PrismaClient } from "@prisma/client";
import user from "~/entities/user";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  let transactions;

  transactions = await prisma.transactions.findMany({
    select: {
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
    },
    where: {
      user_id: user.user_id,
    },
    orderBy: {
      date: 'desc',
    },
  });

  return transactions;
});
