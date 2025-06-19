const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("Hieu2209@03", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@portfolio.com" },
    update: {},
    create: {
      email: "admin@portfolio.com",
      username: "admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin user created:", admin);

  // Create sample analytics data
  await prisma.analytics.create({
    data: {
      pageViews: 1500,
      visitors: 800,
      projects: 5,
      snippets: 12,
      blogPosts: 8,
    },
  });

  console.log("Sample analytics data created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
