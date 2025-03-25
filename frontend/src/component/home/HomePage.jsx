import React from "react";

const HomePage = () => {
  return (
    <div className="home">
      {/* HEADER / BANNER ROOM SECTION */}
      <section>
        <header className="header-banner">
          <img
            src="./assests/images/hotel.avif"
            alt="ManuX Room Service"
            className="header-image"
          />
          <div className="overlay"></div>
          <div className="animated-texts overlay-content">
            <h1>
              Welcome to <span className="phegon-color">ManuX Rooms</span>
            </h1>
            <br />
          </div>
        </header>
      </section>

      {/* AVAILABLE ROOMS SECTION */}
      <section></section>
    </div>
  );
};

export default HomePage;
