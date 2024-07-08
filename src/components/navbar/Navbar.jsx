import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import under_img from '../../assets/nav_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import toggle_img from '../../assets/toggle.svg';
import menu_close from '../../assets/menuclose.svg';
import { useRef } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const menuRef=useRef();

   const openMenu=()=>{
    menuRef.current.style.right="0"
   }
   const closeMenu=()=>{
    menuRef.current.style.right="-350px"
   }
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <img src={toggle_img} onClick={openMenu} alt="" className='nav-mob-open'/>
      
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
        <li>
          <AnchorLink className='anchor-link' href="#home">
          <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={under_img} alt='' />}
        </li>
        <li>
        <AnchorLink className='anchor-link' offset={50} href="#about">
          <p onClick={() => setMenu('about')}>About Me</p>
        </AnchorLink>
          {menu === 'about' && <img src={under_img} alt='' />}
        </li>
        <li>
        <AnchorLink className='anchor-link' offset={50} href="#services">
          <p onClick={() => setMenu('services')}>Services</p>
        </AnchorLink>  
          {menu === 'services' && <img src={under_img} alt='' />}
        </li>
        <li>
        <AnchorLink className='anchor-link' offset={50} href="#work">  
          <p onClick={() => setMenu('work')}>Work</p>
        </AnchorLink>
          {menu === 'work' && <img src={under_img} alt='' />}
        </li>
        <li>
        <AnchorLink className='anchor-link' offset={50} href="#contact">
          <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>  
          {menu === 'contact' && <img src={under_img} alt='' />}
        </li>
      </ul>

      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
