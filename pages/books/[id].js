import Head from "next/head";
import { getBookDetails, getBookIds } from "../../books/books";
import Layout from "../../components/layout";

import utilsStyles from '../../styles/utils.module.css';

export default function Book({ book }) {

  return (
    <Layout>
      <Head>
        <title>Books API - Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilsStyles.list}>
            <div className={utilsStyles.flexible}>
                <div className={utilsStyles.bold}>{book.title}</div>
                <div className={utilsStyles.muted}>{book.date}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: book.description }} />
        </div>
      </main>
    </Layout>
  );
}

/** Required for dynamic routing  */
export async function getStaticPaths() {
    const paths = getBookIds();

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const book = await getBookDetails(params.id);

    return { props: { book } };
}