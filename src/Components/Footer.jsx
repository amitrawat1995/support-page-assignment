import { faFacebook, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200 mt-20  p-10 '>
      <div className='m-10'>
        <ul className='flex items-center justify-center gap-8 font-semibold'>
          <li className='hover:text-red-400'><a href=''>Tilda.cc</a></li>
          <li className='hover:text-red-400'><a href=''>Help Center</a></li>
          <li className='hover:text-red-400'><a href=''>Video Tutorials</a></li>
            <li className='hover:text-red-400'><a href=''>Blog</a></li>
        </ul>
      </div>
      <div className=''>
       <ul className='flex items-center justify-center gap-4  '>
          <li><a href=''>< FontAwesomeIcon className='text-3xl hover:text-red-400' icon={faInstagramSquare}/></a></li>
          <li><a href=''><FontAwesomeIcon className='text-3xl hover:text-red-400' icon={faYoutubeSquare}/></a></li>
          <li><a href=''><FontAwesomeIcon className='text-3xl hover:text-red-400' icon={faFacebook}/></a></li>
          <li><a href=''><FontAwesomeIcon className='text-3xl hover:text-red-400' icon={faTwitterSquare}/></a></li>
        </ul>
      </div>
      <div className='grid lg:grid-cols-3  mx-20 mt-28 '>
        <div className=" lg:px-10 xl:px-24 mb-10">
          <h2 className="text-xl font-semibold mb-4">Report abuse</h2>
          <p className=" text-gray-700  ">If you believe that any website mode on Tilda is violating your rights, file a compilant by filling out this <a href="" className='text-red-300 hover:text-red-400'>form</a></p>
        </div>
        <div className="lg:px-10 xl:px-24 mb-10">
          <h2 className="text-xl font-semibold mb-4">How to contact our support</h2>
          <p className="text-gray-700">To find out more about the platform features, use the feedback form in your Tilda account, or contact us via email <a href='' className='text-red-300 hover:text-red-400'>team@tilda.cc</a ></p>
        </div>
        <div className=" lg:px-10 xl:px-24 mb-10">
          <h2 className="text-xl font-semibold mb-4">Accounting docs</h2>
          <p className="text-gray-700">To get the supporting documentation and proof of payement,send your request to <a href='' className='text-red-300 hover:text-red-400'>docs@tilda.cc</a></p>
        </div>
      </div>
        
    </div>
  )
}

export default Footer;