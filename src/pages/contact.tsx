import Layout from '../components/Layout'
import Head from 'next/head'

const Contact = (props) => {

  return (
    <Layout layout='full'>
      <Head>
        <title title="title">Gravity Zero IO - Contact Us </title>
      </Head>
      <section className="bg-gray-100 dark:bg-gray-800 py-5gut px-gut">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full order-2 md:order-1 md:w-1/2 bg-gray-100 p-2gut rounded dark:shadow">
            <img src='/images/contact.svg' />
          </div>
          <div className="w-full order-1 md:order-2 md:w-1/2 md:pl-5gut mb-2gut">
            <h1 className="text-3xl mb-gut">Let's talk.</h1>
            <p className="mb-2gut">Whether you need full-stack web development or some just some simple updates. We are here to help with all of you online needs.</p>
            <a href="mailto:info@gravityzero.io" className="button">Contact Us</a>
          </div>
        </div>

      </section>
    </Layout>
  )
}



export default Contact;