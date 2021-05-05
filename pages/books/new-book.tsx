import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { withDataAndRouter } from "../../src/helpers/with-data";
import { useState } from "react";

const utilsStyles = require("../../styles/utils.module.css");

const mutation = gql`
  mutation addNewBook($title: String!, $content: String) {
    book(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export function NewBookPage() {
  const [book] = useMutation(mutation);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBook = async (e) => {
    e.preventDefault();

    const { data } = await book({ variables: { title, content } });

    console.log("data", data);
  };

  return (
    <Layout>
      <Head>
        <title>Books API - New Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilsStyles.list}>
          <form onSubmit={submitBook}>
            <div>
              <div>
                <label htmlFor="title">Title of the book</label>
              </div>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <div>
                <label htmlFor="conten">Content of the book</label>
              </div>
              <textarea
                id="content"
                name="content"
                rows={5}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <button>Submit book</button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default withDataAndRouter(NewBookPage);
