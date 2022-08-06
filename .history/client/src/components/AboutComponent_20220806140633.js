import React from "react";

const Categories = ["Life", "Music", "Sport", "Style", "Tech", "Cinema"];
const AboutComponent = () => {
  return (
    <div className="flex flex-col h-[536px] items-center bg-white drop-shadow-md w-[350px] py-8 rounded-[6px] overflow-hidden">
      <div className="w-[298px] h-[1px] bg-gray-500"></div>
      <div>
        <h1>Quảng cáo ở đây!!!</h1>
      </div>
      <div className="w-[298px] h-[1px] bg-gray-500"></div>
      
      <div className="w-[298px] mb-[20px] mt-[20px]">
        <p className="font-serif">
          Để thuê quảng cáo, vui lòng liên hệ Trường Nguyễn, 0586455838
        </p>
      </div>

      <div className="w-[214px] h-[1px] bg-gray-500"></div>
      <div>
        <p className="my-1 font-medium">Thể loại</p>
      </div>
      <div className="w-[214px] h-[1px] bg-gray-500"></div>

      <div className="w-[255px] h-[100px]">
        <ul className="pl-[40px] my-2 w-full h-full flex flex-wrap">
          {Categories.map((c, index) => {
            return (
              <li key={index} className="w-[107px] h-[18px] font-serif">
                {c}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[214px] h-[0.5px] bg-gray-500"></div>
      <p className="my-1 font-medium">Liên hệ chúng tôi</p>

      <div className="w-[214px] h-[0.5px] bg-gray-500"></div>
      <div className="w-[250px] flex justify-center mt-4">
        <div className="mx-1 text-[16px]">
          <i className="fa-brands fa-facebook-square cursor-pointer"></i>
        </div>
        <div className="mx-1 text-[16px]">
          <i className="fa-brands fa-instagram-square cursor-pointer"></i>
        </div>
        <div className="mx-1 text-[16px]">
          <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
        </div>
        <div className="mx-1 text-[16px]">
          <i className="fa-brands fa-twitter-square cursor-pointer"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
