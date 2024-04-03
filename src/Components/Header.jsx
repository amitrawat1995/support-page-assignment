import React from 'react';

import { useState } from 'react';
import logo from "../assets/tildaIcon.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { faGlobe,faCaretDown,faBars ,faXmark} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='bg-white h-24 px-10 flex items-center justify-between relative ' >
      
        <div className='flex items-center gap-4'>
          <img src={logo}  className="h-10 w-10" alt="logo"/>
          <p className='text-lg ' style={{fontFamily:"lexend"}}>Frequently asked questions</p>
        </div>

        <div className='flex items-center gap-12'>
          <div className='hidden lg:flex'>
            <a href="#" className='flex items-center gap-2'>
              <p className='text-lg' style={{fontFamily:"lexend"}}>Go to Tilda.cc</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className=' text-xs opacity-1'/>
            </a>
          </div>

          <div className='hidden lg:flex'>
          <a href="#" className='flex items-center gap-2'>
              <p className='text-lg' style={{fontFamily:"lexend"}}>Go to Help Center</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs opacity-1'/>
          </a>
          </div> 
            
          <div className=''>
            
          <button className='border-2 border-gray-300 rounded-md flex items-top gap-1 py-2 px-4'>
            <FontAwesomeIcon className='text-xs pt-2' icon={faGlobe}/>
             <span className='text-lg' style={{fontFamily:"lexend"}}>EN</span>
            <FontAwesomeIcon className='pt-1' icon={faCaretDown}/>  
            </button>
          </div>
  
            <button className='lg:hidden text-2xl border-2  border-gray-300 rounded p-2 px-3' onClick={toggleSidebar} ><FontAwesomeIcon  icon={faBars} /></button>
        
        </div>
        
        <div className={`lg-hidden fixed top-0 z-50 right-0 h-screen bg-white w-64 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={toggleSidebar} className='border-2 m-4 mx-4'>
            <FontAwesomeIcon className='p-2 text-3xl right' icon={faXmark} />
          </button> 
          <hr className='m-3'/>       
          <a href="#" className='flex items-center p-4 gap-2'>
            <p className='text-lg'>Go to Tilda.cc</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs opacity-1' />
          </a>
          <a href="#" className='flex items-center p-4 gap-2'>
            <p className='text-lg'>Go to Help Center</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs opacity-1' />
          </a>
        </div>
        {isOpen && <div className="fixed top-0 right-0 bg-black bg-opacity-10 h-screen w-screen z-50" onClick={toggleSidebar}></div>}
      </div>
    </div>
  )
}

export default Header