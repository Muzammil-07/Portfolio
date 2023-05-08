import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './Layout'
import Header from './components/Header'
import Pc from './components/Pc'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'

import Tech from './components/Tech'
import Projects from './components/Projects'
import Laser from './components/Laser'
import About from './components/About'
import Contact from './components/Contact'
const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  
  
  const [comp, setComp] = useState('none')

  // useEffect(() => {

  //   if (inView) {
  //     setComp(
  //       'w-[250px] h-[200px]  border-2 border-purple-900 rounded-md my-4 transition-all  translate-x-4 duration-75 delay-75  '
  //     )
  //   }

  // }, [inView])


  var arr = [{ skill: "WEB DEVELOPER" }, { skill: "REACT DEVELOPER" }, { skill: "REACT NATIVE DEVELOPER" }]
  return (

    <div className=' w-[100vw] h-[100vh] bg-purple-500  grid md:grid-rows-[80px_550px_650px_650px_650px] grid-rows-[260px_450px_650px_450px_600px] overflow-x-hidden mx-auto grid-cols-4 text-center gap-0.5 text-white'>
      <div className='bg-slate-950 col-span-4  hover:bg-slate-400' >
        <Header />
      </div>
      <div className='bg-slate-950 col-span-4'>
        <div className='flex'>
          <h1 className='text-slate-200 text-start ml-8 my-8 text-3xl md:text-4xl font-bold ' >Hi,I'm </h1>
          <h2 className='text-purple-500 text-start my-8 ml-1 text-3xl md:text-4xl font-bold '> Muzammil Ali</h2>
        </div>
        <div className=' w-96 h-72 md:w-full md:h-full' style={{ marginTop: "-20px" }}>
          <Pc/>
        </div>

      </div>
      <div className='bg-slate-950 col-span-4 md:col-span-2 p-8 row-span-2 md:row-span-1'>

       <About/>
      </div>
      <div className='bg-slate-950 col-span-4 md:col-span-2 -ml-2'>
        <Tech/>
      </div>
      <div className='bg-slate-950 col-span-4'>
        <h1 className='text-4xl m-8 text-purple-500 text-start font-bold'> PROJECTS</h1>
        <Projects/>
      </div>
      <div className='bg-slate-950 col-span-4'>
        <Laser/>  
      </div>
      <div className='bg-slate-950 col-span-4 '>
        <Contact/>
      </div>
      {/* <div className='bg-gray-800'>eight</div> */}

    </div>

  )
}
