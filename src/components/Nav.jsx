import React from "react";
const Nav = () => {
  return (
    <React.Fragment>
      <div className="nav">
        <div className="contain">
          <div className="nav-items">
            <div className="logo">
              <h2>City Tours</h2>
            </div>
            <div className="links">
              <ul className="d-flex">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Tours</a>
                </li>
              </ul>
            </div>
            <div className="bread">
              <i className="fa fa-bars fa-lg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
