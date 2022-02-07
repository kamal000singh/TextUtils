import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light" : "dark"} bg-${props.mode}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1>TextUtils</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            </ul>
            <div className="bg-success rounded mx-2 my-1" onClick={() => { props.toggleMode("success") }} style={{ height: '30px', width: '30px', cursor: 'pointer', float: 'left' }}></div>
            <div className="bg-danger rounded mx-2 my-1" onClick={() => { props.toggleMode("danger") }} style={{ height: '30px', width: '30px', cursor: 'pointer', float: 'left' }}></div>
            <div className="bg-primary rounded mx-2 my-1" onClick={() => { props.toggleMode("primary") }} style={{ height: '30px', width: '30px', cursor: 'pointer', float: 'left' }}></div>
            <div className="bg-warning rounded mx-2 my-1" onClick={() => { props.toggleMode("warning") }} style={{ height: '30px', width: '30px', cursor: 'pointer', float: 'left' }}></div>
            <div className="bg-light rounded mx-2 my-1" onClick={() => { props.toggleMode("light") }} style={{ height: '30px', width: '30px', cursor: 'pointer', float: 'left' }}></div>
            <div className="bg-dark rounded mx-2 my-1" onClick={() => { props.toggleMode("dark") }} style={{ height: '30px', width: '30px', cursor: 'pointer', float: 'left' }}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
