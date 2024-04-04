import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import optionData from '../Data/optionData';

const MainSection = () => {

  const optionsData=optionData
 
  return (
    <section>
        <div className="grid  grid-cols-1 lg:grid-cols-3  mx-20 gap-16">

          <div className=" lg:col-span -1 "> 
          {
            optionsData.map((data,index)=>{
              return(
                <div className={`w-full  p-4 flex items-center gap-4 ${index === 0 ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>
                  <FontAwesomeIcon className='text-xl text-gray-400 ' icon={data.icon}/>
                  <h2 className='text-xl'>{data.option}</h2>
                </div>
              )
            })
          } 
          </div>

          <div className=" lg:col-span-2 bg-white p-20">
            
              <h2 className='text-2xl mb-8'>Domains</h2>
              <div className=''>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>Why do I see a Tilda logo on a grey background when i open my website?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I connect a custom domain?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I connect multiple domain names to a single Tilda website? </p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I create a custom business email address?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I create a custom domain errors</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I connect a subdomain to my Tilda website?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do Iredirect from HTTP to HTTPS?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I remove "www" from a domain? </p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I set up HTTPS/SSL for a subdomain in Tilda?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How do I set up my HTTPS/SSL certificate?</p>
                </a>
                <a className='flex items-center gap-1 my-4'>
                  <FontAwesomeIcon className='text-yellow-500' icon={faCircleQuestion}/>
                  <p className='text-lg'>How can I speed up(optimize) my Tilda website?</p>
                </a>
              </div>
              
            
          </div>
        </div>

    </section>
  )
}

export default MainSection;

/*  
    

            
*/                  