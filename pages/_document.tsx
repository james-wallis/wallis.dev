import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const GA_MEASUREMENT_ID = 'G-612LEC91V0';
        return (
            <Html>
                <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                />
                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}', {
                            page_path: window.location.pathname,
                        });
                        `,
                    }}
                />
                </Head>
                <body className="bg-white dark:bg-gray-800 transition-colors duration-100 ease-linear">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument