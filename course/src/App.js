import { Routes, Route, Link } from "react-router-dom";

import MyContextProvider from "./asset/useContext/useContext";
import TodoProvider from "./asset/Context_Reducer/store/provider";
import Page1 from "./asset/useContext/page_1";
import Image from "./asset/useEffect/image";
import Todo from "./asset/useReducer/todo";
import TodoUseReducerUseContext from "./asset/Context_Reducer";

// cách import css
// import "./App.css";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/Page1">Page1</Link>

      <MyContextProvider>
        <Routes>
          {/* thực hành sử dụng useEffect hiển thị hình ảnh */}
          <Route path="/" element={<Image />} />

          {/* thực hành chức nằng useReducer với ứng dụng todo list */}
          <Route path="/todo" element={<Todo />} />

          {/* thực hành chức năng useContext  */}
          <Route path="/Page1" element={<Page1 />} />
        </Routes>
      </MyContextProvider>

      {/* /* thực hành chức nằng useContext và Reducer  * */}
      <TodoProvider>
        <TodoUseReducerUseContext />
      </TodoProvider>
    </>
  );
}

export default App;
