import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from 'react-icons/bs';
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
<div className='grid md:grid-cols-2 gap-10' >
    <div className='space-y-8'>
<h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
<p className='text-grey-600 text-[18px] pt-2' data-aos="zoom-in-up">
    Drop me a line,give me a call, or send me a message by submitting the form.
</p>
<div className='flex gap-3 items-center' data-aos="zoom-in-up">
  <AiOutlineMail size={30} /> xyz@gmail.com
</div>
<div className='flex gap-3 items-center' data-aos="zoom-in-up">
  <BsTelephone size={30} />(021) 0032-0000
</div>
    </div>
    <div className='space-y-8'> 
      <div className='flex flex-col gap-1' data-aos="zoom-in-up">
        <label htmlFor='name'>Name</label>
        <input type="text"
        className='h-[40px]bg-transparent border border-red-400'
        id='name'/>
      </div>
      <div className='flex flex-col gap-1' data-aos="zoom-in-up">
        <label htmlFor='Email'>Email</label>
        <input type="text"
        className='h-[40px]bg-transparent border border-red-400'
        id='Email'/>
      </div>
      <div className='flex flex-col gap-1'data-aos="zoom-in-up" >
        <label htmlFor='msg'>Message</label>
        <textarea 
        className='bg-transparent border border-red-400'
        id='msg' rows={8}>
        </textarea>
      </div>
      <button className='bg-red-400 p-2 px-6' data-aos="zoom-in-up">Send</button>
    </div>
</div>
    </div>
  )
}

export default Contact