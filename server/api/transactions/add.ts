import user from "~/entities/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { input_category_id, input_value } = await readBody(event);

  console.log({ input_category_id, input_value });

  await prisma.transactions.create({
    data: {
      user_id: user.user_id,
      category_id: Number(input_category_id),
      value: Number(input_value),
      date: new Date(),
    },
  });
});
