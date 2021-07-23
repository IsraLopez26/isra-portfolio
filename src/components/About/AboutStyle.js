import styled from "styled-components";
import '../../App.css'

export const AboutSection = styled.section`

`
export const AboutSectionTitle = styled.h2`

`
export const AboutSectionSubtitle = styled.span`

`

export const AboutContainer = styled.div`
  @media screen and (min-width:568px){
    grid-template-columns: repeat(2,1fr);
  }
  @media screen and (min-width:768px){
    column-gap: 5rem;
  }
`
export const AboutImg = styled.img`
  width: 150px;
  border-radius: .5rem;
  justify-self: center;
  align-self: center;
  @media screen and (min-width:768px){
    width: 360px;
  }
`
export const AboutData = styled.div`

`
export const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: var(--mb-2-5);
  @media screen and (min-width:768px){
    text-align: initial;
  }
`
export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);
  @media screen and (min-width:768px){
    justify-content: space-between;
  }
`
export const AboutInfoTitle = styled.span`
  display: block;
  text-align: center;
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold) ;
  color: var(--title-color);
`
export const AboutInfoName = styled.span`
  font-size: var(--smaller-font-size);
  display: block;
  text-align: center;

`
export const AboutButtons = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width:768px){
    justify-content: initial;
  }
`
export const AboutButton = styled.a`

`