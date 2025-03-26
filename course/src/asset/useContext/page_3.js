import { useContext } from "react";
import MyContext from "./context";

const Page3 = () => {
  const value = useContext(MyContext);
  return (
    <div className="App">
      <h3>Page 3:{value.theme}</h3>
    </div>
  );
};
export default Page3;
