import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const  [menu,setmenu] = useState("Home");
  const menuRef= useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#Home'><p onClick={()=>setmenu("Home")}>Home</p></AnchorLink>{menu==="Home"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#About'><p onClick={()=>setmenu("About")}>About Me</p></AnchorLink>{menu==="About"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Services'><p onClick={()=>setmenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Work'><p onClick={()=>setmenu("Portfolio")}>Portfolio</p></AnchorLink>{menu==="Portfolio"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setmenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img src={underline} alt="" />:<></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
