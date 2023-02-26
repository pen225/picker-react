// import { useState } from "react";
import { useState } from "react";
import DisplayDifficulty from "./components/displaydifficulty/DisplayDifficulty";
import MenuList from "./components/menuList/MenuList";
import s from "./style.module.css";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const updateDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };
  return (
    <div>
      <h1 className={s.title}>Select your react difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          onclickDifficulty={updateDifficulty}
          difficulty={difficulty}
        />
        <DisplayDifficulty difficulty={difficulty} />
      </div>
    </div>
  );
}

export default App;
