import { PrismaClient } from "@prisma/client";
import { type dateType } from "~/app/interfaces/types";
import formatDate from "~/shared/utils/formatDate";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const date = event.context.params!.date as dateType;
  let currDate = new Date();
  currDate.setHours(0, 0, 0, 0);
  let startDate;
  let endDate = currDate;

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
  } else {
    startDate = currDate;
  }
  startDate.setHours(0, 0, 0, 0);

  return await prisma.$queryRaw`
  SELECT category_id, sum(value) as total_value
  FROM transactions
  WHERE user_id = 3 and transaction_type_id = 1 and ${startDate} <= date and date <= ${endDate}
  GROUP BY category_id, transaction_type_id
  ORDER BY category_id`;
});
