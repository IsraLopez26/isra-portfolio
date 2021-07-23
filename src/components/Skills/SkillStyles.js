import styled from "styled-components";

import '../../App.css'

export const SkillsSection = styled.section`

`
export const SectionTitle = styled.h2`

`
export const SkillsSectionSubtitle = styled.span`

`
export const SkillsContainer = styled.div`
  row-gap: 0;
  /* @media screen and (min-width:568px){
    width: 80%;
  } */
    @media screen and (min-width:768px){
    width: 70%;
  }
`
export const SkillsContent = styled.div`

`
export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`
export const SkillsTitle = styled.h1`
  font-size: var(--h3-font-size);

`
export const SkillsSubtitle = styled.span`
  font-size: var(--small-fot-size);
  color: var(--text-color-light);
`
export const SkillsListGridFront = styled.div`
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  display: ${({ displayFront }) => displayFront ? '' : 'none'};
  /* transition: all .3s ease-in-out; */
  margin-bottom: 2rem;
`


export const SkillsListGridBack = styled.div`
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  display: ${({ displayBack }) => displayBack ? '' : 'none'};

  margin-bottom: 2rem;
`
export const SkillsData = styled.div`
  margin-top: 2rem;
`
export const SkillsTitleDiv = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom: var(--mb-1-5);
`
export const SkillsName = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
`
export const SkillsNumber = styled.span`

`
export const SkillsBar = styled.div`
  height: 5px;
  border-radius: .25rem;
  background-color: var(--first-color-lighter);
`
export const SkillsPercentage = styled.span`
  height: 5px;
  border-radius: .25rem;
  display: block;
  background-color: var(--first-color);
`