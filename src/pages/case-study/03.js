import Casestudy from '@/components/caseStudy/Casestudy'
import { useRouter } from 'next/router'
 
export default function Page() {
  return (
    <>
        <div className="container mx-auto">
            <Casestudy
                createdAt='01/06/2024'
                thumbnail='/Landingpage/comp3.png'
                title= 'Case Study: LexComply’s Efficiency Boost with Polar AI'
                description= 'LexComply is a legal compliance and consulting firm known for its comprehensive support and client-centric services. Despite their expertise, LexComply faced operational challenges that affected their client service levels.'
            />
        </div>
    </>
  )
}