import Head from "next/head";
import Layout from "../../components/layout";
import Link from 'next/link';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { withDataAndRouter } from "../../src/helpers/with-data";

const utilsStyles = require('../../styles/utils.module.css');

const query = gql`
  query fetchBooks($page: Int!) {
    books(page: $page) {
      id
      title
    }
  }
`;


export function BooksPage ()  {
  const page = 1;

  const { data } = useQuery(query, { variables: { page }});

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
            data?.books.length && data?.books.map(({ title, id }) => (
              <div className={utilsStyles.flexible} key={id}>
                <Link href={`books/${id}`}>
                  <div className={utilsStyles.bold}>{title}</div>
                </Link>
                {/* <div className={utilsStyles.muted}>{date}</div> */}
              </div>
            ))
          }
        </div>
      </main>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//    return {
//      props: {
//       books: getSortedBooks()
//      }
//    }
// }

export default withDataAndRouter(BooksPage);
