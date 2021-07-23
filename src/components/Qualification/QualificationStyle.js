import styled from "styled-components";
import '../../App.css'

export const QualiSection = styled.section`

`
export const QualiTitle = styled.h2`

`
export const QualiSubtitle = styled.span`

`
export const QualiContainer = styled.div`

`
export const QualiTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);
  @media screen and (min-width:768px){
    justify-content: center;
  }
`
export const QualiButtonE = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  color: ${({ showEducation }) => showEducation ? 'var(--first-color)' : ''};
  &:hover{
    color: var(--first-color);
  }
  @media screen and (min-width:768px){
    margin: 0 var(--mb-2);
  }


`
export const QualiButtonW = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  color: ${({ showWork }) => showWork ? 'var(--first-color)' : ''};
  &:hover{
    color: var(--first-color);
  }
  @media screen and (min-width:768px){
    margin: 0 var(--mb-2);
  }

`
export const QualiSections = styled.div`
  @media screen and (min-width:568px){
    display: grid;
    grid-template-columns: .6fr;
    justify-content: center;
  }
  @media screen and (min-width:768px){
    grid-template-columns: .5fr;
  }
`
export const QualiContent1 = styled.div`
  display: ${({ showEducation }) => showEducation ? '' : 'none'};
`
export const QualiContent2 = styled.div`
  display: ${({ showWork }) => showWork ? '' : 'none'};

`
export const QualiData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`
export const QualiTitleH3 = styled.h3`
font-size: var(--normal-font-size);
font-weight: var(--font-medium);
`
export const QualiSubtitleSpan = styled.span`
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-0-5);
`
export const QualiCalendar = styled.div`
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
`
export const QualiRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--first-color);
  border-radius: 50%;
`
export const QualiLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--first-color);
  transform: translate(6px,-7px);
`