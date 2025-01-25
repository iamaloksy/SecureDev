import React from "react";
import logImg from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <>
      <hr style={{ border: '1px solid black', width: '100%' }} />
      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-16'>
        <div className="all-footer">
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-5' style={{height: '70px', width: '70px', justifyContent:'center', marginLeft: '50px'}}/>
            <b style={{marginLeft:'39px', color: 'black'}}>Secure Dev</b><br />
            <span className='text-[14px] ' style={{paddingLeft: '2px'}}>Learn Build and Thrive</span>
          </div>

          <li>
            <h4 className='text-black text-sm font-semibold mb-2'>Services</h4>
            <NavLink to='instructor' className=' text-[14px] block mb-2'>
              UI design
            </NavLink>
            <NavLink to='instructor' className=' text-[14px] block mb-2'>
              UX design
            </NavLink>
            <NavLink to='instructor' className=' text-[14px] block mb-2'>
              Website development
            </NavLink>
            <NavLink to='instructor' className=' text-[14px] block mb-2'>
             App development
            </NavLink>
            <NavLink to='instructor' className=' text-[14px] block mb-2'>
             Creativity Solution
            </NavLink>
            <NavLink to='instructor' className=' text-[14px] block mb-2'>
             Custom App Develop
            </NavLink>
          
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-2'>Resources</h4>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
             Designing
            </NavLink>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
              Web-Design
            </NavLink>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
              Web-Develop
            </NavLink>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
             App-Develop
            </NavLink>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
              Python-programming
            </NavLink>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
              Java-Programming
            </NavLink>
            <NavLink to='courses' className=' text-[14px] block mb-2'>
              Advance Javascript
            </NavLink>
          
          </li>
          
         
        </div>
        </div>
        <div className="find-us">
  <NavLink to='https://www.instagram.com/securedev/' className='text-[14px] block mb-2' target="blank_">
    <img src="/images/5282544_camera_instagram_social media_social network_instagram logo_icon.ico" alt="Instagram Logo" className="social" /> 
  </NavLink>
  <NavLink to='https://www.linkedin.com/company/securedev/' className='text-[14px] block mb-2' target="blank_">
    <img src="/images/5282542_linkedin_network_social network_linkedin logo_icon.ico" alt="LinkedIn Logo" className="social" />
  </NavLink>
  <NavLink to='https://x.com/_securedev' className='text-[14px] block mb-2' target="blank_">
   <img src="/images/11053969_x_logo_twitter_new_brand_icon.ico" alt="X logo" className="social" />
  </NavLink>
  <NavLink to='https://whatsapp.com/channel/0029VayDs86B4hdLR6UymX2U'  className='text-[14px] block mb-2' target="blank_">
   <img src="/images/5282549_call_chat_mobile_whatsapp_whatsapp logo_icon.ico" alt="X logo" className="social" />
  </NavLink>
</div>
         {/* <footer style={{display:'flex' ,justifyContent:'center', alignItems: 'center' , fontSize: 'smaller'}} > connect with us</footer>  */}
         

      
     
     <footer style={{display:'flex',  justifyContent: 'center'}}> &copy; 2025 SecureDev| All rights Reserved</footer>    </footer>
    </>
    
  );
};