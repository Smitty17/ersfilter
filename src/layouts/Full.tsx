import { Button } from '../components/UI'
import DarkModeToggle from "../components/DarkMode";
import { LogoERSFilter } from '../components/Icons'
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
  const liClass = "h-full";
  const navClass = "h-full w-full px-3gut inline-block uppercase tracking-loose font-bold";
  return (
    <section className="flex flex-col h-screen">

      <nav id="navigation">
        <ul className="z-modal relative w-full h-6gut flex justify-center items-center bg-gray-200 dark:bg-gray-900">
          <li className={liClass}>
            <Button
              className={navClass}
              label="Home"
              href="/"
              icon="/icon.jpg" />
          </li>
          <li className={liClass}>
            <Button
              className={navClass}
              label="Services"
              href="/services"
              icon="/icon.jpg" />
          </li>
          <li className="h-full">
            <a href="/" id="gz-logo" className="w-7gut h-full inline-block py-gut">
              <LogoERSFilter />
            </a>
          </li>
          <li className={liClass}>
            <Button
              className={navClass}
              label="About"
              href="/about"
              icon="/icon.jpg" />
          </li>
          <li className={liClass}>
            <Button
              className={navClass}
              label="Contact"
              href="/contact"
              icon="/icon.jpg" />
          </li>
          <li className={liClass}>
            <a onClick={toggleNav} className="md:hidden h-full w-5gut relative h-5gut right-0 top-0 flex items-center justify-center text-xl text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200">
              <FontAwesomeIcon id="btn-open" className="z-modal-close " icon={faBars} />
              <FontAwesomeIcon id="btn-close" className="hidden z-modal-close fixed " icon={faTimes} />
            </a>

          </li>
        </ul>
      </nav>


      <main className='flex-grow'>{props.children}</main>


      <footer className="w-full py-4gut bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-gut">
          <div className="grid grid-cols-1 sm:grid-cols-4 text-center sm:text-left">
            <div className="start-row-1">
              <div className="w-8gut mx-auto mb-gut">
                <LogoERSFilter />
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
  )
}

export default Full;