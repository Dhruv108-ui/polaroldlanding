import BlogPost from '@/components/blogs/BlogPost';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '@/assets/db/config';

export default function Page({ blog, relatedBlogs }) {
  return (
    <div className="container mx-auto">
      <BlogPost blog={blog} relatedBlogs={relatedBlogs} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { blogId } = context.params;

  try {
    const blogCollection = collection(database, 'blog');
    const blogSnapshot = await getDocs(blogCollection);
    const blogList = blogSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const blog = blogList.find((blog) => blog.id === blogId);

    if (!blog) {
      return {
        notFound: true,
      };
    }

    const relatedBlogs = blogList.filter(
      (relatedBlog) => relatedBlog.category === blog.category && relatedBlog.id !== blogId
    ).map((relatedBlog) => ({
      ...relatedBlog,
      description: relatedBlog.description.substring(0, 100) + '...<a href="/blog/' + relatedBlog.id + '">Read More</a>',
    }));
    const allBogs = blogList.filter(
      (relatedBlog) => relatedBlog.category === relatedBlog.category && relatedBlog.id !== blogId
    ).map((relatedBlog) => ({
      ...relatedBlog,
      description: relatedBlog.description.substring(0, 100) + '...<a href="/blog/' + relatedBlog.id + '">Read More</a>',
    }));

    return {
      props: {
        blog,
        relatedBlogs: relatedBlogs.length > 0 ? relatedBlogs.slice(0, 3) : allBogs.slice(0, 3)
      },
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      notFound: true,
    };
  }
}
