import styled from "styled-components";
import '../../App.css'

export const ServiceSection = styled.section`

`
export const SectionTitle = styled.h2`

`
export const SectionSubtitle = styled.span`

`
export const ServicesContainer = styled.div`
  gap: 1.5rem;
  grid-template-columns: repeat(2,1fr);
  margin-top: -2.2rem;

  @media screen and (max-width:350px){
    grid-template-columns: max-content;
    justify-content: center;
  }
  @media screen and (min-width:768px){
    grid-template-columns: repeat(2,218px);
    justify-content: center;

  }
    @media screen and (min-width:1024px){
    grid-template-columns: repeat(2,250px);
  }
`
export const ServiceContent = styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem .5rem 1.25rem 1.5rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: .3s;

  @media screen and (max-width:350px){
    padding-right: 3.5rem;
  }
  @media screen and (min-width:768px){
    padding: 6rem 0 2rem 2.5rem;
  }

  &:hover{
    box-shadow: 0 4px 8px rgba(0,0,0,.15);
  }
`
export const ServicesTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
`
export const ServicesButton = styled.span`
  cursor: pointer;
  font-size: var(--small-font-size);
`
export const ServicesModal1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  
  opacity: ${({ showModal1 }) => showModal1 ? '' : '0'};
  visibility: ${({ showModal1 }) => showModal1 ? '' : 'hidden'};

  @media screen and (max-width:350px){
    padding: 0 .5rem;
  }

  transition: .3s;
`

export const ServicesModal2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  opacity: ${({ showModal2 }) => showModal2 ? '' : '0'};
  visibility: ${({ showModal2 }) => showModal2 ? '' : 'hidden'};
  transition: .3s;
`
export const ServicesModalContent = styled.div`
  position: relative;
  background-color: var(--container-color);
  padding:1.5rem;
  border-radius: .5rem;
  @media screen and (min-width:768px){
    width: 450px;
  }

`
export const ServicesModalTitle = styled.h4`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
`
export const ServicesModalServices = styled.ul`
  row-gap: 1rem;
`
export const ServicesModalService = styled.li`
  display: flex;
`