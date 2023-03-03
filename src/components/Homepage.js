import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import * as logoAnimation from "./hello.json";
import style from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/todolist");
  }
  return (
    <div className={style.container}>
      <Lottie
        animationData={logoAnimation}
        loop={true}
        style={{
          height: "300px",
          width: "300px",
          margin: "auto",
        }}
      />
      <h2>This is the app to create Todo</h2>
      <button type="button" onClick={handleClick} className={style.buttonStart}>
        Start here
      </button>
    </div>
  );
};
export default Homepage;
