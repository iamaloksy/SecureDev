import React from "react";
import { courses } from "../components/assets/data/dummydata1";
import { AiTwotoneCalendar } from "react-icons/ai";
import teacher from "../components/assets/images/Designer (1).png";

export const Blog = () => {
  return (
    <>
      <section className="courses py-16">
        <div className="w-4/5 m-auto">
          {/* <div className='heading text-center py-100'>
            <h1 className='text-3xl font-semibold text-black'>
            JOIN US <br />
            IN OUR INTERNSHIP PROGRAM
            </h1>
            <span className='text-sm mt-2 block'>We're with you every step of the way.</span>
          </div> */}
          <div className="heading mb-16">
            <h1 className="text-3xl font-semibold text-black">
              JOIN US <br />
              IN OUR INTERNSHIP PROGRAM
            </h1>
            <span className="text-sm mt-2 block">
              We're with you every step of the way.
            </span>
          </div>
          {/* grid info */}

          <div className='grid grid-cols-2 gap-5 md:grid-cols-1'>
  {courses.slice(0, 2).map((item) => (
    <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
      <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
        <img
          src={item.cover}
          alt={item.title}
          className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
        />
      </div>
      <div className='text p-3'>
        <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>
          {item.category}
        </span>
        {/* Redirect to Google Form link */}
        <a
          href="https://forms.gle/AMPGLbGyoTgiCdMd9" // Replace with your actual Google Form link
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
        </a>
        <div className='user flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='rounded-full w-7 h-7 object-cover shadow-shadow1'
              src={teacher}
              alt='teacher'
            />
            <span className='text-[14px] ml-2'>{item.author}</span>
          </div>
          <div className='flex items-center'>
            <AiTwotoneCalendar />
            <span className='text-[14px] ml-2'>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


<div className='grid grid-cols-2 gap-5 md:grid-cols-1'>
  {courses.slice(2, 4).map((item) => (
    <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
      <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
        <img
          src={item.cover}
          alt={item.title}
          className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
        />
      </div>
      <div className='text p-3'>
        <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>
          {item.category}
        </span>
        {/* Redirect to Google Form link */}
        <a
          href="https://forms.gle/AMPGLbGyoTgiCdMd9" // Replace with your actual Google Form link
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
        </a>
        <div className='user flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='rounded-full w-7 h-7 object-cover shadow-shadow1'
              src={teacher}
              alt='teacher'
            />
            <span className='text-[14px] ml-2'>{item.author}</span>
          </div>
          <div className='flex items-center'>
            <AiTwotoneCalendar />
            <span className='text-[14px] ml-2'>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


<div className='grid grid-cols-2 gap-5 md:grid-cols-1'>
  {courses.slice(4, 6).map((item) => (
    <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
      <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
        <img
          src={item.cover}
          alt={item.title}
          className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
        />
      </div>
      <div className='text p-3'>
        <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>
          {item.category}
        </span>
        {/* Redirect to Google Form link */}
        <a
          href="https://forms.gle/AMPGLbGyoTgiCdMd9" // Replace with your actual Google Form link
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
        </a>
        <div className='user flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='rounded-full w-7 h-7 object-cover shadow-shadow1'
              src={teacher}
              alt='teacher'
            />
            <span className='text-[14px] ml-2'>{item.author}</span>
          </div>
          <div className='flex items-center'>
            <AiTwotoneCalendar />
            <span className='text-[14px] ml-2'>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


<div className='grid grid-cols-2 gap-5 md:grid-cols-1'>
  {courses.slice(6, 8).map((item) => (
    <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
      <div className='images rounded-t-lg relative overflow-hidden h-40 w-full'>
        <img
          src={item.cover}
          alt={item.title}
          className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
        />
      </div>
      <div className='text p-3'>
        <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>
          {item.category}
        </span>
        {/* Redirect to Google Form link */}
        <a
          href="https://forms.gle/AMPGLbGyoTgiCdMd9" // Replace with your actual Google Form link
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
        </a>
        <div className='user flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='rounded-full w-7 h-7 object-cover shadow-shadow1'
              src={teacher}
              alt='teacher'
            />
            <span className='text-[14px] ml-2'>{item.author}</span>
          </div>
          <div className='flex items-center'>
            <AiTwotoneCalendar />
            <span className='text-[14px] ml-2'>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
};
