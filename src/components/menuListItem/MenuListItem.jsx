import { useState } from "react";
import s from "./style.module.css";

const MenuListItem = ({ difficulty, clickDifficulty, isSelected }) => {
  const [isHovered, setIsHover] = useState(false);
  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else if (isSelected) {
      return "#26baea";
    } else {
      return "#eff0ef";
    }
  };
  return (
    <div
      style={{
        background: getBackgroundColor()
      }}
      onClick={() => clickDifficulty(difficulty)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${s.container}`}>
      Set to : {difficulty}
    </div>
  );
};

export default MenuListItem;
