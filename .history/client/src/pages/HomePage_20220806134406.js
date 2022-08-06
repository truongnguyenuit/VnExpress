
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
          <div className="flex flex-wrap h-[275px] overflow-hidden">
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
          <div className="flex flex-wrap h-[290px] overflow-hidden">
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
          <div className="flex flex-wrap h-[300px] overflow-hidden">
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
            <span className='text-[13px]'>Các bệnh</span>
            <span className='text-[13px]'>Vaccine</span>
            <span className='text-[13px]'>Di chứng Covid</span>
            <span className='text-[13px]'>Di truyền</span>
          </div>
          <div className="flex flex-wrap h-[300px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Sức khỏe")
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
            <span className='text-[18px] font-bold underline decoration-1'>Đời sống</span>
            <span className='text-[13px]'>Bài học sống</span>
            <span className='text-[13px]'>Tổ ấm</span>
            <span className='text-[13px]'>Nhà</span>
            <span className='text-[13px]'>Tiêu dùng</span>

          </div>
          <div className="flex flex-wrap h-[300px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Đời sống")
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
            <span className='text-[18px] font-bold underline decoration-1'>Khoa học</span>
            <span className='text-[13px]'>Trong nước</span>
            <span className='text-[13px]'>Phát minh</span>
            <span className='text-[13px]'>Ứng dụng</span>
            <span className='text-[13px]'>Thế giới tự nhiên</span>

          </div>
          <div className="flex flex-wrap h-[310px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Khoa học")
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

      <Row className='pt-[5px]  flex justify-center'>
        <Col span={22}>
          <div className="w-[1008px] flex gap-[16px] items-end pl-[10px] ">
            <span className='text-[18px] font-bold underline decoration-1'>Thông tin doanh nghiệp</span>


          </div>
          <div className="flex flex-wrap h-[330px] overflow-hidden">
            {allPosts.map((item, index) => {
              if (item.category === "Doanh nghiệp")
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

      <Row className='pt-[5px] flex justify-center bg-white'>
        <Col span={3}>
          <div className='flex flex-col font-bold gap-[15px] text-[14px]'>
            <span className="">Trang chủ</span>
            <span className="">Video</span>
            <span className="">PodCasts</span>
            <span className="">Ảnh</span>
            <span className="">Infographics</span>
            <span className="">Mới nhất</span>
            <span className="">Xem nhiều</span>
            <span className="">Tin nóng</span>
          </div>
        </Col>
        <Col span={3}>
          <div className='flex flex-col gap-[15px] text-[14px]'>
            <span className="">Thời sự</span>
            <span className="">Góc nhìn</span>
            <span className="">Thế giới</span>
            <span className="">Kinh doanh</span>
            <span className="">giải trí</span>
          </div>
        </Col>
        <Col span={3}>
          <div className='flex flex-col gap-[15px] text-[14px]'>
            <span className="">Thể thao</span>
            <span className="">Pháp luật</span>
            <span className="">Sức khỏe</span>
            <span className="">Đời sồng</span>
            <span className="">Du lịch</span>
            <span className="">Giáo dục</span>

          </div>
        </Col>
        <Col span={3}>
          <div className='flex flex-col gap-[15px] text-[14px]'>
            <span className="">Khoa học</span>
            <span className="">Số hóa</span>
            <span className="">Xe</span>
            <span className="">Ý kiến</span>
            <span className="">Hài</span>
            <span className="">Tâm sự</span>
          </div>
        </Col>
        <Col span={3}>
          <div className='flex flex-col gap-[15px] text-[14px] '>
            <span className="">Rao vặt</span>
            <span className="">Starup</span>
            <span className="">Mua ảnh VnExpress</span>
            <span className="">Vhome</span>
            <span className="">Ebook</span>
            <span className="">Ework</span>
          </div>
        </Col>
        <Col span={6}>
          <div className='flex flex-col gap-[10px] text-[14px]'>
            <span className='text-slate-500'>Tải ứng dụng</span>
            <div>
              <Button>VnExpress</Button>
              <Button>International</Button>
            </div>
            <span className='text-slate-500'>Liên hệ</span>
            <div>
              <div className='flex gap-[50px]'>
                <span><i class="fa-solid fa-envelope text-gray-400 mr-[5px]"></i>Tòa soạn</span>
                <span><i class="fa-solid fa-rectangle-ad text-green-700  mr-[5px]"></i>Quảng cáo</span>
              </div>
              <span> <i class="fa-solid fa-address-card text-yellow-600 mr-[5px]"></i>Hợp tác bản quyền</span>
            </div>
            <span className='text-slate-500'>Đường dây nóng</span>
            <span className='font-bold text-[17px]'>083.888.0123 (Hà Nội)</span>
            <span className='font-bold text-[17px]'>082.233.3555 (Tp.Hồ Chí Minh)</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={22}>
        <div>
          <span>Báo điện tử</span>
        </div>
        <span></span>
        </Col>
      </Row>


    </div>

  )
}

export default HomePage