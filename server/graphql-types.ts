import gql from 'graphql-tag';

export const typeDefs = gql(`
    type Book {
        id: String
        title: String
        content: String
    }

    type Query {
        books(page: Int!): [Book]
    }

    type Mutation {
        book(title: String!, content: String): Book
    }
`);
