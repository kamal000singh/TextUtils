import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleGreen = () => {
    props.toggleMode("success")
  }
  const handleRed = () => {
    props.toggleMode("danger")
  }
  const handleBlue = () => {
    props.toggleMode("primary")
  }
  const handleBlack = () => {
    props.toggleMode("dark")
  }

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
            <div className="form-check form-switch  me-4">
              <input className="form-check-input" type="checkbox" onClick={handleGreen} id="green" />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="green">Green Mode</label>
            </div>
            <div className="form-check form-switch me-4">
              <input className="form-check-input" type="checkbox" onClick={handleRed} id="red" />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="red">Red Mode</label>
            </div>
            <div className="form-check form-switch me-4">
              <input className="form-check-input" type="checkbox" onClick={handleBlue} id="blue" />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="blue">Blue Mode</label>
            </div>
            <div className="form-check form-switch me-5">
              <input className="form-check-input" type="checkbox" onClick={handleBlack} id="dark" />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="dark">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
