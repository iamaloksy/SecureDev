import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { FaBook } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import teacher from "../components/assets/images/Designer (1).png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const Resources = () => {
  return (
    <>
      <section className='courses bg-linear-gradient(120deg, #d6f7bd, #d8aaf7, #a6c4ed) py-16 '>
  <div className='w-4/5 m-auto'>
    <div className='heading mb-16'>
      <h1 className='text-3xl font-semibold text-black'>
        Find The Right <br />
        Online Course For You
      </h1>
      <span className='text-sm mt-2 block'>We're here to lighten the load and make things easier for you.</span>
    </div>
    <div className='grid grid-cols-2 gap-8 md:grid-cols-1'>
      {courses.map((item) => (
        <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
          <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
            <img
              src={item.cover}
              alt=''
              className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
            />
            <div className='categ flex gap-4 absolute top-0 m-3'>
              <span className='text-[14px] bg-blue-700 p-1 px-3 text-white rounded-[5px] shadow-md'>
                IT
              </span>
            </div>
          </div>
          <div className='text p-3'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <FaBook />
                <span className='text-[14px] ml-2'> {item.lesson}</span>
              </div>
              <div className='flex items-center'>
                <AiFillStar className='text-orange-500' />
                <span className='text-[14px] ml-2'>{item.rate}</span>
              </div>
            </div>
            <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
            <div className='user flex items-center'>
              <img className='rounded-full w-7 h-7 object-cover shadow-shadow1 ' src={teacher} alt='' />
              <span className='text-[14px] ml-2'> Alok</span>
            </div>
          </div>
          <div className='flex items-center justify-between border-t border-gray-200 p-3'>
            <span className='text-sm text-primary'>{item.type}</span>
            <a
              href="https://wa.me/+916202141090"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[14px] ml-2 flex items-center'
            >
              Know Details <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  )
}
