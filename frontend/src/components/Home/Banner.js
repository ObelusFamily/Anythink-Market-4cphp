import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleBar = (ev) => {
    setIsActive((current) => !current);
  };

  const changeTitle = (ev) => {
    ev.preventDefault();
    const title = ev.target.value.length > 2 ? ev.target.value : "";

    props.onSearchInput(
      title,
      (page) => agent.Items.byTitle(title, page),
      agent.Items.byTitle(title)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">
            A place to <span onClick={toggleBar}>get</span>
          </span>
          <div
            id="search-bar"
            style={{
              position: "relative",
              width: "40%",
              display: isActive ? "inline-block" : "none",
              marginLeft: "1em",
              marginRight: "1em",
            }}
          >
            <input
              id="search-box"
              className="form-control form-control-lg"
              type="text"
              placeholder="What is it that you truly desire?"
              onChange={changeTitle}
            />
            <i
              class="ion-search"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "lightgray",
                transform: "translate(-65%, 25%)",
                scale: "2",
              }}
            />
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
