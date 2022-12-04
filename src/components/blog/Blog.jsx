import React from 'react';
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import imgs from '../../images/about.jpg';

const Blog = () => {
  return (
    <div>
      <section className="blog-out mb">
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={imgs} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </div>
  )
}

export default Blog