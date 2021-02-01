import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-gray-800 transition-colors duration-100 ease-linear">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument