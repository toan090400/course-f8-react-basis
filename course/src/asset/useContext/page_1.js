// Context cung cấp một cách để truyền dữ liệu qua cây component
// mà không cần phải truyền props một cách thủ công qua từng cấp độ

import MyContext from "./context";
import Page2 from "./page_2";
import { useContext } from "react";

// Page1 => Page2 => Page 3

const Page1 = () => {
  const value = useContext(MyContext);

  return (
    <div className="App">
      <button onClick={() => value.handlerChange(value.theme)}>Change</button>
      <h3>Page 1: {value.theme}</h3>
      <Page2 />
    </div>
  );
};
export default Page1;
