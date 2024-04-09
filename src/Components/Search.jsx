import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className='m-20 '>
      <h1 className=' text-2xl md:text-3xl  mb-4 '>Enter your question</h1> 
      <div className='flex flex-col relative'>
        <input type='text' className='border-2 border-gray-300 rounded p-3 pl-14 md:w-3/4 lg:w-3/5 md:text-xl' placeholder='How do I connect a custom domain?'/>  
        <button className=''><FontAwesomeIcon  className='absolute left-4 top-5 text-gray-400 hover:text-gray-500 text-xl  transition duration-200 ease-in-out active:text-gray-800' icon={faMagnifyingGlass}/></button>
        
      </div>
    </div>
  )
}

export default Search;