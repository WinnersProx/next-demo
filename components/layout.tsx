import NewsLetterFooter from "./news-letter-footer";


export default function Layout({ children }) {

    return (
        <div className="container">
            <main>
                <h1 className="title">
                    Welcome to the <a href="https://nextjs.org">Books API</a>
                </h1>

                <div>{children}</div>
            </main>
            <NewsLetterFooter />
        </div>
    )
}
