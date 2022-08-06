import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Input } from "antd"
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
      </div>

      <Row className='bg-slate-100'>

        <Col span={9} className=' bg-white m-[10px] p-[20px] drop-shadow-md rounded-[8px] overflow-hidden'>
          <div className="flex flex-col">
            <span className='text-xl font-bold'>Add Post</span>
            
          </div>
          <form className='flex flex-col gap-2'>
            <Input
              type="text"
              placeholder="Title"

              id="title"
              name='title'
              }
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
              
              required
              style={{
                height: 45,
                borderRadius: 5
              }}
            />
            <img className="w-full h-[280px] object-cover" src={'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg'} alt="" />
            <button
                type="submit"
                className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
              >
                Publish
              </button>
          </form>
        </Col>

        <Col span={15}>
          <div className="flex">
            asdasd
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default AdminPage