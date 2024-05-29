import Link from 'next/link'
import React, {useEffect, useState } from 'react'
import { ArrowBack, ArrowDownward, ArrowDownwardTwoTone, DoneOutlineTwoTone, KeyboardArrowUp, ThumbDown } from '@mui/icons-material'
// import bullet
import CircleIcon from '@mui/icons-material/Circle';
import XIcon from '@mui/icons-material/X';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import facebookSvg from '@/assets/blogs/facebook.svg';
import Image from 'next/image';
import { ThumbUp } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BlogContainer from './blogNeeds/BlogContainer';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import { database } from '@/assets/db/config'
import { getDocs, collection } from 'firebase/firestore';

function BlogPost({slug}) {
    const [blog, setBlog] = useState({})
    const [timeToRead, setTimeToRead] = useState(0)
    
    function timeToReadBlog(content){
        const wordsPerMinute = 200;
        const noOfWords = content.split(/\s/g).length;
        return Math.ceil(noOfWords/wordsPerMinute)
    }

    useEffect(() => {
        if(!slug) return
        async function getBlogDetails(){
            try{
                const blogCollection = collection(database, 'blog');
                const blogSnapshot = await getDocs(blogCollection);
                const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const blogData = blogList.filter((blog) => blog.id === slug)
                if(blogData){
                    setBlog(blogData[0])
                    setTimeToRead(timeToReadBlog(blogData[0].description))
                }
                else{
                    console.log("No Blog Found")
                }
            }
            catch(err){
                console.log(err)
            }
        }

        async function getRelatedBlogs(){
            try{
                // fetch out top 3 blogs matching the category of the current blog minus the current blog, if length is less than 3 then fetch the remaining blogs
                const blogCollection = collection(database, 'blog');
                const blogSnapshot = await getDocs(blogCollection);
                const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const relatedBlogs = blogList.filter((blog) => blog.category === blog.category && blog.id !== slug)
                blogList.forEach(blog => {
                    blog.description = blog.description.substring(0, 100);
                });
                if(relatedBlogs.length>3){
                    setBlogs(relatedBlogs.slice(0, 3))
                }
                else{
                    setBlogs(relatedBlogs)
                }
            }
            catch(err){
                console.log(err)
            }
        }
        
        getBlogDetails()
        getRelatedBlogs()
    }, [slug])

    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Tanishq Soni",
            date: "7 months ago",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, esse hic itaque eum mollitia non nostrum facere ea eligendi, corrupti, voluptate perspiciatis nobis eaque vel! Quam saepe mollitia ipsum.",
            likes: 256,
            dislikes: 99,
            replies: 7,
            repliesData: [  ]
        },
        {
            id: 2,
            name: "Tanishq Soni",
            date: "7 months ago",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, esse hic itaque eum mollitia non nostrum facere ea eligendi, corrupti, voluptate perspiciatis nobis eaque vel! Quam saepe mollitia ipsum.",
            likes: 256,
            replies: 7,
            dislikes: 89,
            repliesData: []
        },
        {
            id: 3,
            name: "Tanishq Soni",
            date: "7 months ago",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, esse hic itaque eum mollitia non nostrum facere ea eligendi, corrupti, voluptate perspiciatis nobis eaque vel! Quam saepe mollitia ipsum.",
            likes: 256,
            dislikes: 99,
            replies: 2,
            repliesData: [
                {
                    id: 1,
                    name: "Tanishq Soni",
                    date: "7 months ago",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, esse hic itaque eum mollitia non nostrum facere ea eligendi, corrupti, voluptate perspiciatis nobis eaque vel! Quam saepe mollitia ipsum.",
                    likes: 256,
                },
                {
                    id: 2,
                    name: "Tanishq Soni",
                    date: "7 months ago",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, esse hic itaque eum mollitia non nostrum facere ea eligendi, corrupti, voluptate perspiciatis nobis eaque vel! Quam saepe mollitia ipsum.",
                    likes: 256,
                }
            ]
        }
    ])

    const [blogs, setBlogs] = useState()

    const [like, setLike] = useState(false)
    const handleLike = () => {
        setLike(true)
    }

    const handleDisLike = () => {
        setLike(false)
    }

    const [replyOpenState, setReplyState] = useState({
            index: 0, 
            state: true
    })

    const handleReply = (index) => {
        setReplyState({
            index: index,
            state: true
        })
    }

    const [replyContent, setReplyContent] = useState({
        reply: "",
    })

    const [reply, setReply] = useState({
        index: "",
        state: false
    })

    const handleReplyOpen = (index) => {
        setReply({
            index: index,
            state: true
        })
    }

    const handleReplyClose = () => {
        setReply({
            index: "",
            state: false
        })
    }

  return (
    <>
        <div className="go-back py-4 mt-12">
            <Link href='/blogs'>
                <ArrowBack sx={{width: "2rem", height: "2rem"}} />
            </Link>
        </div>
        <h1 className='text-6xl md:w-4/6 sm:w-full xs:w-full mt-10'>
            {blog.title}
        </h1>
        <div className="border-y border-black w-full mt-10 flex px-8 py-8 justify-between">
            <div className="date flex items-center text-xl">
                <span className="mr-2">{blog.createdAt}</span>
                <CircleIcon sx={{fontSize: "0.5rem"}}/>
                <span className="ml-2">
                    {timeToRead} min read
                </span>
            </div>
            {/* <div className="social-icon flex">
                <XIcon className='mx-2' sx={{fontSize: "2rem"}}/>
                <ContentCopyIcon className='mx-2' sx={{fontSize: "2rem"}}/>
                <Image className='mx-2' src={facebookSvg.src} alt="facebook" width={32} height={32}/>
            </div> */}
        </div>
        <div className="banner mt-12">
            <img className='w-full' src={blog.thumbnail} alt="" />
        </div>
        <div className="blog-content p-6 text-lg">
            <p className='mt-4'>
                {blog.description}
            </p>
        </div>
        <div className="w-full border border-gray-400 mt-8"></div>
        {/* <div className="comment-section mt-12 mb-8 px-5">
            <h1 className='text-4xl'>Comments</h1>
            <div className="post-comment flex mt-4 items-center w-5/6 p-6 shadow-lg rounded-md md:flex-nowrap sm:flex-wrap xs:flex-wrap flex-grow">
                <div className="flex items-center">
                    <img className='w-12 rounded-full' src="https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg" alt="" />
                    <div className="title ml-4 text-lg">Tanishq Soni</div>
                </div>  
                <div className="flex md:ml-6 w-10/12 justify-around sm:mt-2 sm:ml-16 xs:mt-2 xs:ml-16">
                    <input className='bg-gray-200 py-4 px-4 rounded-md w-full' type="text" placeholder='Add a comment...' />
                    <button className='btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 rounded-md ml-2 text-lg'>Post</button>
                </div>
            </div>
            <div className="comments ">
                {comments.map((comment, index) => (
                    <>
                    <div className="comment p-10 w-5/6 shadow-lg mt-5">
                        <div className="flex items-center">
                            <img className='w-12 rounded-full' src="https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg" alt="" />
                            <div className="title ml-4 text-lg">{comment.name}<span className='text-gray-500 ml-2'>{comment.date}</span></div>
                        </div>
                        <div className="">
                            <p className='ml-16 mt-2 text-gray-500'>
                                {comment.comment}
                            </p>
                            <div className="like-btns ml-16 mt-4">
                                <div className="flex items-center flex-wrap">
                                    <ThumbUp className='cursor-pointer' sx={like?{color: "blue" }:{color: "gray"}} onClick={handleLike} /> <span className='ml-2'>{comment.likes}</span>
                                    <ThumbDown className='ml-4 cursor-pointer' sx={!like?{color: "blue" }:{color: "gray"}} onClick={handleDisLike} /> <span className='ml-2'>{comment.dislikes}</span>

                                    {comment.repliesData.length>0 && 
                                    (<><KeyboardArrowDownIcon onClick={()=>handleReply(index)} className='ml-4 cursor-pointer' sx={!like?{color: "blue" }:{color: "gray"}}  /> <span className='font-semibold text-blue-800'>{comment.repliesData.length} replies</span></>)}
                                    {comment.repliesData.length===0 && reply.index!==index &&
                                    (<><ReplyIcon onClick={()=>{handleReplyOpen(index)}} className='ml-4 cursor-pointer' sx={{color: "blue" }}  /> <span className='font-semibold text-blue-800 ml-1'>Reply</span></>)}
                                    {comment.repliesData.length===0 && reply.index===index && reply.state && (
                                        <form className="reply-box flex ml-4">
                                            <input className='focus:border-b-2 focus:outline-none border-b border-theme py-2 px-4 w-full' type="text" placeholder='Add a Reply...' />
                                            <button className='btn bg-theme text-white px-6 rounded ml-2'>Post</button>
                                            <button className='btn border border-theme text-theme px-6 rounded ml-2 flex items-center justify-center' onClick={handleReplyClose}>
                                                Close
                                                <CloseIcon sx={{ color: "#42307D" }} />
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {index===replyOpenState.index && replyOpenState.state && comment.repliesData.length>0 && comment.repliesData.map((reply) => (
                        <div className="reply flex flex-col items-end w-5/6 " key={reply.id}>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 border-l-2 p-10"></div>
                                <div className="w-11/12 shadow-lg p-10 mt-5">
                                <div className="flex items-center">
                                <img className='w-12 rounded-full' src="https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg" alt="" />
                                <div className="title ml-4 text-lg">{reply.name}<span className='text-gray-500 ml-2'>{reply.date}</span></div>
                            </div>
                            <div className="">
                                <p className='ml-16 mt-2 text-gray-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, esse hic itaque eum mollitia non nostrum facere ea eligendi, corrupti, voluptate perspiciatis nobis eaque vel! Quam saepe mollitia ipsum.
                                </p>
                                <div className="like-btns ml-16 mt-4">
                                    <div className="flex items-center flex-wrap">
                                        <ThumbUp className='cursor-pointer' sx={like?{color: "blue" }:{color: "gray"}} onClick={handleLike} /> <span className='ml-2'>256</span>
                                        <ThumbDown className='ml-4 cursor-pointer' sx={!like?{color: "blue" }:{color: "gray"}} onClick={handleDisLike} /> <span className='ml-2'>256</span>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </>
                ))}
            </div>
        </div> */}

        {/* <div className="w-full border border-gray-400 mt-20"></div> */}
        
        {/* Related Blogs */}

        <h1 className='text-4xl mt-12'>Related Blogs</h1>
        <div className="flex mt-2 flex-wrap justify-between mb-8">
        {blogs && blogs.map((blog) => (
            <BlogContainer
                key={blog.id}
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
        {blogs && blogs.length===0 && <h1 className='text-center w-full text-lg'>No Related Blogs Found</h1>}
      </div>
        

    </>
  )
}

export default BlogPost
