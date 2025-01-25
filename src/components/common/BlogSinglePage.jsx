import React from "react"
import startup from "../assets/images/startup.png"
import aadmi from "../assets/images/contact.png"

export const BlogSinglePage = () => {
  return (
    <div>
      <section className='py-12'>
        <div className='w-3/5 md:w-4/5 m-auto shadow-md rounded-lg'>
          <img className='w-full rounded-t-lg' src={startup} alt='' />
          <div className='text p-5'>
            <p className='text-[14px] leading-5 my-3'>SecureDev: Your path to success. Explore 50+ in-demand courses and gain valuable experience through 10+ internship opportunities
               Launch your career with SecureDev.</p>
            <p className='text-[14px] leading-5 my-3'> Cheeky bugger cracking goal starkers lemon s.</p>
          </div>
          <img className='w-full' src={aadmi} alt='contact' />
          <div className='text p-5'>
            <h3 className='text-black font-semibold'>SecureDev is only thing you have to get</h3>
            <p className='text-[14px] leading-5 my-3'>SecureDev is your gateway to success. We offer a diverse range of over 50 high-quality courses and 10+ valuable internships across various domains. Whether you're seeking to acquire in-demand skills, gain practical experience, or launch your career, SecureDev provides the knowledg
              e and guidance you need to achieve your goals. Join our vibrant community of learners and unlock your full potential.</p>
            <p className='text-[14px] leading-5 my-3'> SecureDev is your gateway to success. We offer a diverse range of over 50 high-quality courses and 10+ valuable internships across various domains. Whether you're seeking to acquire in-demand skills, gain practical experience, or launch your career, SecureDev provides the knowledge and guidance you need to achieve your goals. Join our vibrant community of learners and unlock your full potential
              f don’t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
