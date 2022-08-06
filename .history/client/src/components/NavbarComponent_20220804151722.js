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
      <Row>

        <Col span={12}>
        <img 
        src="https://s1.vnecdn.net/vnexpress/restruct/i/v630/v2_2019/pc/graphics/logo.svg" 
        alt="" />
        <span className=''>Thứ năm, 4/8/2022</span>
        </Col>

        <Col span={12}>
        
        </Col>

      </Row>

      <Row className='border border-slate-200'>

        <Col span={2}>
          <div className='flex justify-end items-center text-[14px] font-semibold gap-4 h-14'>
            <div className='bg-slate-300 w-[22px] h-[20px] flex justify-center items-center rounded-full hover:bg-red-500'>
              <i class="fa-solid fa-house text-slate-600 hover:text-white"></i>
            </div>
          </div>
        </Col>

        <Col span={20} className="h-14">
          <nav>
            <ul className="flex justify-center items-center text-[14px] font-semibold gap-3 h-14 ">
              {NavigateRouter.map((item, index) => {
                return (
                  <li key={index} className=" ">
                    <Link to={item.path} className="text-black hover:text-red-500 w-full">
                      {item.name}
                    </Link>
                  </li>
                );

              })}
            </ul>
          </nav>
        </Col>

        <Col span={2}>
          <div className='flex justify-start items-center text-[14px] font-semibold gap-2 h-14 text-slate-400 hover:text-red-500'>
            <Link to={''} className='text-slate-400 hover:text-red-500'>
              <p className='m-0 '>Tất cả</p>
            </Link>
            <i class="fa-solid fa-sliders"></i>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NavbarComponent