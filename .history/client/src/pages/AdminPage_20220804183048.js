import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd"
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: pathName.home,
    name: "HOME",
  },
  {
    path: pathName.myBlog,
    name: "MYBLOG",
  },
  {
    path: pathName.search,
    name: "SEARCH"
  },
  {
    path: pathName.setting,
    name: "SETTING",
  },
  {
    path: pathName.createPost,
    name: "WRITE",
  },
  {
    path: pathName.logout,
    name: "LOGOUT",
  },
];
const AdminPage = () => {
  return (
    <div className='pt-[65px]'>
      <div>AdminPage</div>
      <div>AdminPage</div>
      <div>AdminPage</div>
      <div>AdminPage</div>
      <div>AdminPage</div>
      <div>AdminPage</div>
      <div>AdminPage</div>
    </div>
  )
}

export default AdminPage