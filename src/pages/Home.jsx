import React, { useEffect, useRef } from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';




const Home = () => {
  return (
    <>
      <HomeContent />
    </>
  );
};







const features = [
  {
    name: 'INTERNSHIP',
    description:
      'Gain hands-on experience, learn, and grow through meaningful internships.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'OPPURTURNITIES',
    description:
      'Unlock new possibilities, grow your skills, and seize exciting opportunities.',
    icon: LockClosedIcon,
  },
  {
    name: 'RESOURCES',
    description:
      'Access valuable tools, guides, and materials to enhance your learning.',
    icon: ArrowPathIcon,
  },
  {
    name: 'SERVICES',
    description:
      'Comprehensive solutions to help businesses grow with cutting-edge technology.',
    icon: FingerPrintIcon,
  },
];


const links = [
  { name: 'Open roles', href: 'https://www.linkedin.com/company/securedev' },
  { name: 'Internship program', href: 'https://www.linkedin.com/company/securedev' },
  { name: 'Our values', href: 'https://www.linkedin.com/company/securedev' },
  { name: 'Meet our leadership', href: 'https://www.linkedin.com/company/securedev' },
];

const stats = [
  { name: 'Members', value: '50+' },
  { name: 'Resourses', value: '150+' },
  { name: 'Clients', value: '25+' },
  { name: 'Oppurtunities', value: 'Unlimited' },
];




export default Home;



export const HomeContent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE, // Passing the THREE object as a dependency
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xff6f61, // Globe color
      backgroundColor: 0xbee3e2, // Background color
    });
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  
  
  return (
    <>
    <section ref={vantaRef}>
    <div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
   </div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-black-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          First 10 Student got free internship certificate.{" "}
          <a href="https://forms.gle/AMPGLbGyoTgiCdMd9" target="_blank" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true"></span>Register now{""}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          SecureDev <br /><p>Learn , Build And Thrive</p>
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-black-500 sm:text-xl/8">
        A dynamic startup offering internships for beginners, 
        web and mobile app development, and custom software solutions for businesses.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="internship"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="about" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      ></div>
    </div>
</section>
<hr style={{ border: '2px solid black' }} />

      <section className="bg-linear-gradient(120deg, #d6f7bd, #d8aaf7, #a6c4ed) py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Dear user's</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Whatever you need, you'll find it right here on our platform
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {/* Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc. */}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    

<section>
  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
    />
    <div
      aria-hidden="true"
      className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
      />
    </div>
    <div
      aria-hidden="true"
      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
      />
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
        Join us to explore opportunities, gain valuable experience, and contribute to impactful projects.
        Work in a dynamic environment, grow your skills, and achieve excellence.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name} <span aria-hidden="true">&rarr;</span>
          </a>
          
          ))}
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">{stat.name}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
</section>



    </>
    
  );
};
