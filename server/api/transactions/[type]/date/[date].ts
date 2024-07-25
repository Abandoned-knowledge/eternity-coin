import { PrismaClient } from "@prisma/client";
import type { dateType, transactionType } from "~/app/interfaces/types";
import user from "~/entities/user/index";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const date = event.context.params!.date as dateType;
  const transactionType = event.context.params!.type as transactionType;

  let currType = 1;
  let currDate = new Date();
  currDate.setHours(0, 0, 0, 0);
  let startDate;

  if (date == "day") {
    startDate = currDate;
  } else if (date == "week") {
    const days = 7;
    const timestamp = new Date().setDate(currDate.getDate() - days);
    startDate = new Date(timestamp);
  } else if (date == "month") {
    startDate = new Date();
    startDate.setMonth(currDate.getMonth());
    startDate.setDate(1);
  } else if (date == "year") {
    startDate = new Date();
    startDate.setFullYear(currDate.getFullYear());
    startDate.setMonth(0);
    startDate.setDate(1);
  } else startDate = currDate;
  startDate.setHours(0, 0, 0, 0);

  if (transactionType == "income") {
    currType = 1;
  } else if (transactionType == "expense") {
    currType = 2;
  }

  return await prisma.$queryRaw`
  SELECT c.label, c.color, sum(value) as total_value
  FROM transactions as t 
  INNER JOIN categories as c 
  ON t.category_id = c.category_id
  WHERE t.user_id = ${user.user_id} AND t.transaction_type_id = ${currType} and ${startDate} <= date and date <= ${currDate}
  GROUP BY t.category_id
  ORDER BY c.label
  `;
});
