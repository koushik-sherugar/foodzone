import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="banner "
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
        }}
      >
        <div className="banner-content">
          <div className="banner-text">
            <h3>Home Delivery</h3>
            <h1>
              <span className="text-color"> FOOD </span> ZONE
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              accusamus sunt eius expedita iure maxime!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
