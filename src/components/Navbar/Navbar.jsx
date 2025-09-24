import React from "react";
import profileImg from "../../assets/img/profile.jpg";
import logoVasu from "../../assets/img/kaiadmin/logoVasu1.jpg";
import importedLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-panel">
      <div className="main-header">
        {/* Navbar Header */}
        <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
          <div className="container-fluid">
            {/* Search Bar */}
            <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button type="submit" className="btn btn-search pe-1">
                    <i className="fa fa-search search-icon"></i>
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search ..."
                  className="form-control"
                />
              </div>
            </nav>

            {/* Right Navbar */}
            <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
              {/* Example Notification Dropdown */}
              <li className="nav-item topbar-icon dropdown hidden-caret">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="notifDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell"></i>
                  <span className="notification">4</span>
                </a>
                <ul
                  className="dropdown-menu notif-box animated fadeIn"
                  aria-labelledby="notifDropdown"
                >
                  <li>
                    <div className="dropdown-title">
                      You have 4 new notifications
                    </div>
                  </li>
                  <li>
                    <div className="notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="/#">
                          <div className="notif-icon notif-primary">
                            <i className="fa fa-user-plus"></i>
                          </div>
                          <div className="notif-content">
                            <span className="block">New user registered</span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="/#">
                      See all notifications<i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </li>

              {/* User Dropdown */}
              <li className="nav-item topbar-user dropdown hidden-caret">
                <a
                  className="dropdown-toggle profile-pic"
                  data-bs-toggle="dropdown"
                  href="/#"
                  aria-expanded="false"
                >
                  <div className="avatar-sm">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <span className="profile-username">
                    <span className="op-7">Hi,</span>
                    <span className="fw-bold"> Hizrian </span>
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <div className="dropdown-user-scroll scrollbar-outer">
                    <li>
                      <div className="user-box">
                        <div className="avatar-lg">
                          <img
                            src={profileImg}
                            alt="profile"
                            className="avatar-img rounded"
                          />
                        </div>
                        <div className="u-text">
                          <h4>Hizrian</h4>
                          <p className="text-muted">hello@example.com</p>
                          <Link
                            to="/profile"
                            className="btn btn-xs btn-secondary btn-sm"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                      <Link className="dropdown-item" to="/balance">
                        My Balance
                      </Link>
                      <Link className="dropdown-item" to="/inbox">
                        Inbox
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/settings">
                        Account Setting
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/logout">
                        Logout
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {/* End Navbar */}
      </div>
    </div>
  );
};

export default Navbar;
