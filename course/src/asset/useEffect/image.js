import { useEffect, useState } from "react";
import Index from "../../components/useEffect/image";
const Image = () => {
  // khởi tạo giá trị true false
  const [show, setShow] = useState(false);
  // khởi tạo giá trị ảnh
  const [avata, setAvata] = useState();

  // hành động thực hiện chức năng ẩn và hiện
  const handlerClickAction = () => {
    setShow(!show);
  };

  // hành động khi đổi ảnh thì sẽ xóa dữ liệu của ảnh cũ
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avata);
    };
  }, [avata]);

  // thực hiện chức năng lấy ảnh và gắn giá trị cho ảnh và trả về giá trị ảnh trong thẻ input
  const getImage = (e) => {
    // lấy giá trị ảnh được chọn
    const showImage = URL.createObjectURL(e.target.files[0]);
    // gắn giá trị ảnh chọn
    setAvata(showImage);
    console.log(e.target.value);
    e.target.value = null;
  };

  return (
    <div className="App">
      {/* chức năng ẩn hiện hành động */}
      <button onClick={handlerClickAction}>Action</button>

      {/* truyền và lấy giá trị ảnh tử component con */}
      {show && <Index image={getImage} avata={avata} />}
    </div>
  );
};

export default Image;
