
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NotifBox = props => {

  const [autoDismiss, setAutoDismiss] = useState(props.autoDismiss !== undefined ? props.autoDismiss : true);

  const dismiss = () => {
    setTimeout(() => {
      props.setShowNotifBox(false)
    }, 3000)
  };

  useEffect(() => {
    setAutoDismiss(autoDismiss);
  }, [props])

  const notificationType = {
    success: 'green',
    warning: 'yellow',
    info: 'blue',
    error: 'red'
  }

  return (
    props.showNotifBox ? (
      <>{autoDismiss ? dismiss() : ""}
        <div className={`relative p-2gut rounded w-full bg-${notificationType[props.notifType]}-200 text-gray-800 mb-gut`}>
          {props.children}
          <a onClick={() => props.setShowNotifBox(false)} className='block flex items-center text-gray-800 text-md top-0 right-0 absolute w-2gut h-2gut z-modal-close cursor-pointer dark:hover:text-gray-1000 rounded-tr-md'>
            <FontAwesomeIcon className="m-auto" icon={faTimes} />
          </a>
        </div>
      </>
    ) : null
  )
}

export default NotifBox;