import { PrismaClient } from "@prisma/client";
import user from "~/entities/user";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { categoryName, color, type } = await readBody(event);

  await prisma.categories.create({
    data: {
      user_id: user.user_id,
      label: categoryName,
      transaction_type_id: type,
      color: color,
    },
  });
});
