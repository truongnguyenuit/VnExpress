import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd"
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: pathName.home,
    name: "Thời sự",
  },
  {
    path: pathName.myBlog,
    name: "Góc nhìn",
  },
  {
    path: pathName.search,
    name: "Thế giới"
  },
  {
    path: pathName.setting,
    name: "Video",
  },
  {
    path: pathName.createPost,
    name: "Podcasts",
  },
  {
    path: pathName.logout,
    name: "Kinh doanh",
  },
  {
    path: pathName.logout,
    name: "Khoa học",
  },
  {
    path: pathName.logout,
    name: "Giải trí",
  },
  {
    path: pathName.logout,
    name: "Thể thao",
  },
  {
    path: pathName.logout,
    name: "Pháp luật",
  },
  {
    path: pathName.logout,
    name: "Giáo dục",
  },
  {
    path: pathName.logout,
    name: "Sức khỏe",
  },
  {
    path: pathName.logout,
    name: "Đời sống",
  },
  {
    path: pathName.logout,
    name: "Du lịch",
  },
  {
    path: pathName.logout,
    name: "Số hóa",
  },
  {
    path: pathName.logout,
    name: "Xe",
  },
  {
    path: pathName.logout,
    name: "Ý kiến",
  },
  {
    path: pathName.logout,
    name: "Tâm sự",
  },
  {
    path: pathName.logout,
    name: "Hài",
  },

];

const NavbarComponent = () => {
  return (
    <div className="bg-white">
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
            <ul className="flex justify-center items-center text-[14px] font-semibold gap-4 h-14 ">
              {NavigateRouter.map((item, index) => {
                return (
                  <li key={index} className="w-14 bg-blue-500">
                    <Link to={item.path} className="text-black hover:text-red-500 ">
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
            <Link to={pathName.login}>
              Login
            </Link>
            <Link to={pathName.register}>
              Register
            </Link>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NavbarComponent