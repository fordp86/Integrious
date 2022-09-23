import React from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

import courseImg from "@/public/images/navbar.jpg";

const Navbar = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(`${baseApiUrl}/api/logo?populate=*`);
      setLogo(response.data);
      // console.log(response.data)
    };
    getLogo();
  }, []);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {logo && (
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src={logo.data.attributes.blackLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.blackLogo.data.attributes
                          .alternativeText
                      }
                    />
                  </a>
                </Link>
              )}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a className="dropdown-toggle nav-link">Features</a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <ul className="megamenu-submenu">
                                <li className="nav-item">
                                  <Link
                                    href="/services/services"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      Services Style 01
                                    </a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/services/zero-configuration"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Services Details</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/portfolio/portfolio-1"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      Classic Two Column
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <ul className="megamenu-submenu">
                                <li className="nav-item">
                                  <Link
                                    href="/features"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Features</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link href="/team" activeClassName="active">
                                    <a className="nav-link">Team</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/pricing"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Pricing</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <ul className="megamenu-submenu">
                                <li className="nav-item">
                                  <Link
                                    href="/blogs/blog-grid"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Blog Grid</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/blogs/blog-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      Blog Left Sidebar
                                    </a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/blogs/blog-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      Blog Right Sidebar
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <Link href="/courses" activeClassName="active">
                                <a className="d-block p-0">
                                  <Image src={courseImg} alt="image" />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a className="dropdown-toggle nav-link">Pages</a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-us" activeClassName="active">
                          <a className="nav-link">About Us</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/testimonials" activeClassName="active">
                          <a className="nav-link">Testimonials</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/features" activeClassName="active">
                          <a className="nav-link">Features</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="dropdown-toggle nav-link">
                          Services
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services/services"
                              activeClassName="active"
                            >
                              <a className="nav-link">Services Style 01</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/services/simple-dashboard"
                              activeClassName="active"
                            >
                              <a className="nav-link">Services Details</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/authentication" activeClassName="active">
                          <a className="nav-link">Login/Register</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/lost-password" activeClassName="active">
                          <a className="nav-link">Forgot Password</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/privacy-policy" activeClassName="active">
                          <a className="nav-link">Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/terms-conditions" activeClassName="active">
                          <a className="nav-link">Terms & Conditions</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error Page</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/thank-you" activeClassName="active">
                          <a className="nav-link">Thank You</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Portfolio
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/portfolio/portfolio-1"
                          activeClassName="active"
                        >
                          <a className="nav-link">Classic Two Column</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/portfolio/business-startup"
                          activeClassName="active"
                        >
                          <a className="nav-link">Portfolio Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/services"
                          activeClassName="active"
                        >
                          <a className="nav-link">Services Style 01</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/information-retrieval"
                          activeClassName="active"
                        >
                          <a className="nav-link">Services Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blogs/blog-grid" activeClassName="active">
                          <a className="nav-link">Blog Grid</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blogs/blog-left-sidebar"
                          activeClassName="active"
                        >
                          <a className="nav-link">Blog Left Sidebar</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blogs/blog-right-sidebar"
                          activeClassName="active"
                        >
                          <a className="nav-link">Blog Right Sidebar</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/pricing">
                  <a className="btn-style-one blue-dark-color">
                    Request A Demo <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
