import { Button } from '../components/UI'
import DarkModeToggle from "../components/DarkMode";
import { SvgIconGzSquare } from '../components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function MyImage() {
  return <img src="/images/gz-logo-square.svg" width="80" alt="my image" />
}


const Full = props => {

  const toggleNav = (e) => {
    const nav = document.getElementById('navigation');
    const btnOpen = document.getElementById('btn-open');
    const btnClose = document.getElementById('btn-close');
    nav.classList.toggle('hidden');
    btnOpen.classList.toggle('hidden');
    btnClose.classList.toggle('hidden');
  }
  return (
  <section className="flex flex-col h-screen">
    <header className="flex top-0 w-full h-5gut items-center justify-between ">
      <a href="/" id="gz-logo" className="relative top-0 z-modal-close flex-none w-5gut h-5gut m-0 p-0">
        <SvgIconGzSquare />
      </a>

      <nav id="navigation" className="hidden z-modal flex md:flex fixed md:relative top-0 h-full md:h-5gut w-full bg-gray-200 text-black dark:bg-gray-900 dark:text-white md:h-auto md:h-auto  items-center flex-col md:flex-row justify-center md:justify-start">
        <Button
          className="py-2gut md:py-0 md:h-full w-full md:w-auto"
          label="Gravity Zero"
          href="/"
          icon="/icon.jpg" />

        <Button
          className="py-2gut md:py-0 md:h-full w-full md:w-auto"
          label="Services"
          href="/services"
          icon="/icon.jpg" />

        <Button
          className="py-2gut md:py-0 md:h-full w-full md:w-auto"
          label="Pricing"
          href="/pricing"
          icon="/icon.jpg" />

        <Button
          className="py-2gut md:py-0 md:h-full w-full md:w-auto"
          label="Contact"
          href="/contact"
          icon="/icon.jpg" />
      </nav>
      <a onClick={toggleNav} className="md:hidden h-full w-5gut relative h-5gut right-0 top-0 flex items-center justify-center text-xl text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200">
        <FontAwesomeIcon id="btn-open" className="z-modal-close " icon={faBars} />
        <FontAwesomeIcon id="btn-close" className="hidden z-modal-close fixed " icon={faTimes} />
      </a>
      
    </header>

    <main className='flex-grow'>{props.children}</main>


    <footer className="w-full py-4gut bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-gut">
        <div className="grid grid-cols-1 sm:grid-cols-4 text-center sm:text-left">
          <div className="start-row-1">
            <div className="w-8gut mx-auto mb-gut">
              <SvgIconGzSquare />
            </div>
          </div>
          <div className="start-row-1">
            <a href="/">
              <h3 className="text-lg mb-gut">Gravity Zero</h3>
            </a>
            <div className="mx-auto mb-2gut">
              <DarkModeToggle />
            </div>
            
          </div>
          <div className="start-row-1 mb-2gut">
            <a href="/services"><h3 className="text-lg mb-gut">Services</h3></a>
            <a href="/services#hosting"><p>Hosting</p></a>
            <a href="/services#design"><p>Design</p></a>
            <a href="/services#develop"><p>Development</p></a>

          </div>
          <div className="start-row-1">
            <a href="/about"><h3 className="text-lg mb-gut">Company</h3></a>
            <a href="/contact"><p>Contact</p></a>
            <a href="/pricing"><p>Pricing</p></a>

          </div>
        </div>
       
      </div>
    </footer>
  </section >
)}

export default Full;