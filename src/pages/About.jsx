import React from "react";
import aboutImg from "../components/assets/images/oppur.jpg";
import { FaBookDead } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";






// About Section
export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={<FaBookDead size={50} />} title='10+ Internships' desc="Skill Up, Step Up" />
            <AboutCard color='bg-[#DD246E]' icon={<FaBookDead size={50} />} title='50+ Courses.' desc="Our Future Starts Here" />
            <AboutCard color='bg-[#8007E6]' icon={<FaBookDead size={50} />} title='5+ Happy Clients' desc="Delighted Clients, Top Results" />
            <AboutCard color='bg-[#0CAE74]' icon={<FaBookDead size={50} />} title='10+ Services.' desc="Services You Can Trust" />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};

export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300`}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className='rounded-xl' />
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With SecureDev</h1>
            <span className='text-sm mt-2 block leading-6'>
              At SecureDev, we empower individuals with the skills and experience they need to excel in the ever-evolving
              cybersecurity landscape. With over 50 in-depth courses and 10+ valuable internship opportunities, SecureDev
              provides a comprehensive platform for aspiring cybersecurity professionals. Gain hands-on experience, master
              in-demand skills, and build a secure future with SecureDev.
            </span>
            <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Find your worth.
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' /> Access more than 100K online courses.
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Learn the latest skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


