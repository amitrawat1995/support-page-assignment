import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className='m-20 '>
      <h1 className='text-3xl mb-4 '>Enter your question</h1> 
      <div className='flex flex-col relative'>
        <input type='text' className='border-2 border-gray-300 rounded p-3 pl-14 md:w-3/4 lg:w-3/5 text-xl' placeholder='How do I connect a custom domain?'/>  
        <FontAwesomeIcon className='absolute left-4 top-5 text-gray-400 text-xl' icon={faMagnifyingGlass}/>
      </div>
    </div>
  )
}

export default Search;