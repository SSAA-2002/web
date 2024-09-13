import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/visa_lounge-png.png";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOffcanvas = () => {
    const offcanvasNav = document.querySelector("#offcanvasNav");
    offcanvasNav.classList.toggle("show");
  };

  const navigate = useNavigate();

  return (
    <>
      {isMobile ? (
        <>
          <div className="row container-fluid">
            <div className="col">
              <div className="d-flex flex-row">
                <img
                  src={logo}
                  alt=""
                  srcset=""
                  style={{ height: "100px", width: "150px" }}
                />
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-row-reverse">
                <Button
                  variant="outline-dark"
                  className="mb-2 mt-4 btn-lg me-2"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasNav"
                  role="button"
                  onClick={toggleOffcanvas}
                  expand="lg"
                >
                  <span className="visually-hidden">T</span>
                  <i class="fa-solid fa-bars"></i>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNav"
            aria-labelledby="offcanvasNavLabel"
            style={{
              //   background:
              //     "linear-gradient(90.21deg, #4A2FBD -5.91%, #AA367C 111.58%)",
              //   padding: 0,
              margin: 0,
              overflow: "visible",
            }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close  text-reset bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              <Nav className="flex-column">
                <Nav.Link
                  // href="#"
                  className="text-dark"
                  onClick={() => navigate("/")}
                >
                 Home
                </Nav.Link>
                <Nav.Link
                  // href="#"
                  className="text-dark "
                  onClick={() => navigate("/visa")}
                >
                  Visa
                </Nav.Link>
                <Nav.Link
                  className="text-dark"
                  onClick={() => navigate("/attestation")}
                >
                  Attestation
                </Nav.Link>

                <Nav.Link
                  className="text-dark"
                  onClick={() => navigate("/passportservices")}
                >
                  Passport Services
                </Nav.Link>
                <Nav.Link
                  className="text-dark"
                  onClick={() => navigate("/insurance")}
                >
                  Insurance
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </>
      ) : (
        <Navbar
          expand="lg"
          className="mt-0 mb-0"
          style={{
            backgroundColor: "#E3F6FF",

            padding: 0,
            margin: 0,
          }}
        >
          <>
            <Navbar.Brand href="#">
              <motion.img
                //   variants={logovariants}
                initial="hidden"
                animate="visible"
                src={logo}
                alt="Logo"
                style={{ height: 100, width: 120, margin: 0, padding: 0 }}
                className="ms-5"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#"
                  className="text-dark ms-2 me-2 fs-5 font-monospace"
                  onClick={() => navigate("/")}
                >
                  <motion.div
                    //   variants={navbarvariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="hover"
                  >
                    Home
                  </motion.div>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-dark ms-2 me-2 fs-5 font-monospace"
                  onClick={() => navigate("/visa")}
                >
                  <motion.div
                    // variants={navbarvariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="hover"
                    transition={{ delay: 0.7 }}
                  >
                    Visa
                  </motion.div>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-dark ms-2 me-2 fs-5 font-monospace"
                  onClick={() => navigate("/attestation")}
                >
                  <motion.div
                    //  variants={navbarvariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="hover"
                    transition={{ delay: 1.2 }}
                  >
                    Attestation
                  </motion.div>
                </Nav.Link>

                <Nav.Link
                  href="#"
                  className="text-dark ms-2 me-2 fs-5 font-monospace"
                  onClick={() => navigate("/passportservices")}
                >
                  <motion.div
                    //  variants={navbarvariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="hover"
                    transition={{ delay: 1.7 }}
                  >
                    Passport Services
                  </motion.div>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-dark ms-2 me-2 fs-5 font-monospace"
                  onClick={() => navigate("/insurance")}
                >
                  <motion.div
                    //  variants={navbarvariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="hover"
                    transition={{ delay: 1.7 }}
                  >
                    Insurance{" "}
                  </motion.div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        </Navbar>
      )}
    </>
  );
}

export default Navigation;
