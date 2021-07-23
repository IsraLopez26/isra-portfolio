import styled from "styled-components";
import '../../App.css'

export const FooterSection = styled.footer`
  /* padding-top: 2rem; */
`
export const FooterBg = styled.div`
  background-color: var(--first-color-second);
  padding: 2rem 0 3rem;
  @media screen and (min-width:768px){
    padding: 3rem 0 3.5rem;
  }
`
export const FooterContainer = styled.div`
  row-gap: 3.5rem;
  @media screen and (max-width:568px){
    margin-bottom: 1rem
  }
  @media screen and (min-width:568px){
    grid-template-columns: repeat(2,1fr);
    margin-bottom: 1rem
  }
  @media screen and (min-width:768px){
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width:1024px){
    padding: 0;
  }
`
export const FooterTitle = styled.h1`
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-25);
  color: #FFF;
`
export const FooterSubtitle = styled.span`
  font-size: var(--small-font-size);
  color: #FFF;
`
export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  @media screen and (min-width:768px){
    flex-direction: row;
    column-gap: 2rem;
  }

`
export const LinkItem = styled.li`

`
export const FooterLink = styled.a`
  color: #FFF;
  &:hover{
    color: var(--first-color-lighter);
  }
`
export const FooterSocials = styled.div`
@media screen and (min-width:768px){
    justify-self: flex-end;
  }
`
export const FooterSocial = styled.a`
  color: #FFF;
  font-size: 1.25rem;
  margin-right: var(--mb-1-5);
  &:hover{
    color:var(--first-color-lighter);
  }
`
export const FooterCopy = styled.p`
  font-size: var(--smaller-font-size);
  text-align: center;
  color: var(--text-color-light);
  margin-top: var(--mb-3);
  @media screen and (min-width:768px){
    margin-top: 4.5rem;
  }
`