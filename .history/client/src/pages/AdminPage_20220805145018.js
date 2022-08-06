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

  const [swap, setSwap] = useState(true)
  let modify
  if (swap === true) {
    modify = (
      <div className=''>

      </div>
    )
  } else {
    modify = (
      <div className="">

      </div>
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
                    <Button key={index} onClick={setSwap(item.path)}>
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

      

    </div>
  )
}

export default AdminPage