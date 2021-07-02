import gql from 'graphql-tag';

export const typeDefs = gql(`
    type PageInfo {
        hasNextPage: Boolean
        nextCursor: Int
    }

    type PaginatedBooks {
        books: [Book]
        pageInfo: PageInfo
    }

    type Book {
        id: String
        title: String
        content: String
    }

    type Query {
        books(page: Int!, cursor: Int): PaginatedBooks
    }

    type Mutation {
        book(title: String!, content: String): Book
    }
`);
