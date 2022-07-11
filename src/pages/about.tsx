import Layout from '../components/Layout'
import Head from 'next/head'

const About = (props) => {

  return (
    <Layout layout='full'>
      <Head>
          <title title="title">Gravity Zero IO - Pricing </title>
      </Head>
      <section className="bg-gradient-to-tr from-blue-700 to-blue-500 px-gut">
        <div className="container mx-auto items-center py-5gut text-white">
          <h1 className="text-4xl">Simple, transparent pricing</h1>
          <h2 className="text-2xl">Flexible options that scale with your needs.</h2>
        </div>
      </section>
      <section className="py-5gut bg-gray-100 dark:bg-gray-800 px-gut">
        <div className="flex flex-wrap container mx-auto items-center">
          <div className="w-full md:w-1/2 mb-3gut md:pr-5gut">
            <h2 className="text-3xl">Website Design and Development</h2>
            <h3 className="text-xl font-thin mb-gut">Starting at $1500</h3>
            <p className="mb-2gut">Work with our team of expert designers to craft a website that defines your brand. Solutions that fit any size website or application. 
            </p>
            <a className="button" href="/contact">Let's talk</a>

          </div>
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 rounded shadow p-2gut mb-3gut">
            <img src="/images/web-design.svg" />
          </div>
        </div>
      </section>


      <section className="py-5gut bg-gray-300 dark:bg-gray-700 px-gut">
        <div className="flex flex-wrap container mx-auto items-center">
          <div className="w-full md:w-1/2 mb-3gut md:order-2 md:pl-5gut">
            <h2 className="text-3xl">Hosting</h2>
            <h3 className="text-xl font-thin mb-gut">Starting at $29/m</h3>
            <p className="mb-gut">
              Once you build your site, you need a place to host it. Let Gravity Zero handle all the deployment and hosting, so you don't have to worry about SSL certificates, up-time, server updates, and more. Focus on what matters, your businees!
            </p>
            <ul className="ml-2gut list-disc mb-2gut">
              <li>
                Cloud hosting on AWS
              </li>
              <li>
                Dedicated server or VPN
              </li>
              <li>
                Shared Instance
              </li>
            </ul>
            <a className="button" href="/contact">Let's talk</a>

          </div>
          <div className="w-full md:w-1/2  md:order-1 bg-white dark:bg-gray-800 rounded shadow p-2gut mb-3gut">
            <img src="/images/server-hosting.svg" />
          </div>
        </div>
      </section>

    </Layout>
  )
}



export default About;