import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ArrowBack, ThumbDown, ThumbUp } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import facebookSvg from '@/assets/blogs/facebook.svg';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BlogContainer from './blogNeeds/BlogContainer';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import { database } from '@/assets/db/config';
import { getDocs, collection } from 'firebase/firestore';
import Head from 'next/head';

// Dynamic Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogCollection = collection(database, 'blog');
  const blogSnapshot = await getDocs(blogCollection);
  const blogList = blogSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const blogData = blogList.find((blog) => blog.id === slug);

  return {
    title: blogData.title,
    description: blogData.description,
    openGraph: {
      title: blogData.title,
      description: blogData.description,
      images: [blogData.thumbnail],
    },
    twitter: {
      title: blogData.title,
      description: blogData.description,
      image: blogData.thumbnail,
      card: 'summary_large_image',
    },
  };
}

function BlogPost({ slug }) {
  const [blog, setBlog] = useState({});
  const [timeToRead, setTimeToRead] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [like, setLike] = useState(false);
  const [replyOpenState, setReplyState] = useState({
    index: 0,
    state: true,
  });
  const [replyContent, setReplyContent] = useState({
    reply: '',
  });
  const [reply, setReply] = useState({
    index: '',
    state: false,
  });

  function timeToReadBlog(content) {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    return Math.ceil(noOfWords / wordsPerMinute);
  }

  useEffect(() => {
    if (!slug) return;

    async function getBlogDetails() {
      try {
        const blogCollection = collection(database, 'blog');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const blogData = blogList.find((blog) => blog.id === slug);
        if (blogData) {
          setBlog(blogData);
          setTimeToRead(timeToReadBlog(blogData.description));
          document.getElementById('blog_description').innerHTML =
            blogData.description;
        } else {
          console.log('No Blog Found');
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function getRelatedBlogs() {
      try {
        const blogCollection = collection(database, 'blog');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const relatedBlogs = blogList.filter(
          (blog) => blog.category === blog.category && blog.id !== slug
        );
        relatedBlogs.forEach((blog) => {
          blog.description = blog.description.substring(0, 100);
          blog.description =
            blog.description + `...<a href='/blog/${blog.id}'>Read More</a>`;
        });
        if (relatedBlogs.length > 3) {
          setBlogs(relatedBlogs.slice(0, 3));
        } else {
          setBlogs(relatedBlogs);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getBlogDetails();
    getRelatedBlogs();
  }, [slug]);

  const handleLike = () => {
    setLike(true);
  };

  const handleDisLike = () => {
    setLike(false);
  };

  const handleReply = (index) => {
    setReplyState({
      index: index,
      state: true,
    });
  };

  const handleReplyOpen = (index) => {
    setReply({
      index: index,
      state: true,
    });
  };

  const handleReplyClose = () => {
    setReply({
      index: '',
      state: false,
    });
  };

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.thumbnail} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="go-back py-4 mt-12">
        <Link href="/blogs">
          <ArrowBack sx={{ width: '2rem', height: '2rem' }} />
        </Link>
      </div>
      <h1 className="text-6xl md:w-4/6 sm:w-full xs:w-full mt-10">
        {blog.title}
      </h1>
      <div className="border-y border-black w-full mt-10 flex px-8 py-8 justify-between">
        <div className="date flex items-center text-xl">
          <span className="mr-2">{blog.createdAt}</span>
          <CircleIcon sx={{ fontSize: '0.5rem' }} />
          <span className="ml-2">{timeToRead} min read</span>
        </div>
      </div>
      <div className="banner mt-12">
        <img className="w-full" src={blog.thumbnail} alt="" />
      </div>
      <div className="blog-content p-6 text-lg" id="blog_description" />
      <div className="w-full border border-gray-400 mt-8"></div>

      <h1 className="text-4xl mt-12">Related Blogs</h1>
      <div className="flex mt-2 flex-wrap justify-between mb-8">
        {blogs &&
          blogs.map((blog) => (
            <BlogContainer
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={
                blog.description +
                `...<a class="text-theme font-semibold" href='/blog/${blog.id}'>Read More</a>`
              }
              category={blog.category}
              img={blog.thumbnail}
              authorDetails={{
                name: blog.authorName,
                date: blog.createdAt,
                img: blog.authorImage,
              }}
            />
          ))}
        {blogs && blogs.length === 0 && (
          <h1 className="text-center w-full text-lg">No Related Blogs Found</h1>
        )}
      </div>
    </>
  );
}

export default BlogPost;

