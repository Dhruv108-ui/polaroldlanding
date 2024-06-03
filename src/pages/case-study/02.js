import Casestudy from '@/components/caseStudy/Casestudy'
import { useRouter } from 'next/router'
 
export default function Page() {
  return (
    <>
        <div className="container mx-auto">
            <Casestudy
                createdAt='01/06/2024'
                thumbnail='/Landingpage/comp2.jpg'
                title= 'Investales’ Transformation with Polar AI'
                description= 'Investales is a premier financial advisory firm specializing in mutual funds and investment planning. Despite a robust client base and a strong reputation, Investales faced significant challenges in lead management and client communication.'
            />
        </div>
    </>
  )
}