import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

function BlogContainer({id,title,description,category,img,authorDetails}) {
  return (
    <div className="mt-4">
        <div className="bg-white shadow-lg rounded-lg max-w-sm mb-5 p-6">
            <Link href={`/blog/${id}`}>
                <div className="w-full h-64 overflow-hidden">
                    <img className="w-full h-full object-cover" src={img} alt=""/>
                </div>
            </Link>
            <div className="mt-2">
                <a href="#" className=''>
                    <span className="text-purple-700 font-medium normal-case">{category}</span>
                </a>
                <Link href={`/blog/${id}`} className='flex justify-between'>
                    <h5 className="text-gray-900 font-semibold text-2xl mb-2">{title}</h5>
                    <ArrowOutwardIcon/>
                </Link>
                <p className="font-normal text-gray-700 mb-3">{description}... <Link className='text-theme font-semibold' href={`/blog/${id}`}>Read more</Link></p>
                <div className="flex mt-8 items-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full p-1">
                        <img className='w-full h-full object-cover rounded-full' src={authorDetails.img} alt="" />
                    </div>
                    <div className="ml-2 w-5/6">
                        <a href="#" className="text-gray-700 font-medium">{authorDetails.name}</a>
                        <p className="text-gray-500 font-normal">{authorDetails.date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default BlogContainer
