import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedUsers() {
  await prisma.users.create({
    data: {
      name: faker.person.fullName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
    },
  });
}

async function seedCategories() {
  await prisma.categories.create({
    data: {
      transaction_type_id: faker.number.int({ min: 1, max: 2 }),
      user_id: faker.number.int({ min: 1, max: 20 }),
      label: faker.person.firstName(),
      color: faker.color.rgb(),
    },
  });
}
async function seedTransactions() {
  await prisma.transactions.create({
    data: {
      user_id: faker.number.int({ min: 1, max: 20 }),
      category_id: faker.number.int({ min: 1, max: 500 }),
      value: faker.number.int({ min: 1000, max: 100000 }),
      transaction_type_id: faker.number.int({ min: 1, max: 2 }),
      date: faker.date.between({ from: "2020-01-01", to: "2025-01-01" }),
    },
  });
}

try {
  const usersCount = 10;
  const categoriesCount = 500;
  const transactionsCount = 1000;

  for (let i = 0; i < usersCount; i++) await seedUsers();
  for (let i = 0; i < categoriesCount; i++) await seedCategories();
  for (let i = 0; i < transactionsCount; i++) await seedTransactions();

  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
