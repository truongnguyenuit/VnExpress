
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
          <div className="w-[1008px] flex gap-[16px] items-end pl-[10px] ">
            <span className='text-[18px] font-bold underline decoration-1'>Kinh doanh</span>
            <span className='text-[13px]'>Quốc tế</span>
            <span className='text-[13px]'>Doanh nghiệp</span>
            <span className='text-[13px]'>Chứng khoán</span>
            <span className='text-[13px]'>Bất động sản</span>
            <span className='text-[13px]'>Bảo hiểm</span>
          </div>
          <div className="flex flex-wrap h-[270px] overflow-hidden">
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

          <div className="w-[1008px] flex gap-[16px] items-end pl-[10px] ">
            <span className='text-[18px] font-bold underline decoration-1'>Thể thao</span>
            <span className='text-[13px]'>Bóng đá</span>
            <span className='text-[13px]'>Tennis</span>
            <span className='text-[13px]'>Marathon</span>
            <span className='text-[13px]'>Lịch thi đấu</span>
          </div>
          <div className="flex flex-wrap h-[270px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Thể thao")
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

          <div className="w-[1008px] flex gap-[16px] items-end pl-[10px] ">
            <span className='text-[18px] font-bold underline decoration-1'>Giải trí</span>
            <span className='text-[13px]'>Giới sao</span>
            <span className='text-[13px]'>Phim</span>
            <span className='text-[13px]'>Nhạc</span>
            <span className='text-[13px]'>Thời trang</span>
            <span className='text-[13px]'>Sách</span>
          </div>
          <div className="flex flex-wrap h-[270px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Giải trí")
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

          <div className="w-[1008px] flex gap-[16px] items-end pl-[10px] ">
            <span className='text-[18px] font-bold underline decoration-1'>Sức khỏe</span>
            <span className='text-[13px]'>Tin Tức</span>
            <span className='text-[13px]'>Dinh dưỡng</span>
            <span className='text-[13px]'>Khỏe đẹp</span>
            <span className='text-[13px]'>Thời trang</span>
            <span className='text-[13px]'>Sách</span>
          </div>
          <div className="flex flex-wrap h-[270px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Giải trí")
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