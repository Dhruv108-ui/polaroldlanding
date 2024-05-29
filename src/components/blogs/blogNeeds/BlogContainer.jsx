import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

function BlogContainer({id,title,description,category,img,authorDetails}) {
  return (
    <div className="mt-4">
    <div className="bg-white shadow-lg rounded-lg max-w-sm mb-5 p-6">
        <a href="#">
            <img className="" src={img} alt=""/>
        </a>
        <div className="mt-2">
            <a href="#" className=''>
                <span className="text-purple-700 font-medium normal-case">{category}</span>
            </a>
            <Link href={`/blog/${id}`} className='flex justify-between'>
                <h5 className="text-gray-900 font-semibold text-2xl mb-2">{title}</h5>
                <ArrowOutwardIcon/>
            </Link>
            <p className="font-normal text-gray-700 mb-3">{description}</p>
            
            <div className="flex mt-12 items-center">
                <div className="w-1/6 p-1">
                    <img className='w-full rounded-full' src={authorDetails.img} alt="" />
                </div>
                <div className="ml-2 w-5/6">
                    <a href="#" className="text-gray-700 font-medium">{authorDetails.name}</a>
                    <p className="text-gray-500 font-normal">{authorDetails.date}</p>
                </div>
            </div>
        </div>
    </div></div>  
  )
}

export default BlogContainer
