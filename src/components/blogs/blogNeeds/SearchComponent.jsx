import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchComponent({searchBlog}) {
  return (
    <div className='border border-gray-300 py-2 px-2 md:w-1/6 sm:w-1/2 xs:w-5/6 mx-auto mt-4 rounded-lg flex items-center'>
        <SearchIcon />
        <input id="searchValue" type="text" placeholder='Search' className='ml-2 placeholder:text-gray-500 placeholder:text-lg py-2 focus:outline-none'
        onChange={(e) => searchBlog(e.target.value)}
        />
    </div>
  )
}

export default SearchComponent
