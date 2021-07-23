import styled from "styled-components";
import '../../App.css'

export const HomeSection = styled.section`

`
export const HomeContainer = styled.div`
  gap: 1rem;
  @media screen and (min-width:768px){
    row-gap: 5rem;
  }
`
export const HomeContent = styled.div`
  grid-template-columns: .5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:350px){
    grid-template-columns: .25fr 3fr;
  }
  @media screen and (min-width:568px){
    grid-template-columns: max-content 1fr 1fr;
  }
  @media screen and (min-width:768px){
    padding-top: 5.5rem;
    column-gap: 2rem;
  }
  

`
export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
  @media screen and (min-width:1024px){
    transform: translateX(-6rem);
  }
`
export const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: var(--first-color);

  &:hover{
    color: var(--first-color-alt);
  }
`
export const HomeImg = styled.div`
  @media screen and (min-width:568px){
    order: 1;
    justify-self: center;
    
  }
  @media screen and (min-width:568px){
    order: 1;
    justify-self: center;
  }
`
export const HomeData = styled.div`
  grid-column: 1/3;
  @media screen and (min-width:568px){
    grid-column: initial;
  }
`
export const HomeTitle = styled.h1`
  font-size: var(--big-font-size);
`
export const HomeSubtitle = styled.h3`
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-75);

`
export const HomeDescription = styled.p`
  margin-bottom: var(--mb-2);
`
export const HomeButton = styled.a`

`
export const HomeScroll = styled.div`
  display: none;
  @media screen and (min-width:768px){
    display: block;
  }
`
export const HomeScrollButton = styled.a`
  color:var(--first-color);
  transition: .3s;

  &:hover{
    transform: translateY(.25rem);
  }
  @media screen and (min-width:768px){
    margin-left: 3rem;
  }
`
export const HomeScrollName = styled.span`
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-5);
  margin-left: var(--mb-0-5);
`