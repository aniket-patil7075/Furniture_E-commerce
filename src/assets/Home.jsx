import React from 'react'
import Modern from './Modern'
import Craft from './Craft'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import RecentBlog from './RecentBlog'

function Home() {
  return (
    <div>
      <Modern/>
      <Craft/>
      {/* <WhyChoose/> */}
      <Testimonials/>
      <RecentBlog/>
    </div>
  )
}

export default Home
