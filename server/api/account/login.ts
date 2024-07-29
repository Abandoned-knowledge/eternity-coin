import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event);

  const user: [] = await prisma.$queryRaw`
  SELECT *
  FROM users
  WHERE email = ${login} AND password = ${password}
  `;

  if (user.length !== 0) {
    return user;
  } else {
    return "user not found";
  }
});
