import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    const user = prisma.user.upsert({
        where: {email: 'test@test.com'}
    })
};
