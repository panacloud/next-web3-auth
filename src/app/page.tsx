import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='m-8'>
      <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-6 mt-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/signup">Signup</Link>
    </div>
  )
}
