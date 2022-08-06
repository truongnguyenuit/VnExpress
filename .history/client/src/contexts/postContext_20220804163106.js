import { createContext, useReducer, useEffect } from 'react'
import { blogReducer } from '../reducers/postReducer'

import axios from 'axios'

export const BlogContext = createContext()

const BlogContextProvider = ({ children }) => {
  
  const [postState, dispatch] = useReducer(blogReducer, {
    post: null,
    posts: [],
    allPosts: [],
    postsLoading: true
  })

  useEffect(() => {
    getAllBlogs()
    getBlogs()
  }, [postState.postsLoading])


  // Get user posts
  const getBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts`)
      if (response.data.success) {

        dispatch({
          type: 'POSTS_LOADED_SUCCESS',
          payload: response.data.posts
        })
      }
    } catch (error) {
      dispatch({ type: 'POSTS_LOADED_FAIL' })
    }
  }

  // Get all posts
  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/getAllBlogs`)
      if (response.data.success) {

        dispatch({
          type: 'ALL_POSTS_LOADED_SUCCESS',
          payload: response.data.posts
        })
      }
    } catch (error) {
      dispatch({ type: 'POSTS_LOADED_FAIL' })
    }
  }

  // Add post
  const addBlog = async newBlog => {
    try {
      const response = await axios.post(`http://localhost:5000/api/posts`, newBlog)
      if (response.data.success) {
        dispatch({
          type: 'ADD_POST',
          payload: { post: response.data.post }
        })
        return response.data
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: 'Server error' }
    }
  }

  // Delete post
  const deleteBlog = async postId => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`)
      if (response.data.success)

        dispatch({ type: 'DELETE_POST', payload: postId })
      return response.data.message
    } catch (error) {

    }
  }

  // Find post when user is updating post
  const findBlog = blogTitle => {
    
    const post = postState.allPosts.find(post => post.title === blogTitle)
    if (post) {
      dispatch({ type: 'FIND_POST', payload: post })
      return post
    } else
      console.log("Can't find post")

  }

  // Update post
  const updateBlog = async updatedPost => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/posts/${updatedPost._id}`,
        updatedPost
      )
      if (response.data.success) {
        dispatch({ type: 'UPDATE_POST', payload: response.data.post })
        return response.data.message
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: 'Server error' }
    }
  }

  // Post context data
  const postContextData = {
    postState,
    addBlog,
    getBlogs,
    getAllBlogs,
    deleteBlog,
    updateBlog,
    findBlog
  }

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    <PostContext.Provider>
  )
}

export default BlogContextProvider
