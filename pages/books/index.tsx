import Head from "next/head";
import { getSortedBooks } from "../../books/books";
import Layout from "../../components/layout";
import Link from 'next/link';
import { GetStaticProps } from "next";

const utilsStyles = require('../../styles/utils.module.css');

export default function BooksPage({ books }) {

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
                <Link href={`books/${id}`}>
                  <div className={utilsStyles.bold}>{title}</div>
                </Link>
                <div className={utilsStyles.muted}>{date}</div>
              </div>
            ))
          }
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   return {
     props: {
      books: getSortedBooks()
     }
   }
}
