

function App() {
  let modify
  if (0.1+0.2 === 0.3) {
    modify = (
      <div>{0.1+0.2}</div>
    )
  } else (
    modify = (
      <div>{0.1+}</div>
    )
  )
    

  return (
    <div className="">

      <span className=" text-blue-600/100">
        {modify})
      </span>
      <p></p>
      <img
        src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg"
        alt="stelse"
        width="500"
        height="600"

      />
      <a href="https://stechvn.org">Liên kết tới website tìm ở đây</a>
    </div>
  );
}

export default App;
