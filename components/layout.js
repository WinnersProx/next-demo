

export default function Layout({ children }) {

    return (
        <div className="container">
            <main>
                <h1 className="title">
                    Welcome to the <a href="https://nextjs.org">Books API</a>
                </h1>

                <div>{children}</div>
            </main>
            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
                </a>
            </footer>
            {/* <style jsx global>{``}</style> */}

        </div>
    )
}
