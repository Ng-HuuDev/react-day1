import React from "react";

export default function Header() {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-light bg-dark">
        <div className=" container">
          <a className="text-light navbar-brand" href="#">
            Navbar
          </a>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="text-light nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className=" nav-item">
                <a className=" text-light nav-link" href="#">
                  Link 1
                </a>
              </li>
              <li className="nav-item">
                <a className="text-light nav-link" href="#">
                  Link 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
