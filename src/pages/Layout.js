import React from 'react'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
  const router =useRouter()

  return (
    <div className='flex-1 bg-slate-950  h-[100vh] '>
      
{children}
</div>
  )
}

export default Layout