import styled from "styled-components";
import '../../App.css'

export const ScrollUp = styled.a`
  position: fixed;
  right: 1rem;
  /* bottom: 5rem; */
  /* bottom: -20%; */
  bottom:${({ showScrollUp }) => showScrollUp ? '5rem' : '-20%'};
  background-color: var(--first-color);
  opacity: .8;
  padding: 0 .3rem;
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .8s;

  &:hover{
    background-color: var(--first-color-alt);
  }
`