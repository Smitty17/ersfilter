import Layout from '../components/Layout'
import Head from 'next/head'
import { py_lg, py_xl, hd_md, hd_2xl, hd_xl, buttonOrange } from '../components/Css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faExchangeAlt, faPaintRoller, faWater } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/UI';


const Testimonials = (props) => {
  return (
    <section className="bg-slate-400 bg-cover bg-center bg-w-full bg-h-full">
      <div className={`grid-container items-center ${py_lg} px-gut relative`}>
        <div className="col-start-main-start col-end-main-end md:col-end-main-2/3">
          <h2 className={`${hd_xl} mb-2gut`}>What our customers had to say.</h2>
        </div>
        <div className="col-start-main-start col-end-main-end relative w-full flex gap-2gut snap-x snap-mandatory overflow-x-auto pb-2gut">
          <div className="rounded showdow-lg bg-white snap-center shrink-0 p-4gut w-2/3 md:w-1/2">
            <p className="mb-2gut italic flex flex-col">
            "ERS completed the job before their target end date, and was completely professional thoughout the project."
            </p> 
            <p className="">Jim Stickler - BMX</p>
          </div>

          <div className="rounded showdow-lg bg-white snap-center shrink-0 p-4gut w-2/3 md:w-1/2">
            <p className="mb-2gut italic flex flex-col">
            "ERS completed the job before their target end date, and was completely professional thoughout the project."
            </p> 
            <p className="">Jim Stickler - BMX</p>
          </div>

          <div className="rounded showdow-lg bg-white snap-center shrink-0 p-4gut w-2/3 md:w-1/2">
            <p className="mb-2gut italic flex flex-col">
            "ERS completed the job before their target end date, and was completely professional thoughout the project."
            </p> 
            <p className="">Jim Stickler - BMX</p>
          </div>

          <div className="rounded showdow-lg bg-white snap-center shrink-0 p-4gut w-2/3 md:w-1/2">
            <p className="mb-2gut italic flex flex-col">
            "ERS completed the job before their target end date, and was completely professional thoughout the project."
            </p> 
            <p className="">Jim Stickler - BMX</p>
          </div>

          <div className="rounded showdow-lg bg-white snap-center shrink-0 p-4gut w-2/3 md:w-1/2">
            <p className="mb-2gut italic flex flex-col">
            "ERS completed the job before their target end date, and was completely professional thoughout the project."
            </p> 
            <p className="">Jim Stickler - BMX</p>
          </div>
        </div>
      </div>
    </section>
  )
}


const ContactBar = (props) => {
  return (
    <section>
      <div className={`grid-container items-center ${py_lg} px-gut relative`}>
        <div className="col-start-main-start col-end-main-end md:col-end-main-2/3">
          <h2 className={`${hd_xl} mb-2gut`}>Let's Talk</h2>
          <p className="mb-gut">Call us now, we'd love to hear how we can help you.</p>
          <p className="font-bold">
            ERS Industrial Industries, INC.
          </p>
          <p>
            2010 Warm Springs Ct.
          </p>
          <p>
            Fremont, CA 
          </p>
          <p className="mb-2gut">
            94539
          </p>
          <Button
            label="Contact Us"
            href="/about"
            className={buttonOrange}
            size="lg"
            />
        </div>
        
      </div>
    </section>
  )
}
const Index = (props) => {

  const servicesClass = "shadow-lg rounded p-2gut flex flex-col bg-white";
  return (
    <Layout layout='full'>
      <Head>
        <title title="title">ERS Industrial Services, INC | Turnkey Services For Water and Wastewater Industries</title>
      </Head>
      <section className="dark:bg-gray-800 bg-red-300 bg-cover bg-center bg-w-full bg-h-full bg-home-hero-image">
        <div className="grid-container flex flex-wrap items-center relative">
          <div className="absolute inset-0 w-full h-full bg-black/75" />
          <div className={`z-pop w-full order-1 md:order-2 text-center mb-3gut ${py_xl}`}>
            <h1 className={`${hd_2xl} text-white`}>ERS Industrial Services, INC.</h1>
          </div>
        </div>
      </section>


      <section className="bg-slate-300 bg-cover bg-center bg-w-full bg-h-full">
        <div className={`grid-container items-center ${py_lg} px-gut relative`}>
          <div className="col-start-main-start col-end-main-end md:col-end-main-2/3">
            <h2 className={`${hd_xl} mb-2gut`}>Services</h2>
            <p className="mb-3gut">
              We specialize in turnkey changeout, filteration, water and wastewater applications, industrial coatings and more. Our knowledge and expertise will get the job done the right way and on-time.
            </p>
          </div>
          <div className="col-start-main-start col-end-main-end grid grid-cols-1 sm:grid-cols-2 gap-4gut lg:gap-8gut">
            
            <div className={servicesClass}>
              <FontAwesomeIcon className="mb-gut" icon={faHardHat} size="2x" />
              <h3 className={`${hd_md} mb-gut`}>Filter Inspection</h3>
              <p className="mb-2gut flex-grow">
                We provide full service Filter Media inspections and testing to help prevent costly shutdowns during critical times.
              </p>
              <div className="flex-none">
                <Button
                  size="lg"
                  className={buttonOrange}
                  href="/services"
                  label="Learn More"
                />
              </div>
             
            </div>

            <div className={servicesClass}>
              <FontAwesomeIcon className="mb-gut" icon={faExchangeAlt} size="2x" />
              <h3 className={`${hd_md} mb-gut`}>Turnkey Filter Media Change Outs</h3>
              <p className="mb-2gut flex-grow">
                We specialize in filter media change outs on all types of filters.
              </p>
              <div className="flex-none">
                <Button
                  size="lg"
                  className={buttonOrange}
                  href="/services"
                  label="Learn More"
                />
              </div>
            </div>

            <div className={servicesClass}>
              <FontAwesomeIcon className="mb-gut" icon={faPaintRoller} size="2x" />
              <h3 className={`${hd_md} mb-gut`}>Turnkey Industrial Coatings Service</h3>
              <p className="mb-2gut flex-grow">
                We apply 100% Epoxys and Elastomeric Polyurethanes on concrete and steel in Water Treatment and Wastewater Treatment Facilities.
              </p>
              <div className="flex-none">
                <Button
                  size="lg"
                  className={buttonOrange}
                  href="/services"
                  label="Learn More"
                />
              </div>
            </div>

            <div className={servicesClass}>
              <FontAwesomeIcon className="mb-gut" icon={faWater} size="2x" />
              <h3 className={`${hd_md} mb-gut`}>Underdrain Repair and Fabrication</h3>
              <p className="mb-2gut flex-grow">
                We specialize in repair of all major underdrain systems in water and wastewater applications.
              </p>
              <div className="flex-none">
                <Button
                  size="lg"
                  className={buttonOrange}
                  href="/services"
                  label="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>
      <ContactBar />

    </Layout>
  )
}



export default Index;