import React from "react";
import "./brand.css";
import logo from "../../../Assets/images/AnnapurnaCafeLogoLarge.png";

const brand = (props) => {
  let vclass = " ";
  if (props.show) {
    vclass = "show";
  }
  let all_class = ["brand"];
  all_class.push(vclass);
  return (
    <div className={all_class.join(" ")}>
      <p className="name">Annapurna Cafe</p>
      <div className="image-container">
        <img src={logo} alt="Company Logo" />
      </div>
      <p className="lastTitle">Tibetan and Nepalese Kitchen</p>
    </div>
  );
};

export default brand;
