import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd"
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: pathName.home,
    name: "Quản lý bài viết",
  },
  {
    path: pathName.myBlog,
    name: "Quản lý người dùng",
  },

];
const AdminPage = () => {
  return (
    <d
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
                  <li key={index}>
                    <Link to={item.path} className="text-black hover:text-stone-400">
                      {item.name}
                    </Link>
                  </li>
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

      <Row>
        <Col span={12}>
          <div className="flex">
            asd
          </div>
        </Col>
        <Col span={12}>
          <div className="flex">
            asd
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AdminPage