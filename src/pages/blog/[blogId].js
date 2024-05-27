import BlogPost from '@/components/blogs/BlogPost'
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return (
    <>
        <div className="container mx-auto">
            <BlogPost slug={router.query.blogId} />
        </div>
    </>
  )
}