import React from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import startup from "../components/assets/images/startup.png";
import intern from "../components/assets/images/indian-young-businessman-standing-modern-office.jpg";
import { courses } from "../components/assets/data/dummydata2"
import teacher from "../components/assets/images/logo.jpg"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

 // Ensure the correct import path

export const Services = () => {
  return (
    <>
    <br />
    
      <section className='instructor mb-16'>

      <div className='container'>
          <div className="class-chitra">
            <div className='content grid grid-cols-2 gap-5 md:grid-cols-1'>
              <div className='images rounded-lg relative overflow-hidden h-72 w-full before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
                <img src={startup} alt='' className='rounded-t-lg object-cover w-full h-72' />
                <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                  <h2 className='text-3xl text-white font-semibold'>Mostly Online Learning</h2>
                  <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Start a class today</button>
                </div>
              </div>
              <div className='images rounded-lg relative overflow-hidden h-72 w-full before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
                <img src={intern} alt='' className='rounded-t-lg object-cover w-full h-72 relative' />
                <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                  <h2 className='text-3xl text-white font-semibold'>Become an Instructor</h2>
                  <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Start a class today</button>
                </div>
              </div>
            </div>
          </div>

          
          <div className='class-content'>
            <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
              <h1 className='text-3xl font-semibold text-black'>We Are Proud</h1>
              <span className='text-[14px] mt-2 block'>You don't have to struggle alone, you've got our assistance and help.</span>
          
            <div className='content grid grid-cols-4 gap-5 md:grid-cols-2'>
              <InstructorCard color='text-red-500' icon={<FaUsers size={40} />} title='100+' desc='Students Enrolled' />
              <InstructorCard color='text-orange-500' icon={<GiEvilBook size={40} />} title='25+' desc='Total Courses' />
              <InstructorCard color='text-purple-500' icon={<FaGraduationCap size={40} />} title='40+' desc='Online Learners' />
              <InstructorCard color='text-indigo-500' icon={<GiWorld size={40} />} title='10+' desc='Community Partners' />
            </div>
          </div>
        </div>
        </div>


      <div className='w-4/5 m-auto'>
    
    <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
      {courses.map((item) => (
        <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
          <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
            <img
              src={item.cover}
              alt=''
              className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300'
            />
            <div className='categ flex gap-4 absolute top-0 m-3'>
              <span className='text-[14px] bg-orange-700 p-1 px-3 text-white rounded-[5px] shadow-md'>
                PAID
              </span>
            </div>
          </div>
          <div className='text p-3'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                
                <span className='text-[14px] ml-2'> {item.Tech}</span>
              </div>
              <div className='flex items-center'>
             
                <span className='text-[14px] ml-2'>{item.Client}</span>
              </div>
            </div>
            <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
            <div className='user flex items-center'>
              <img className='rounded-full w-7 h-7 object-cover shadow-shadow1 ' src={teacher} alt='' />
              <span className='text-[14px] ml-2'>{item.provider}</span>
            </div>
          </div>
          <div className='flex items-center justify-between border-t border-gray-200 p-3'>
            <span className='text-lg text-frontcolor '>{item.price}</span>
            <a
              href="https://wa.me/+916202141090"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[14px] ml-2 flex items-center'
            >
              Get Now <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </div>
      ))}
    </div>
</div>

        


        
      </section>
      
    </>

    
  );
};

export const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className='text mt-2'>
        <h4 className='text-lg font-semibold text-black'>{props.title}</h4>
        <p className='text-[15px]'>{props.desc}</p>
      </div> 
    </div>
  );
};


