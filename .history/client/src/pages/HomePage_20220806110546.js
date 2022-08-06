
import React, { useContext, useEffect } from 'react'
import { Row, Col, Button } from "antd";
import AboutComponent from '../components/AboutComponent';
import { BlogContext } from '../contexts/postContext';
import PostComponent from '../components/PostComponent';
const HomePage = () => {
  const {
    State: { post, posts, allPosts, postsLoading },
    getBlogs
  } = useContext(BlogContext)

  if (postsLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }
  return (
    <div className='bg-slate-100'>
      <Row className='pt-[65px]  flex justify-center'>

        <Col span={16} className="h-[545px] overflow-hidden">
          <div className="flex flex-wrap">
            {allPosts.map((item, index) => {
              if (item.category === "Tin Hot")
                return (
                  <PostComponent
                    key={index}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    img={item.img}
                    user={item.user}
                    time={item.createAt}
                  />
                );
            })
            }

          </div>
        </Col>
        <Col span={6} className="mt-[4px] ">
          <AboutComponent />
        </Col>

      </Row>

      <Row className='pt-[5px]  flex justify-center'>
        <Col span={5}>
          <div className="flex flex-wrap">
            {allPosts.map((item, index) => {
              if (item.category === "Phổ biến")
                return (
                  <PostComponent
                    key={index}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    img={item.img}
                    user={item.user}
                    time={item.createAt}
                  />
                );
            })
            }

          </div>
        </Col>
        <Col span={17}>
          <div className="w-[1008px] flex gap-[16px] items-end pl-[10 bg-white drop-shadow-md rounded-[8px] overflow-hidden ">
            <span className='text-[18px] font-bold underline decoration-1'>Kinh doanh</span>
            <span className='text-[13px]'>Quốc tế</span>
            <span className='text-[13px]'>Doanh nghiệp</span>
            <span className='text-[13px]'>Chứng khoán</span>
            <span className='text-[13px]'>Bất động sản</span>
            <span className='text-[13px]'>Bảo hiểm</span>
          </div>
          <div className="flex flex-wrap">
            {allPosts.map((item, index) => {
              if (item.category === "Kinh doanh")
                return (
                  <PostComponent
                    key={index}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    img={item.img}
                    user={item.user}
                    time={item.createAt}
                  />
                );
            })
            }

          </div>
        </Col>
      </Row>


    </div>
    // /*{ <div className='bg-slate-100 pt-[65px] flex justify-center'>

    //   <Row>
    //     <Col span={16}>
    //       <div className="flex flex-wrap">
    //         {allPosts.map((item, index) => {
    //           return (
    //             <PostComponent
    //               key={index}
    //               title={item.title}
    //               description={item.description}
    //               img={item.img}
    //               user={item.user}
    //               time={item.createAt}
    //             />
    //           );
    //         })
    //         }

    //       </div>
    //     </Col>
    //     <Col span={8}>
    //       <AboutComponent />
    //     </Col>

    //   </Row>

    // </div> */}
  )
}

export default HomePage