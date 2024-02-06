import React from 'react'
import Image from 'next/image'
import img1 from '../components/images/weather.png'
import img2 from '../components/images/calculator.png'
import img3 from '../components/images/youtube.png'
import img4 from '../components/images/clock.png'
import doctor from '../components/images/doctor.png'
import dashboard from '../components/images/dashboard.png'
import bgChange from '../components/images/bg.png'
import { useState } from 'react'

const Projects = () => {
    const [bgView, setBgView] = useState(false);
    const [doctorView, setDotorView] = useState(false);
    const [dashboardView, setDashboardView] = useState(false);
    const [weatherView, setWeatherView] = useState(false);
    const [youtubeView, setyoutubeView] = useState(false);
    const [calculatorView, setcalculatorView] = useState(false);

    return (
        <div className='flex flex-wrap gap-4 px-12 py-4  '>
               <div className={`${bgView ? "grid grid-rows-[150px_50px_50px_50px_1fr]" : "grid grid-rows-[150px_50px_50px_50px] h-[300px]"} grid-cols-1 w-[250px] border-2 rounded-md  border-purple-400`}>
                <div className=' w-full flex justify-center items-center'>
                    <Image src={bgChange} className='mx-auto h-[150px] w-[200px] object-contain ' height={300} width={300} alt='img1' />
                </div>
                <div className=' w-full'>
                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Ai Bg Changer </h2>
                </div>
                <div className=' w-full'>
                    <a href='https://medemma-web-wjqh.vercel.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit Bg Changer</u></a>
                </div>
                <div>
                    <button onClick={() => { setBgView(!bgView); setDashboardView(false); setWeatherView(false) ;setyoutubeView(false);setcalculatorView(false) }}>View Details </button>
                </div>
                {
                    bgView ? <div className='py-2 text-start px-2'>
                        This Doctor's Web App serves as a seamless platform facilitating effortless communication between doctors and patients. Leveraging Next.js for frontend development, Firebase for backend support, and Tailwind CSS for styling, it offers a robust, efficient, and aesthetically pleasing user experience
                    </div> : ""
                }
            </div>
            <div className={`${doctorView ? "grid grid-rows-[150px_50px_50px_50px_1fr]" : "grid grid-rows-[150px_50px_50px_50px] h-[300px]"} grid-cols-1 w-[250px] border-2 rounded-md  border-purple-400`}>
                <div className=' w-full'>
                    <Image src={doctor} className='mx-auto ' height={200} width={200} alt='img1' />
                </div>
                <div className=' w-full'>
                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Doctor's App </h2>
                </div>
                <div className=' w-full'>
                    <a href='https://medemma-web-wjqh.vercel.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit Doctor's App</u></a>
                </div>
                <div>
                    <button onClick={() => { setDotorView(!doctorView); setDashboardView(false); setWeatherView(false) ;setyoutubeView(false);setcalculatorView(false) }}>View Details </button>
                </div>
                {
                    doctorView ? <div className='py-2 text-start px-2'>
                        This Doctor's Web App serves as a seamless platform facilitating effortless communication between doctors and patients. Leveraging Next.js for frontend development, Firebase for backend support, and Tailwind CSS for styling, it offers a robust, efficient, and aesthetically pleasing user experience
                    </div> : ""
                }
            </div>
            <div className={`${dashboardView ? "grid grid-rows-[150px_50px_50px_50px_1fr]" : "grid grid-rows-[150px_50px_50px_50px] h-[300px]"} grid-cols-1 w-[250px] border-2 rounded-md  border-purple-400`}>
                <div className=' w-full flex justify-center items-center rounded-lg'>
                    <Image src={dashboard} className='mx-auto rounded-lg ' height={150} width={150} alt='img1' />
                </div>
                <div className=' w-full'>
                    <h2 className='text-purple-500 text-3xl font-bold text-center'>  Dashboard </h2>
                </div>
                <div className=' w-full'>
                    <a href='https://medemma-dashboard.vercel.app/signin' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit Doctor's Dashboard</u></a>
                </div>
                <div>
                    <button onClick={() => { setDashboardView(!dashboardView); setDotorView(false); setWeatherView(false) ;setyoutubeView(false);setcalculatorView(false) }}>View Details </button>
                </div>
                {
                    dashboardView ? <div className='py-2 text-start px-2'>
                        This Doctor's Web App serves as a seamless platform facilitating effortless cThis Dashboard Web App acts as a dynamic platform for efficiently managing and presenting data. Powered by Next.js for frontend development, Firebase for backend support, and Tailwind CSS for styling, it delivers a seamless, intuitive, and visually appealing user interface.
                    </div> : ""
                }
            </div>
            <div className={`${weatherView ? "grid grid-rows-[150px_50px_50px_50px_1fr]" : "grid grid-rows-[150px_50px_50px_50px] h-[300px]"} grid-cols-1 w-[250px] border-2 rounded-md  border-purple-400`}>
                <div className=' w-full flex justify-center items-center rounded-lg'>
                    <Image src={img1} className='mx-auto rounded-lg ' height={100} width={100} alt='img1' />
                </div>
                <div className=' w-full'>
                    <h2 className='text-purple-500 text-3xl font-bold text-center'>  Weather App </h2>
                </div>
                <div className=' w-full'>
                    <a href='https://weatherapp3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit Weather App</u></a>
                </div>
                <div>
                    <button onClick={() => { setWeatherView(!weatherView); setDotorView(false); setDashboardView(false) ;setyoutubeView(false);setcalculatorView(false) }}>View Details </button>
                </div>
                {
                    weatherView ? <div className='py-2 text-justify px-2'>
                        Utilizing Next.js, React Three Fiber, Axios, and a comprehensive weather API, this Weather App seamlessly integrates real-time weather data with immersive visualizations, providing users with accurate forecasts and an engaging user experience.
                    </div> : ""
                }
            </div>
            <div className={`${youtubeView ? "grid grid-rows-[150px_50px_50px_50px_1fr]" : "grid grid-rows-[150px_50px_50px_50px] h-[300px]"} grid-cols-1 w-[250px] border-2 rounded-md  border-purple-400`}>
                <div className=' w-full flex justify-center items-center rounded-lg'>
                    <Image src={img3} className='mx-auto rounded-lg ' height={100} width={100} alt='img1' />
                </div>
                <div className=' w-full'>
                    <h2 className='text-purple-500 text-3xl font-bold text-center'>Youtube Clone </h2>
                </div>
                <div className=' w-full'>
                    <a href='https://mtubeclone.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit Youtube Clone</u></a>
                </div>
                <div>
                    <button onClick={() => { setyoutubeView(!youtubeView); setDotorView(false); setDashboardView(false) ;setWeatherView(false); setcalculatorView(false) }}>View Details </button>
                </div>
                {
                    youtubeView ? <div className='py-2 text-justify px-2'>
                        By harnessing the power of the YouTube API, this YouTube Clone brings seamless video streaming to users' fingertips. With its intuitive interface and comprehensive features, users can explore, discover, and engage with content effortlessly, offering an immersive and captivating viewing experience.
                    </div> : ""
                }
            </div>
            <div className={`${calculatorView ? "grid grid-rows-[150px_50px_50px_50px_1fr]" : "grid grid-rows-[150px_50px_50px_50px] h-[300px]"} grid-cols-1 w-[250px] border-2 rounded-md  border-purple-400`}>
                <div className=' w-full flex justify-center items-center rounded-lg'>
                    <Image src={img2} className='mx-auto rounded-lg ' height={100} width={100} alt='img1' />
                </div>
                <div className=' w-full'>
                    <h2 className='text-purple-500 text-3xl font-bold text-center'>3d Calculator </h2>
                </div>
                <div className=' w-full'>
                    <a href='https://cal3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit 3d Calculator</u></a>
                </div>
                <div>
                    <button onClick={() => { setcalculatorView(!calculatorView); setDotorView(false); setDashboardView(false) ;setWeatherView(false);setyoutubeView(false) }}>View Details </button>
                </div>
                {
                    calculatorView ? <div className='py-2 text-justify px-2'>
                       Built with React Three Fiber, this straightforward 3D Calculator offers a user-friendly approach to mathematical operations. Its intuitive interface provides users with a seamless experience for performing calculations in a visually appealing environment.
                    </div> : ""
                }
            </div>
            {/* <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={doctor} className='mx-auto ' height={200} width={200} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Doctor's App </h2>
                    <a href='https://weatherapp3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit weather App</u></a>
                </div>

            </div> */}


            {/* <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img1} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Weather App </h2>
                    <a href='https://weatherapp3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white'> <u>Visit weather App</u></a>
                </div>

            </div> */}
            {/* <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img2} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> 3d Calculator  </h2>
                    <a href='https://cal3d.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white '> <u>Visit Calculator</u></a>
                  
                    <div>

                        <p className='px-6'>
                            This is a Simple Calculator Made with React Three Fiber
                        </p>
                    </div>
                </div>

            </div> */}
            {/* <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img3} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Youtube clone </h2>
                    <a href='https://mtubeclone.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white '> <u>Visit Youtube clone</u></a>
                </div>

            </div> */}
            {/* <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img3} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> Youtube clone </h2>
                    <a href='https://mtubeclone.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white '> <u>Visit Youtube clone</u></a>
                </div>

            </div> */}
            {/* <div className='btn w-[180px] h-[200px] md:w-[280px] md:h-[300px] hover:border-white  border-2 border-purple-900 rounded-md my-4 m-2 '>
                <div className='flex flex-col justify-around align-middle h-full transition-all   '>
                    <Image src={img4} className='mx-auto ' height={100} width={100} alt='img1' />

                    <h2 className='text-purple-500 text-3xl font-bold text-center'> clock  </h2>
                    <a href='https://clockpk.netlify.app/' target='_blank' className='underline-offset-4 text-center text-blue-400 hover:text-white '> <u>Visit Clock</u></a>
                </div>

            </div> */}

        </div>
    )
}

export default Projects