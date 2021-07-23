import styled from "styled-components";
// import '../../App.css'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0,0,0,.15);
  @media screen and (min-width:768px){
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  }
  @media screen and (min-width:1024px){
    padding: 0;
  }
`

export const NavContainer = styled.nav`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width:768px){
    height: 4.5rem;
    column-gap: 1rem;
  }
`

export const Logo = styled.a`
  color: var(--title-color);
  /* color: ${({ darktheme }) => darktheme ? 'var(--title-color-DT);' : 'var(--title-color);'} */
  font-weight: var(--font-medium);

  &:hover{
    color: var(--first-color);
    cursor: pointer;
  }
`
export const NavMenu = styled.div`

@media screen and (max-width:350px){
  padding: 2rem .25rem 4rem;
}

  @media screen and (max-width:767px){
    position: fixed;
    bottom: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-100%'};
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0,0,0,.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.5s ;
  }
  @media screen and (min-width:768px){
    margin-left: auto;
  }

`
export const NavUl = styled.ul`
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;

  @media screen and (max-width:350px){
    column-gap: 0;
  }
  @media screen and (min-width:768px){
    display: flex;
    column-gap: 2rem;
  }
`
export const NavItem = styled.li`
  

`
export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color);
  /* color: ${({ darktheme }) => darktheme ? 'var(--title-color-DT);' : 'var(--title-color);'} */
  font-weight: var(--font-medium);

  &:hover{
    color: var(--first-color);
  }

`

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
`
export const NavToogle = styled.div`
  color: var(--title-color);
  font-weight: var(--font-medium);
  font-size: 1.6rem;
  cursor: pointer;
  margin-top: 7px;
  &:hover{
    color: var(--first-color);
  }

  @media screen and (min-width:768px){
    display: none;
  }
`