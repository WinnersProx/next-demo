import { PrismaClient } from ".prisma/client";
import { IResolvers } from "@graphql-tools/utils";
import { prismaOffsetPagination, PaginationType } from 'prisma-offset-pagination'

const prisma = new PrismaClient();


export const resolvers: IResolvers<any, {}> = {
    Query: {

        async books(_, { page, cursor }) {
            let extraArgs:any = { take: 5 };

            if(cursor)  {
                extraArgs = { 
                    ...extraArgs, skip: 1, 
                    cursor: { id: cursor }
                }
            }

            const books = await prisma.book.findMany({
                ...extraArgs
            });

            let lastItemId = books[books.length - 1]?.id;

            const hasNext = await prisma.book.findFirst({
                cursor: { id: +lastItemId },
                take: 1
            });

            return { 
                books,
                pageInfo: { 
                    hasNextPage: hasNext ? true : false,
                    nextCursor: lastItemId
                } 
            };
        }
    },

    Mutation: {
        async book(_, { title, content }) {
            const data = { title, content };

            return await prisma.book.create({ data });
        }
    }
}
