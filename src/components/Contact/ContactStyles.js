import styled from "styled-components";
import '../../App.css'

export const ContactSection = styled.section`

`
export const ContactSectionTitle = styled.h2`

`
export const ContactSectionSubtitle = styled.span`
  row-gap: 3rem;
`
export const ContactContainer = styled.span`
  @media screen and (min-width:568px){
    grid-template-columns: repeat(2,1fr);
  }
`
export const ContactInformation = styled.span`
  display: flex;
  margin-bottom:var(--mb-2);
`
export const ContactTitle = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
`
export const ContactSubtitle = styled.span`
  font-size: var(--small-font-size);
  color: var(--text-color-light);
`
export const ContactForm = styled.form`

@media screen and (min-width:1024px){
  width: 460px;
}

`
export const ContactInputs = styled.div`
  @media screen and (min-width:1024px){
    grid-template-columns: repeat(2,1fr);
}
`
export const ContactContent = styled.div`
  background-color: var(--input-color);
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
`
export const ContactLabel = styled.label`
  font-size: var(--smaller-font-size);
  color: var(--title-color);
`
export const ContactInput = styled.input`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`
export const ContactInputTextArea = styled.textarea`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`
export const FormButton = styled.button`
  cursor: pointer;
  border:none;
`
