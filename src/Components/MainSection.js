import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const MainSection = () => {
  return (
    <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 ">
          <div class="w-full  h-screen bg-slate-300">

          </div>

          <div class="w-full  bg-slate-400">Right Section</div>
        </div>

    </section>
  )
}

export default MainSection;

/*  <FontAwesomeIcon className='text-gray-500 text-3xl' icon={faGlobe}/>
                  <span className='text-2xl font-normal'>Domains</span>  

                  <div className='flex items-center  bg-gray-200 ' >
                  Left Section
                </div>
*/                  