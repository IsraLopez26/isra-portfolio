import React, { useState } from 'react'
import { HeaderContainer, NavContainer, Logo, NavMenu, NavUl, NavItem, NavLink, NavBtns, NavToogle } from './HeaderStyle'
import { BiHome } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { FiFileText } from 'react-icons/fi';
import { BiBriefcase } from 'react-icons/bi';
import { FaRegFileImage } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
// import '../../App.css'


const Header = ({ changeTheme, darktheme }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <HeaderContainer id='header'>
        <NavContainer className='container'>
          <Logo href='#home'>Isra</Logo>
          <NavMenu id='nav-menu' isMenuOpen={isMenuOpen}>
            <NavUl className='grid' onClick={toogleMenu}>

              <NavItem>
                <NavLink href='#home' >
                  <BiHome className='nav_icon' /> Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='#about'>
                  <AiOutlineUser className='nav_icon' /> About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='#skills'>
                  <FiFileText className='nav_icon' /> Skills
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='#services'>
                  <BiBriefcase className='nav_icon' /> Services
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='#portfolio'>
                  <FaRegFileImage className='nav_icon' /> Portfolio
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='#contact'>
                  <BiMessageSquareDetail className='nav_icon' /> Contact Me
                </NavLink>
              </NavItem>
            </NavUl>
            <FaTimes id='nav-close' className='nav_icon_close' onClick={toogleMenu} />
          </NavMenu>
          <NavBtns>

            {darktheme ? <FiSun className='changetheme_icon' onClick={changeTheme} /> : <FiMoon className='changetheme_icon' onClick={changeTheme} />}

            <NavToogle onClick={toogleMenu}>
              <AiOutlineAppstore />
            </NavToogle>
          </NavBtns>
        </NavContainer>
      </HeaderContainer>
    </>
  )
}

export default Header
