import { Search } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import SearchComponent from './blogNeeds/SearchComponent'
import BlogContainer from './blogNeeds/BlogContainer'
import LoadMoreBtn from './blogNeeds/LoadMoreBtn'
import axios from 'axios'
import { database } from '@/assets/db/config'
import { getDocs, collection } from 'firebase/firestore';

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
      async function fetchBlogs() {
        const blogCollection = collection(database, 'blog');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(blogList);
      }
      
      fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-4">
        <button className='bg-gradient-to-r from-violet-600 to-indigo-600 py-2 px-4 rounded-full text-white'>Our Blog</button>
      </div>
      <div className="flex flex-col p-2">
        <h1 className="text-center text-5xl font-semibold text-theme mt-6">
            Resources and insights
        </h1>
        <p className='text-center text-theme text-2xl mt-4 font-light '>The Latest industry news, interviews, technologies and resources</p>
      </div>
      <SearchComponent/>
      <div className="flex md:m-auto mt-12 flex-wrap md:w-5/6 sm:w-full justify-around sm:mx-0">
        {blogs && blogs.map((blog) => (
            <BlogContainer
                id={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                img={blog.thumbnail}
                authorDetails={{
                    name: blog.authorName,
                    date: blog.createdAt,
                    img: blog.authorImage
                }}
            />
        ))}
      </div>
      <div className="flex justify-center my-12">
      <LoadMoreBtn/>
      </div>
    </>
    
  )
}

export default Blog
