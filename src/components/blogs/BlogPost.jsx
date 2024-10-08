import React, { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
import BlogContainer from './blogNeeds/BlogContainer';
import Head from 'next/head';
import Link from 'next/link';

const BlogPost = ({ blog, relatedBlogs }) => {
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

  const timeToReadBlog = (content) => {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    return Math.ceil(noOfWords / wordsPerMinute);
  };

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

  function getMetaDescription(htmlString, maxLength = 160) {
    // Remove HTML tags
    const text = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  
    // Trim to the maxLength if necessary
    if (text.length <= maxLength) {
      return text;
    }
  
    // Find the last space within the maxLength limit
    const trimmedText = text.substring(0, maxLength);
    const lastSpaceIndex = trimmedText.lastIndexOf(" ");
  
    return trimmedText.substring(0, lastSpaceIndex) + "...";
  }
  const metaDescription = getMetaDescription(blog.description);
  console.log(metaDescription);  

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog.thumbnail} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="go-back py-4 mt-12">
        <Link href="/blogs">
          <ArrowBack sx={{ width: '2rem', height: '2rem' }} />
        </Link>
      </div>
      <h1 className="text-6xl md:w-4/6 sm:w-full xs:w-full mt-10">{blog.title}</h1>
      <div className="border-y border-black w-full mt-10 flex px-8 py-8 justify-between">
        <div className="date flex items-center text-xl">
          <span className="mr-2">{blog.createdAt}</span>
          <CircleIcon sx={{ fontSize: '0.5rem' }} />
          <span className="ml-2">{timeToReadBlog(blog.description)} min read</span>
        </div>
      </div>
      <div className="banner mt-12">
        <img className="w-full" src={blog.thumbnail} alt="" />
      </div>
      <div className="blog-content p-6 text-lg" id="blog_description" dangerouslySetInnerHTML={{ __html: blog.description }} />
      <div className="w-full border border-gray-400 mt-8"></div>

      <h1 className="text-4xl mt-12">Related Blogs</h1>
      <div className="flex mt-2 flex-wrap justify-between mb-8">
        {relatedBlogs &&
          relatedBlogs.map((relatedBlog) => (
            <BlogContainer
              key={relatedBlog.id}
              id={relatedBlog.id}
              title={relatedBlog.title}
              description={relatedBlog.description}
              category={relatedBlog.category}
              img={relatedBlog.thumbnail}
              authorDetails={{
                name: relatedBlog.authorName,
                date: relatedBlog.createdAt,
                img: relatedBlog.authorImage,
              }}
            />
          ))}
        {relatedBlogs && relatedBlogs.length === 0 && (
          <h1 className="text-center w-full text-lg">No Related Blogs Found</h1>
        )}
      </div>
    </>
  );
};

export default BlogPost;
