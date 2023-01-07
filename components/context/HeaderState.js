import { useState } from "react";
import HeaderContext from "./HeaderContext";

const HeaderState = (props) => {
  const backgroundColor = {
    "background-color": "black",
  };
  const [slideIndex, setSlideIndex] = useState(0);
  const updateState = () => {};
  return (
    <HeaderContext.Provider value={{ slideIndex, setSlideIndex }}>
      {props.children}
    </HeaderContext.Provider>
  );
};
export default HeaderState;
