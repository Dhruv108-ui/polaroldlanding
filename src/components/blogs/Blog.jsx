import { Search } from '@mui/icons-material'
import React, {useState} from 'react'
import SearchComponent from './blogNeeds/SearchComponent'
import BlogContainer from './blogNeeds/BlogContainer'
import LoadMoreBtn from './blogNeeds/LoadMoreBtn'

function Blog() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },{
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
        {
            id: 1,
            title: 'UX review presentation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
            category: 'Design',
            img: "https://assets-global.website-files.com/6482d3c81a3b206db8abe8ab/6482d3c81a3b206db8abe93b_Mastering%20Youtube%20Thumbnail%20in%202023-blog-header.png",
            authorDetails : {
                name: "John Doe",
                date: "10 August 2021",
                img: "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
            }
        },
    ])

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
                key={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                img={blog.img}
                authorDetails={blog.authorDetails}
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
