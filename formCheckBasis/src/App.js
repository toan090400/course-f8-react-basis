import { useState } from "react";
const courses = [
  {
    id: 1,
    name: "html",
  },
  { id: 2, name: "css" },
  { id: 3, name: "react" },
];
function App() {
  const [check, setCheck] = useState();
  const handlerSubmit = () => {
    console.log(check);
  };
  return (
    <div className="App">
      {courses.map((value) => {
        return (
          <div key={value.id}>
            <input
              type="radio"
              //khi giá trị giống nhau thì bỏ check ||check 2 lần thì bỏ
              checked={check === value.id}
              // thiết lập giá trị của check
              onChange={() => setCheck(value.id)}
            />
            {value.name}
          </div>
        );
      })}
      <button onClick={handlerSubmit}>register</button>
    </div>
  );
}

function Checkbox() {
  const [check, setCheck] = useState([]);

  const handlerCheck = (id) => {
    setCheck((pre) => {
      // kiểm tra mới có tồn tại không có thì true không thì false
      const isCheck = check.includes(id);
      if (isCheck) {
        // kiểm tra nếu có tồn tại thì filter()
        // làm nhiệm vụ tìm ra thằng có rồi bỏ nó chỉ lấy những thằng khác
        // ví dụ mảng có 3 phần tử [1,2,3] tìm phần tử thứ 2  và bỏ nó trả về [1,3]

        return check.filter((item) => item !== id);
      } else {
        // nếu chưa tồn tại thì lấy mảng cũ thêm vào phần tử mới
        return [...pre, id];
      }
    });
  };
  const handlerSubmit = () => {
    console.log(check);
  };
  return (
    <div className="App">
      {courses.map((value) => {
        return (
          <div key={value.id}>
            <input
              type="checkbox"
              // kiểm tra mới có tồn tại không có thì true không thì false
              // check 2 lần thì bỏ
              checked={check.includes(value.id)}
              //chạy hàm và có giá trị id trong đó
              onChange={() => handlerCheck(value.id)}
            />
            {value.name}
          </div>
        );
      })}
      <button onClick={handlerSubmit}>register</button>
    </div>
  );
}

export default App;
