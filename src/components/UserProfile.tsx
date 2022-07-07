import Link from 'next/link'

const UserProfile = props => {

  return (
    <>
      <Link href="/profile">
        <a>
          Gravity Zero
        </a>
      </Link><br />
      <Link href="/profile">
        <a className='text-sm'>
        </a>
      </Link>
    </>
  )
}
export default UserProfile