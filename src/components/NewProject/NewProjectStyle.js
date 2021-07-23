import styled from "styled-components";
import '../../App.css'

export const ProjectSection = styled.section`
text-align: center;
@media screen and (min-width:768px){
    text-align: initial;
  }
`
export const ProjectBG = styled.div`
  background-color: var(--first-color-second);
  padding-top: 3rem;

  @media screen and (min-width:768px){
    background:none;
  }

`
export const ProjectContainer = styled.div`
  @media screen and (min-width:568px){
    grid-template-columns: repeat(2,1fr);
    padding-bottom: 4rem;
  }
  @media screen and (min-width:768px){
    background-color:var(--first-color-second);
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
    padding-bottom: 4rem;
  }
`
export const ProjectData = styled.div`
  @media screen and (min-width:768px){
    padding-top: .8rem;
  }
`
export const ProjectTitle = styled.h2`
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-0-75);
  color: #FFF;
`
export const ProjectDescription = styled.p`
  margin-bottom: var(--mb-1-5);
    color: #FFF;

`
export const ProjectButton = styled.a`

`
export const ProjectImg = styled.img`
  width: 232px;
  justify-self: center;
  @media screen and (max-width:350px){
    width: 200px;
  }
  @media screen and (min-width:768px){
    width: 280px;
  }
`
