import Layout from '../components/Layout'
import Head from 'next/head'

const Services = (props) => {

    const pillarStyle = "bg-gradient-to-tr from-blue-200  to-blue-100 p-2gut rounded-lg shadow-lg";

    return (
        <Layout layout='full'>
            <Head>
                <title title="title">Gravity Zero IO - Services </title>
            </Head>
            <section
                className="bg-cover bg-center"
                style={{ backgroundImage: `url("/images/bkgd-white-grid.jpg")` }}>
                <div className="w-full h-full bg-white dark:bg-black bg-opacity-25 dark:bg-opacity-75">
                    <div className="container mx-auto flex items-center py-5gut px-gut md:pr-15gut">
                        <div className="w-full text-black dark:text-white">
                            <h1 className="text-4xl">Services</h1>
                            <h2 className="text-2xl mb-2gut">Hosting • Web Design • Development</h2>
                            <p>Whether your looking to build a build a simple website or a complete customer application, Gravity Zero can design and build you any solution that you require.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-cover bg-center bg-gray-100 dark:bg-gray-800 ">
                <div className="container mx-auto flex items-center py-5gut px-gut ">
                    <div id="hosting" className="w-full text-black dark:text-white ">
                        <h3 className="text-3xl mb-2gut">Hosting</h3>
                        <p className="mb-2gut md:pr-20gut ">
                            Hosting made easy. We offer many options to fit you needs. From flexible dedicated servers to cloud hosting,
                            we can get you set up quickly, and help manage all of your hosting needs, so you can concentrate on
                            your business knowing your greatest marketing tool is working for you.
                        </p>

                        <div className="grid grid-flow-col grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-12 container mx-auto text-black">
                            <div className={pillarStyle}>
                                <h4 className="text-lg mb-gut">
                                    Cloud Hosting on AWS
                                </h4>
                                <p>
                                    If your application needs performance, security, and high availability, then cloud hosting
                                    is a great option. We can set up and manage your site on AWS.
                                </p>
                            </div>
                            <div className={pillarStyle}>
                                <h4 className="text-lg mb-gut">
                                    Dedicated Server / VPS
                                </h4>
                                <p>
                                    Do you need a secure solution that is highly configurable and offers great flexability? Host your site on a dedicated Server or a VPS (Virtual Private Server).
                                </p>
                            </div>
                            <div className={pillarStyle}>
                                <h4 className="text-lg mb-gut">
                                    Shared Instance
                                </h4>
                                <p>
                                    The easiest and cheapest way to host a site. Get up and running quickly. We offer great
                                    affordable hosting for wordpress or custom sites running on shared servers.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section
                className="bg-cover bg-center bg-gray-100 dark:bg-gray-800 "
                style={{ backgroundImage: `url("/images/bkgd-squares.jpg")` }}>
                <div className="w-full h-full bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-75">
                    <div id="design" className="w-full md:pr-20gut text-black dark:text-white container mx-auto py-7gut px-gut">
                        <h3 className="text-3xl mb-2gut">Design</h3>
                        <p className="mb-2gut">
                            You need a site that stands out. Let Gravity Zero supercharge your design. From logo and
                            branding.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="bg-cover bg-center bg-gray-100 dark:bg-gray-800 py-7gut">
                <div className="container mx-auto grid grid-cols-2 px-gut gap-6 md:gap-20 ">
                    <div id="develop" className="col-start-1 col-end-3 md:col-start-1 md:col-end-2 text-black dark:text-white">
                        <h3 className="text-3xl mb-2gut">Develop</h3>
                        <p className="mb-2gut">
                            If your looking for a full web application or a simple wordpress blog, Gravity Zero
                            helps companies build customized solutions that scale and drive their business needs.
                        </p>
                    </div>
                    <div id="develop" className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 text-red container mx-auto">
                        <img src='/images/develop.svg' />
                    </div>
                </div>
            </section>
        </Layout >
    )
}



export default Services;