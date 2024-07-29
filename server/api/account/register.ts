import { PrismaClient } from "@prisma/client";
import { navigateTo } from "nuxt/app";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { login, password, name } = await readBody(event);

  const user = await prisma.users.findFirst({
    where: {
      email: login,
    },
  });

  if (user) {
    return "This email isn't available";
  } else {
    await prisma.users.create({
      data: {
        email: login,
        password: password,
        name: name,
      },
    });
  }
});
