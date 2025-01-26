import React from 'react'
import constructionImg from "../../../public/construction.png"
import Image from 'next/image'

const page = () => {
  return (
        <div className={`h-[82vh] w-full flex items-center justify-center bg-black text-white`}>
          <div className="text-center">
            <div className='flex items-center justify-center'>
              <Image src={constructionImg} alt="Under Construction" width={300} height={200} />
            </div>
            <h1 className="text-3xl font-bold">Page Under Construction</h1>
            <p>Sorry, the page you`re looking for is under construction.</p>
          </div>
        </div>
  )
}

export default page
