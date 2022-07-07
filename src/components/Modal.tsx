import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';


const Modal = ({ showModal, setShowModal, children }) => {

  const node = useRef(null);

  const closeModal = (e) => {
    if (node && node.current) {
      if (!node.current.contains(e.target)) {
        setShowModal(false)
      }
    }
   
  }

  return (
    <>{showModal ? (
      <section className='w-full bg-black h-full fixed z-modal top-0 left-0 flex items-center
      justify-center bg-opacity-50' onClick={(e) => closeModal(e)}>
        
        <div ref={node} className="w-4/5 h-4/5 bg-white overflow-y-scroll dark:bg-gray-800 block absolute rounded-md shadow p-gut md:p-2gut">
          {children}
          <a onClick={() => setShowModal(prev => !prev)} className='fixed top-0 right-0 block flex items-center text-gray-800 dark:text-gray-200 text-xl w-3gut h-3gut z-modal-close cursor-pointer dark:hover:text-gray-400 rounded-tr-md'>
            <FontAwesomeIcon className="m-auto" icon={faTimes} />
          </a>
        </div>

      </section>

    ) : null}
    </>
  )
}
export default Modal