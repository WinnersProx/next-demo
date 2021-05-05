import { PrismaClient } from ".prisma/client";
import { IResolvers } from "@graphql-tools/utils";

const prisma = new PrismaClient();


export const resolvers: IResolvers<any, {}> = {
    Query: {

        async books(_, { page }) {
            const books = await prisma.book.findMany();
            
            return books;
        }
    },

    Mutation: {
        async book(_, { title, content }) {
            const data = { title, content };

            return await prisma.book.create({ data });
        }
    }
}
