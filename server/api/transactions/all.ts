import { PrismaClient } from "@prisma/client";
import user from "~/entities/user";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return await prisma.$queryRaw`
        SELECT c.label, t.value, t.date, t.transaction_type_id
        FROM transactions as t
        INNER JOIN categories as c
        ON t.category_id = c.category_id
        WHERE t.user_id = ${user.user_id}
        ORDER BY t.transactions_id desc
    `;
});
