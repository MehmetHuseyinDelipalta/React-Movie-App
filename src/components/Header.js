import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">İzlenecekler</div>
          <ul className="nav-links">
            <li>İzlenenler</li>
            <li>
              <i className="fas fa-plus"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
