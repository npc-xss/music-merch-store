import { faker } from "@faker-js/faker";
import { prisma } from "@/lib/prisma";

function main() {
  Array.from({ length: 10 }).map(async (_, i) => {
    // data
    await prisma.user.create({
      data: {
        name: faker.company.name(),
        email: faker.internet.email(),
      },
    });
  });

  console.log("first");
}

main();
