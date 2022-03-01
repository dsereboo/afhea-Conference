import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/images/logo.png"



const Navbar=()=>{

    const [active, setActive]=useState(false)
    const handleShowMenu=()=>{
        setActive(!active)
    }

    return (
      <>
        <nav
          className="navbar is-fixed-top signal-navbar nav-bottom has-background-danger"
          aria-label="main navigation"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link href="/">
              <a className="navbar-item">
                <Image src={logo} height={100} width={543}  alt="signal logo" priority/>
              </a>
              </Link>
              <a
                className={active? "navbar-burger is-active":"navbar-burger"}
                role="button"
                aria-expanded="false"
                aria-label="menu"
                data-target="navbarSample"
                onClick={handleShowMenu}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarSample" className={active?"navbar-menu is-active":"navbar-menu"}>
              <div className="navbar-end">
               <Link href="/"><a className="navbar-item">Home</a></Link>
               <Link href="/services"><a className="navbar-item has-font-weight-bold">AfHEA 2022</a></Link>
               <Link href="/projects"><a className="navbar-item">Resources</a></Link>
               <Link href="/about"><a className="navbar-item">State of UHC</a></Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar