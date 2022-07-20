import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Menuitems from "../data/menu.json";
import { motion } from "framer-motion"

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      className="shadow-sm py-0 w-100"
      sticky="top"
      bg="white"
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Link href="/">
          <Navbar.Brand className="pt-1 pb-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type:"spring", ease: "easeOut", duration: 0.5, delay: 0.5 }}
            >
            <Image
              className="img-fluid"
              src="/images/logo.svg"
              layout="fixed"
              placeholder="blur"
              blurDataURL={imgblurDataURL}
              width="100"
              height="69"
              alt="North by Northeast Journeys"
            />
            </motion.div>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav className="mx-5">
            <ul className="navbar-nav">
              {Menuitems.menu.mainmenu.map((item, index) => {
                if (!item.children)
                  return (
                    <li className="nav-item text-uppercase text-center" key={index}>
                      <Link href={item.URL}>
                        <a
                          className="nav-link"
                          onClick={() => setExpanded(false)}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  );
                {
                  return (
                    <NavDropdown
                      className="text-uppercase text-center"
                      title={item.name}
                      id="basic-nav-dropdown"
                      key={index} 
                    >
                      {item.children.map((item, index) => (
                        <li key={index}>
                          <Link href={item.URL}>
                            <a
                              className="dropdown-item text-uppercase text-center"
                              onClick={() => setExpanded(false)}
                            >
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </NavDropdown>
                  );
                }
              })}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
