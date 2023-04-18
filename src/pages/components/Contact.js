import React from 'react'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/router'


const Contact = () => {
    const router=useRouter();
    const form1 = useRef()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");


     const emailItem ={
        to_name:name,
        from_name: email,
        message:msg
     }    
     const sendEmail =(e)=>{
        e.preventDefault();
     console.log(name,email,msg);
     emailjs.sendForm('service_eoh43oe', 'template_r8dcsjk', form1.current, process.env.API_KEY)
     .then((result) => {
       alert("Message Sent");
       router.reload('/')
     }, (error) => {
         alert(error.text);
     });
     }

    return (
        <div className='p-8 flex justify-start flex-col text-white'>
            <h1 className='text-3xl text-start text-purple-500 font-bold my-4'>CONTACT</h1>
               <form ref={form1} onSubmit={sendEmail} className='w-full'>
                <div className='flex justify-start my-2'>

                    <div>
                        <label className='text-3xl '>Name </label>
                        <input className='text-black h-12 w-72 rounded-md p-2 text-xl' type='text' name='to_name'  onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                </div>
                <div className='flex justify-start my-2 '>
                    <div>
                        <label className='text-3xl mr-2'>Email </label>
                        <input className='text-black h-12 w-72 rounded-md p-2 text-xl' type='email' name="from_name" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className='flex justify-start my-2 '>
                    <div>
                        <label className='text-2xl mr-2 align-top'>Message</label>
                        <textarea className='text-amber-700 w-72 rounded-md p-2 mx-auto' name='message' rows="4" onChange={(e)=>{setMsg(e.target.value)}} />
                    </div>

                </div>
                
                <button type='submit'  className=' w-[120px] h-[40px] rounded-md text-xl self-start hover:text-slate-950 hover:border-white border-2 border-slate-500 bg-purple-600 ml-96'
               >Submit</button>
            
           
           </form>
        </div>
    )
}

export default Contact