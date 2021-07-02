import Head from "next/head";
import Layout from "../../components/layout";
import Link from 'next/link';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { withDataAndRouter } from "../../src/helpers/with-data";

const utilsStyles = require('../../styles/utils.module.css');

const query = gql`
query fetchBooks($page: Int!, $cursor: Int) {
  books(page: $page, cursor: $cursor) {
    books { id title }
    pageInfo { hasNextPage nextCursor }
  }
}
`;


export function BooksPage ()  {
  const page = 1;

  const { data, fetchMore } = useQuery(query, { variables: { page }});

  return (
    <Layout>
      <Head>
        <title>Books API - Books list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilsStyles.list}>
          Your list is here man...
          {
            data?.books?.books.length && data?.books?.books.map(({ title, id }) => (
              <div className={utilsStyles.flexible} key={id}>
                <Link href={`books/${id}`}>
                  <div className={utilsStyles.bold}>{title}</div>
                </Link>
                {/* <div className={utilsStyles.muted}>{date}</div> */}
              </div>
            ))
          }
        </div>
        { data?.books?.pageInfo.hasNextPage && <div>
          <button 
              className="btn ptn-primary"
              onClick={() => fetchMore({ 
                variables: { page, cursor: data?.books?.pageInfo.nextCursor },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if(!fetchMoreResult) return prev;

                  return {
                    __typename: 'PaginatedBooks',
                    books: [
                      ...prev.books.books,
                      ...fetchMoreResult.books.books
                    ],
                    pageInfo: fetchMoreResult.books.pageInfo
                  };
                }
              })}
              >Load more...</button>
        </div>}
      </main>
    </Layout>
  );
}

export default withDataAndRouter(BooksPage);
