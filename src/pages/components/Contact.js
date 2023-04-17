import React from 'react'
import { useState,useRef } from 'react'


const Contact = () => {
    const form = useRef()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

     const sendEmail =(e)=>{
     e.preventDefault();
     console.log(form.current)
     }

    return (
        <div className='p-8 flex justify-start flex-col text-white'>
            <h1 className='text-3xl text-start text-purple-500 font-bold my-4'>CONTACT</h1>
            <form ref={form} onSubmit={sendEmail}  >
                <div className='flex justify-start my-2'>

                    <div>
                        <label className='text-3xl '>Name </label>
                        <input className='text-black h-12 w-72 rounded-md p-2 text-xl' type='text' name='userName' />
                    </div>
                </div>
                <div className='flex justify-start my-2 '>
                    <div>
                        <label className='text-3xl mr-2'>Email </label>
                        <input className='text-black h-12 w-72 rounded-md p-2 text-xl' type='email' name="email" />
                    </div>
                </div>
                <div className='flex justify-start my-2 '>
                    <div>
                        <label className='text-2xl mr-2 align-top'>Message</label>
                        <textarea className='text-amber-700 w-96 rounded-md p-2' rows="4" />
                    </div>

                </div>
                <button type='submit' className=' w-[100px] h-[40px] rounded-md text-xl hover:text-slate-950 hover:border-white border-2 border-slate-500 bg-purple-600 ml-96'>Submit</button>
            </form>
          
        </div>
    )
}

export default Contact