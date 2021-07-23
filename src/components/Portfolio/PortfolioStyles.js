import styled from "styled-components";
import '../../App.css'

export const PortfolioSection = styled.section`
`
export const PortfolioSectionTitle = styled.h2`

`
export const PortfolioSectionSubtitle = styled.span`

`

export const PortfolioContent = styled.div`
  padding: 1rem 2.5rem;
  @media screen and (min-width:568px){
    grid-template-columns: repeat(2,1fr);
  }
  @media screen and (min-width:768px){
    align-items: center;
  }
`
export const PortfolioImg = styled.img`
  width: 265px;
  border-radius: .5rem;
  justify-self: center;
  background-color: #FFF;
  @media screen and (min-width:768px){
    width: 310px;
  }
`
export const PortfolioData = styled.div`

`
export const PortfolioContainer = styled.div`
`
export const PortfolioTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
`
export const PortfolioDescription = styled.p`
  margin-bottom: var(--mb-0-75);
`
export const PortfolioButton = styled.a`
  
`