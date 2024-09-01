import React from 'react'
import Modern from './Modern'
import Craft from './Craft'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import RecentBlog from './RecentBlog'
import Interior from './Interior'

function Home() {
  return (
    <div>
      <Modern/>
      <Craft/>
      <WhyChoose/>
      <Interior/>
      <Testimonials/>
      <div className='d-flex justify-content-between mt-5 px-5'>
        <h1 className='px-3'>Recent Blog</h1>
        <u><a href='http://localhost:5173/Blog' className='tex-dark text-decoaration-underline px-3 fw-300'>View all post</a></u>
      </div>
      <RecentBlog/>
     
    </div>
  )
}

export default Home
