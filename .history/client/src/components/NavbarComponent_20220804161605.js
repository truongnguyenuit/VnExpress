import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Modal } from "antd"
import { pathName } from '../router/pathName';
import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const { Search } = Input

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
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const showLoginModal = () => {
    setLoginModalVisible(true);
  };
  const handleLoginOk = () => {
    setLoginModalVisible(false);
  };
  const handleLoginCancel = () => {
    setLoginModalVisible(false);
  };
  return (
    <div className="bg-white">
      <Row>

        <Col span={12}>
          <div className='flex justify-center items-center gap-[20px] m-[12px]'>
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v630/v2_2019/pc/graphics/logo.svg"
              alt=""
            />
            <span className='border-l-2 pl-[18px]'>Thứ năm, 4/8/2022</span>
          </div>
        </Col>

        <Col span={12}>
          <div className="flex justify-start items-center gap-[15px] m-[12px] ">
            <Button>
              Mới nhất
            </Button>
            <Button>
              International
            </Button>

            <Search
              placeholder="input search text"
              onSearch={''}
              style={{
                width: 200,
                borderRadius: 5
              }}
            />

            <i className="fa-solid fa-user-large text-[20px] text-stone-400"></i>
            <span className='hover:text-blue-500 cursor-pointer'>
              Đăng nhập
            </span>
            <Button>
              Admin
            </Button>
          </div>
        </Col>

      </Row>

      <Row className='border border-slate-200'>

        <Col span={2}>
          <div className='flex justify-end items-center text-[14px] font-semibold gap-4 h-14'>
            <div className='bg-slate-300 w-[25px] h-[24px] flex justify-center items-center rounded-full hover:bg-red-500'>
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
      <Modal title="Update Blog" visible={isLoginModalVisible} onOk={handleLoginOk} onCancel={handleLoginCancel}>
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
  )
}

export default NavbarComponent