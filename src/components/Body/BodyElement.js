import styled from "styled-components";
import '../../App.css'

export const Body = styled.div`
  /* margin: 0 0 var(--header-height) 0 ; */
  margin: 0;
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);

  @media screen and (min-width:768px){
    padding: 0 1rem;
    margin-bottom: 0;
  }
`