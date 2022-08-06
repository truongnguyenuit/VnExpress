import { Button, Modal, Input } from 'antd';
import React, { useState, useContext } from 'react';
import { BlogContext } from '../contexts/postContext';

import { useFormik } from 'formik';
import * as Yup from "yup";

const PostComponent = ({ realName, userName, email, img, password, _id, page }) => {
  const {
    deleteBlog,
    updateBlog
  } = useContext(BlogContext)

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };
  const handleDeleteOk = () => {
    setIsDeleteModalVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showUpdateModal = () => {
    setIsUpdateModalVisible(true);
  };
  const handleUpdateOk = () => {
    setIsUpdateModalVisible(false);
  };
  const handleUpdateCancel = () => {
    setIsUpdateModalVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      realName: "",
      userName: "",
      email: "",
      img: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      realname: Yup.string().required("Read name is required").min(4, "Must be 4 character or more"),
      username: Yup.string().required("User name is required").min(4, "Must be 4 character or more"),
      email: Yup.string().required("Email is required").min(4, "Must be 4 character or more"),
      img: Yup.string().required("Image is required").min(4, "Must be 4 character or more"),
      oldPassword: Yup.string().required("Image is required").min(4, "Must be 4 character or more"),
      newPassword: Yup.string().required("Image is required").min(4, "Must be 4 character or more"),
      confirmPassword: Yup.string().required("Image is required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {

      // try {
      //   const updateData = await updateUser(values)
      //   alert(updateData)

      // } catch (error) {
      //   console.log(error)
      // }
    },
  })

  const delBlog = async event => {
    try {
      const response = await deleteBlog(formik.values._id)
      alert(response)

    } catch (error) {
      console.log(error)
    }
    handleDeleteOk()
  }

  let modify
  if (page === "Myblog") {
    modify = (
      <div className='w-[173px] flex justify-end gap-2'>
        <i className="fa-solid fa-pen-to-square text-xl text-red-600 cursor-pointer" onClick={showUpdateModal} ></i>
        <i className="fa-solid fa-xmark text-2xl text-red-600 cursor-pointer" onClick={showDeleteModal}></i>
      </div>
    )
  }

  return (
    <div className="w-[329px] mx-1 my-1 flex flex-col bg-white drop-shadow-md rounded-[8px] overflow-hidden">

      <div className='flex justify-end mt-[12px] ml-[12px] mr-[15px] '>
        {modify}
      </div>

      <div className='mx-[12px] mb-[12px]'>
        <p className="">realName: {realName}</p>
        <p className="">userName: {userName}</p>
        <p>password: {password}</p>
        <p className="s"></p>

      </div>

      <Modal title="Alert" visible={isDeleteModalVisible} onOk={delBlog} onCancel={handleDeleteCancel}>
        <p className='text-red-600'>Are you want to delete this blog?</p>
      </Modal>

      <Modal title="Update Blog" visible={isUpdateModalVisible} onOk={formik.handleSubmit} onCancel={handleUpdateCancel}>
        <form className='flex flex-col gap-2'>
          <Input
            type="text"
            placeholder="Title"

            id="title"
            name='title'
            // value={formik.values.title}
            // onChange={formik.handleChange}
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
            // value={formik.values.description}
            // onChange={formik.handleChange}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
          <Input
            type="text"
            placeholder="Post Category"

            id="category"
            name='category'
            // value={formik.values.category}
            // onChange={formik.handleChange}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
          <Input
            type="text"
            placeholder="Title"

            id="img"
            name='img'
            // value={formik.values.img}
            // onChange={formik.handleChange}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
        </form>
      </Modal>

    </div>
  );
};

export default PostComponent