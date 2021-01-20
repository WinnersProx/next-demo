import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Books API - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
          <Link href="/books">
            <div className="card">
              <h3>Books &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Chats &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Community &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Posts &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
    </Layout>
  )
}
