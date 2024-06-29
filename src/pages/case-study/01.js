import Casestudy from '@/components/caseStudy/Casestudy'
import { useRouter } from 'next/router'
 
export default function Page() {
  return (
    <>
        <div className="container mx-auto">
            <Casestudy
                createdAt='01/06/2024'
                thumbnail='/Landingpage/comp1.png'
                title= 'Midson Advisors’ Transformation with Polar AI'
                description= 'Midson Advisors is a financial services firm that specializes in wealth management and investment consulting. With a significant client base and a comprehensive suite of services, Midson Advisors had established itself as a reliable player in the financial sector.'
            />
        </div>
    </>
  )
}