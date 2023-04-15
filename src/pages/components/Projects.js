import React from 'react'
import Image from 'next/image'
import img1 from '../components/images/weather.png'
import img2 from '../components/images/calculator.png'

const Projects = () => {
    return (
        <div className='flex m-8'>

            <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img1} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Weather App </h2>
                    <a href='https://weatherapp3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit weather App</u></a>
                </div>

            </div>
            <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img2} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> 3d Calculator  </h2>
                    <a href='https://cal3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white '> <u>Visit weather App</u></a>
                </div>

            </div>
        
        </div>
    )
}

export default Projects