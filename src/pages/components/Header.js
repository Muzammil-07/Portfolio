import React from 'react'
import Layout from '../Layout'
import { useRouter} from 'next/router'
import Link from 'next/link'

const Header = () => {
  const router = useRouter();
  return (

    <div className='bg-slate-950 h-full w-full flex justify-between p-4 text-lg'>
    
            <h1 className='text-2xl text-purple-500 my-auto'>Portfolio</h1>
      
        <div className='flex  gap-8 mx-8 '>
          <div className='hover:text-purple-300 my-auto'>
          <Link href='/components/About'  >About </Link> 
          </div>
          <div className='hover:text-purple-300 my-auto'>
          <Link href='/components/Projects'>Work </Link> 
          </div>
          <div className='hover:text-purple-300 my-auto'>
          <Link href='/components/About'>Contact </Link> 
          </div>
        </div>
    </div>
 
  )
}

export default Header