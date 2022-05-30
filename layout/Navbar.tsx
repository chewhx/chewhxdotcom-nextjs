import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "../lib/useMediaQuery";
import { Button, Offcanvas } from "react-bootstrap";
import { BsList } from "react-icons/bs";

const navs = [
  { to: "/", label: "chewhx.com" },
  { to: "/about", label: "/ about" },
  { to: "/project", label: "/ project" },
  { to: "/scribbles", label: "/ scribbles" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const [show, setShow] = React.useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 576px)");
  return (
    <nav
      className="container mx-auto py-5 px-5 px-lg-0"
      style={{ maxWidth: "900px" }}
    >
      {matches ? (
        <ul className="nav nav-pills mx-auto">
          {navs.map(({ label, to }) => (
            <li className="nav-item" key={to}>
              <Link href={to}>
                <a
                  className={clsx({
                    "nav-link": true,
                    "me-4": true,
                    active:
                      to === "/" ? pathname === to : pathname.startsWith(to),
                  })}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul className="nav nav-pills mx-auto">
            <div className="nav-item me-4">
              <Button variant="outline-primary" onClick={() => setShow(true)}>
                <BsList />
              </Button>
            </div>
            {navs.slice(0, 1).map(({ label, to }) => (
              <li className="nav-item" key={to}>
                <Link href={to}>
                  <a
                    className={clsx({
                      "nav-link": true,
                      "me-4": true,
                      active: true,
                    })}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Offcanvas show={show} onHide={() => setShow(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>chewhx.com</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="nav nav-pills mx-auto flex-column">
                {navs.slice(1).map(({ label, to }) => (
                  <li
                    className="nav-item"
                    key={to}
                    onClick={() => setShow(false)}
                  >
                    <Link href={to}>
                      <a
                        className={clsx({
                          "nav-link": true,
                          "py-3": true,
                          "my-2": true,
                          active:
                            to === "/"
                              ? pathname === to
                              : pathname.startsWith(to),
                        })}
                      >
                        {label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </nav>
  );
};

export default Navbar;
