import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import Menuitems from "../data/menu.json";

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
            <Image
              className="img-fluid"
              src="/images/logo.svg"
              layout="intrinsic"
              placeholder="blur"
              blurDataURL={imgblurDataURL}
              width={100}
              height={69}
              alt="North by Northeast Journeys"
            />
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
                if (item.children) {
                  return (
                    <NavDropdown className="text-uppercase" title={item.name} id="basic-nav-dropdown">
                      {item.children.map((item, index) => (
                        <li key={index}>
                          <Link href={item.URL}>
                            <a
                              className="dropdown-item text-uppercase"
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
                return (
                  <li className="nav-item text-uppercase" key={index}>
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
              })}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
