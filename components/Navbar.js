import React from 'react'
import Link from 'next/link'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TrimLinker</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About</Link></li>
      </ul>
      <Link href="/shorten" className="nav-btn">Try Now</Link>
    </nav>
  )
}
export default Navbar