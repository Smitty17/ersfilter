import Link from 'next/link'
import Navigation from '../components/Navigation'
import UserProfile from '../components/UserProfile'

const Split = props => {

  return (
    <section className="flex flex-row h-screen">

      <div id='sidebar' className="w-12gut bg-white dark:bg-gray-800 border-r-1 border-gray-200 dark:border-gray-600 h-screen flex flex-col fixed">
        <div className="w-full h-4gut border-b-1 flex flex-col justify-center border-gray-200 dark:border-gray-900 px-gut mb-gut flex-none">
          <div id="account-name" className="cursor-pointer ">
            <UserProfile {...props} />
          </div>
        </div>
        <Navigation className="flex-grow" />
      </div>


      <main className='flex flex-col flex-grow ml-12gut'>
        <header className="h-4gut border-b-1 border-gray-200 dark:border-black p-gut flex-none">
        </header>
        <section className="flex-grow  p-2gut">
          {props.children}
        </section>
        <footer>Footer {process.env.ENVIRONMENT}</footer>
      </main>

    </section>


  )
}

export default Split;