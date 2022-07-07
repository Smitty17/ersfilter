import Layout from '../components/Layout'
import Head from 'next/head'

const Index = (props) => {

  return (
    <Layout layout='full'>
      <Head>
          <title title="title">Gravity Zero IO - Design | Develop | Deploy | Repeat </title>
      </Head>
      <section className="dark:bg-gray-800">


        <section className="container mx-auto flex flex-wrap items-center py-5gut">
          <div className="w-full order-2 md:order-1 md:w-1/2">
            <img src='/images/rockets.svg' />
          </div>
          <div className="w-full order-1 md:order-2 md:w-1/2 md:pl-4gut text-center md:text-left mb-3gut">
            <h1 className="text-4xl">Gravity Zero</h1>
            <h2 className="text-2xl pb-2gut">Design, develop, deploy.</h2>
            <p className="mb-2gut">Own your entire website experience end-to-end. We provide everything you need to build and host engaging web experiences that will capture and keep you customers engaged. Our talented team will work with you to craft custom solutions that fit your needs and build scalable solutions that grow with your business.</p>
            <a className="button" href="/services">Get Started</a>
          </div>
        </section>
      </section>
    </Layout>
  )
}



export default Index;