import { PrismaClient } from "@prisma/client";
import user from "~/entities/user";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { start_date, end_date, type, chart } = event.context.params!;

  if (type != "income" && type != "expense") return [];

  const transactionType = type == "income" ? 1 : 2;

  let transactions;

  if (chart == "donut") {
    transactions = await prisma.$queryRaw`
    SELECT c.label, c.color, sum(value) as value
    FROM transactions as t 
    INNER JOIN categories as c 
    ON t.category_id = c.category_id
    WHERE t.user_id = ${user.user_id} AND c.type_id = ${transactionType} and ${start_date} <= date and date <= ${end_date}
    GROUP BY t.category_id
    ORDER BY c.label
  `;
  } else if (chart == "line") {
    transactions = await prisma.$queryRaw`
      SELECT monthname(t.date) as month, sum(t.value) as value
      FROM transactions as t 
      INNER JOIN categories as c 
      ON t.category_id = c.category_id
      WHERE t.user_id = ${user.user_id} AND c.type_id = ${transactionType} and ${start_date} <= date and date <= ${end_date}
      GROUP BY month, month(t.date)
      ORDER BY month(t.date)
  `;
  }

  return transactions;
});
