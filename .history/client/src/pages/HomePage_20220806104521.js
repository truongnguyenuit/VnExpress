
import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
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
        <Col span={6}>
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
        <Col>
          
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