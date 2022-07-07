import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <script src='/js/no-flash.js.txt'></script>
        <Head /> 
        <body className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument