import React from 'react'
import { useInView } from 'react-intersection-observer'
import img1 from '../components/images/web.png'
import img2 from '../components/images/react.png'
import img3 from '../components/images/reactnative.png'
import Image from 'next/image'

const About = () => {
    const { ref, inView } = useInView({
        threshold:0
      })
  return (
    <div className='md:p-8 p-2 bg-slate-950  '>
    <h3 className='text-start text-white '>INTRODUCTION</h3>
    <h1 className='text-start text-3xl font-bold text-purple-500 my-2'>OVERVIEW</h1>
    <p className=' text-justify text-lg text-white md:w-96 w-full '>I am a mern stack developer , I develop Web Apps using HTML CSS JAVASCRIPT REACTjs AND NEXTjs
     for Mobile App development I use Expo CLi and React NATIVE , I also work on Three JS ,Tailwind Css and Bootstrap </p>
    <div className='flex flex-col md:flex-row' ref={ref}>



      <div className={inView ? 'w-[180px] h-[200px]  border-2 border-purple-900 rounded-md md:my-12 my-4 hover:hue-rotate-60 transition-all translate-x-10 duration-1000 delay-500 m-2 ' : 'transition-all -translate-x-72 m-2'}>
        <div className='flex flex-col justify-around align-middle h-full transition-all   '>
          <Image src={img1} className='mx-auto ' height={100} width={100} alt='img1' />

          <h2 className='text-purple-500 text-center'>Web developer</h2>
        </div>
      </div>
      <div className={inView ? 'w-[180px] h-[200px] hover:hue-rotate-60  border-2 border-purple-900 rounded-md md:my-12 my-4 transition-all translate-x-10 duration-1000 delay-300 ' : 'transition-all -translate-x-96'}>  <div className='flex flex-col justify-around align-middle h-full transition-all   '>
        <Image src={img2} className='mx-auto ' height={100} width={100} alt='img1' />

        <h2 className='text-purple-500 text-center'>React developer</h2>
      </div></div>
      <div className={inView ? 'w-[180px] h-[200px] hover:hue-rotate-60  border-2 border-purple-900 rounded-md md:my-12 my-4 transition-all translate-x-10 duration-1000 delay-200 m-2 ' : 'transition-all -translate-x-96 m-2'}>  <div className='flex flex-col justify-around align-middle h-full transition-all   '>
        <Image src={img3} className='mx-auto ' height={100} width={100} alt='img1' />

        <h2 className='text-purple-500 text-center'>React Native developer</h2>
      </div></div>

    </div>
  </div>

  )
}

export default About