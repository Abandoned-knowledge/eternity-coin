import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id: userId } = event.context.params!;

  return prisma.users.findUnique({
    where: {
      user_id: Number(userId),
    },
  });
});
