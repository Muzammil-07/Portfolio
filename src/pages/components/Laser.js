import React, { useState } from 'react'
import Image from 'next/image'
import img1 from '../components/images/img1.jpg'
import img2 from '../components/images/img2.jpg'
import img3 from '../components/images/img3.jpg'
import img4 from '../components/images/img4.jpg'
import img5 from '../components/images/img5.jpg'
import img6 from '../components/images/img6.jpg'


const Laser = () => {
  const arr =[ img1,img2,img3,img4,img5,img6]
  const [count,setCount]=useState(0)
      const inc =()=>{
       if(count != arr.length-1){
        setCount(count +1)
       }else{
        setCount(0)
       }
      }
      const dec =()=>{
        if(count != 0){
         setCount(count -1)
        }else{
         setCount(0)
        }
       }

   
  return (
    <div className='flex flex-col justify-center w-full'>
        <h1 className='text-start text-3xl font-bold text-purple-500 m-4'>Laser Cutting Projects</h1>
        <div className='bg-slate-50 h-[250] w-[350] md:h-[350px] md:w-[450px] mx-auto flex justify-center rounded-md'>
          <Image className='w-full h-full rounded-md object-contain bg-slate-950' src={arr[count]} height={100} width={250} alt='img1'/>
        </div>
          <div className='flex justify-around w-[350px] md:w-[450px] mx-auto mt-5'>
            <button className='bg-slate-500 w-[80px] hover:border-purple-500 border-2 border-slate-950 rounded-md transition-all duration-75 delay-75 ' onClick={()=>{dec()}}>PREV</button>
            <button className='bg-slate-500 w-[80px] hover:border-purple-500 border-2 border-slate-950 rounded-md ' onClick={()=>{inc()}}>NEXT</button>
          </div>
    </div>
  )
}

export default Laser