import MenuListItem from "../menuListItem/MenuListItem";
import s from "./style.module.css";
const MenuList = ({ onclickDifficulty, difficulty }) => {
  const difficulties = ["Low", "Medium", "Hight", "Insane"];
  return (
    <div className={`${s.container}`}>
      {difficulties.map((diff) => {
        return (
          <MenuListItem
            difficulty={diff}
            clickDifficulty={onclickDifficulty}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
