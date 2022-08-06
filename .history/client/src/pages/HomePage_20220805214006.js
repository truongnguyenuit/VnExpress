
import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
import AboutComponent from '../components/AboutComponent';
import { BlogContext } from '../contexts/postContext';
import PostComponent from '../components/PostComponent';
const HomePage = () => {
  const {
    blogState: { post, posts, allPosts, postsLoading },
    getBlogs
  } = useContext(BlogContext)

  if (postsLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }
  return (
    <div className='pt-[65px]'>
      <div>HomePage
      </div>
      <div>HomePage
      </div>
      <div>HomePage
      </div>
      <div>HomePage
      </div>
      <div>HomePage
      </div>
    </div>
  )
}

export default HomePage