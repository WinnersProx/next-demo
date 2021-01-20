import Head from "next/head";
import { getSortedBooks } from "../../books/books";
import Layout from "../../components/layout";

import utilsStyles from '../../styles/utils.module.css';

export default function BooksPage({ books }) {
  console.log(books);
  return (
    <Layout>
      <Head>
        <title>Books API - Books list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilsStyles.list}>
          {
            books.length && books.map(({ date, title, id }) => (
              <div className={utilsStyles.flexible} key={id}>
                <div className={utilsStyles.bold}>{title}</div>
                <div className={utilsStyles.muted}>{date}</div>
              </div>
            ))
          }
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
   return {
     props: {
      books: getSortedBooks()
     }
   }
}
