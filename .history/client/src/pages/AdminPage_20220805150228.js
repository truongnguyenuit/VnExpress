import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from "antd"
import { pathName } from '../router/pathName';
import PostComponent from "../components/PostComponent";
import { AuthContext } from '../contexts/authContext';
import { BlogContext } from "../contexts/postContext"

import { useFormik } from "formik"
import * as Yup from "yup"

const NavigateRouter = [
  {
    path: true,
    name: "Quản lý bài viết",
  },
  {
    path: false,
    name: "Quản lý người dùng",
  },
];

const AdminPage = () => {
  const {
    authState: { user }
  } = useContext(AuthContext)
  const {
    addBlog,
    State: { post, posts, postsLoading }
  } = useContext(BlogContext)

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      img: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      description: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      category: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      img: Yup.string().required("Required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await addBlog(values)
        alert(response.message)
        console.log(response)

      } catch (error) {
        console.log(error)
      }
    }
  })

  const userFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      password: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      confirmPassword: Yup.string().required("Required").min(4, "Must be 4 character or more")
    }),
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        alert("Confirm password don't match password!")
        return
      }
      try {
        const registerData = await registerUser(values)
        alert(registerData.message)

      } catch (error) {
        console.log(error)
      }
    }
  })


  const [swap, setSwap] = useState(true)
  let modify
  if (swap === true) {
    modify = (
      <Row className='bg-slate-100 flex justify-center'>

        <Col span={7} className=' bg-white m-[4px] p-[20px] drop-shadow-md rounded-[8px] overflow-hidden'>
          <div className="flex flex-col">
            <span className='text-xl font-bold mb-3'>Add Post</span>

          </div>
          <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              placeholder="Title"

              id="title"
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <Input
              type="text"
              placeholder="Description"

              id="description"
              name='description'
              value={formik.values.description}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <Input
              type="text"
              placeholder="Category"

              id="category"
              name='category'
              value={formik.values.category}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <Input
              type="text"
              placeholder="Image Url"

              id="img"
              name='img'
              value={formik.values.img}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <img className="w-full h-[280px] object-cover" src={formik.values.img} alt="" />
            <button
              type="submit"
              className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
            >
              Publish
            </button>
          </form>
        </Col>

        <Col span={16}>
          <div className="flex flex-wrap">

            {posts.map((item, index) => {
              return (
                <PostComponent
                  key={index}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  img={item.img}
                  user={item.user}
                  time={item.createAt}
                  _id={item._id}
                  page={"Myblog"}
                />
              );
            })
            }

          </div>
        </Col>
      </Row>
    )
  } else {
    modify = (
      <Row className='bg-slate-100 flex justify-center'>

        <Col span={7} className=' bg-white m-[4px] p-[20px] drop-shadow-md rounded-[8px] overflow-hidden'>
          <div className="flex flex-col">
            <span className='text-xl font-bold mb-3'>Add User</span>

          </div>
          <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              placeholder="Username"

              id="username"
              name='username'
              value={userFormik.values.username}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <Input
              type="text"
              placeholder="Description"

              id="password"
              name='password'
              value={userFormik.values.password}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <Input
              type="text"
              placeholder="Comfirm password"

              id="category"
              name='category'
              value={useFormik.values.confirmPassword}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <Input
              type="text"
              placeholder="Image Url"

              id="img"
              name='img'
              value={formik.values.img}
              onChange={formik.handleChange}

              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <img className="w-full h-[280px] object-cover" src={formik.values.img} alt="" />
            <button
              type="submit"
              className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
            >
              Publish
            </button>
          </form>
        </Col>

        <Col span={16}>
          <div className="flex flex-wrap">

            {posts.map((item, index) => {
              return (
                <PostComponent
                  key={index}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  img={item.img}
                  user={item.user}
                  time={item.createAt}
                  _id={item._id}
                  page={"Myblog"}
                />
              );
            })
            }

          </div>
        </Col>
      </Row>
    )
  }
  return (
    <div>
      <div className="bg-white pt-[65px] border-b">
        <Row >

          <Col span={6} className="h-14">
            <div className="flex justify-center items-center text-[20px] gap-2 h-14">
              <i className="fa-brands fa-facebook-square cursor-pointer"></i>
              <i className="fa-brands fa-twitter-square cursor-pointer"></i>
              <i className="fa-brands fa-instagram-square cursor-pointer"></i>
              <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
            </div>
          </Col>

          <Col span={12} className="h-14">
            <nav>
              <ul className="flex justify-center items-center text-[17px] gap-4 h-14">
                {NavigateRouter.map((item, index) => {
                  return (
                    <Button key={index} onClick={()=>setSwap(item.path)}>
                      {item.name}
                    </Button>
                  );

                })}
              </ul>
            </nav>
          </Col>

          <Col span={6} className="h-14">
            <div className="flex justify-center items-center gap-2 h-14">
              Design by Truong Nguyen
            </div>
          </Col>

        </Row>
      </div>
      {modify}


    </div>
  )
}

export default AdminPage