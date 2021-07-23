import React from 'react'
import emailjs from 'emailjs-com';

import { ContactSection, ContactSectionTitle, ContactSectionSubtitle, ContactContainer, ContactInformation, ContactTitle, ContactSubtitle, ContactForm, ContactInputs, ContactContent, ContactLabel, ContactInput, ContactInputTextArea, FormButton } from './ContactStyles'
import '../../App.css'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { BiSend } from 'react-icons/bi'

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_z44zqhq', 'template_x0v2e9f', e.target, 'user_JzuiIzrmFxWbNKkV5qrtH')
      .then((result) => {
        console.log(result.text);
        alert('Email sent!')
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }

  return (
    <>
      <ContactSection className='section' id='contact'>
        <ContactSectionTitle className='section_title'>Contact Me</ContactSectionTitle>
        <ContactSectionSubtitle className='section_subtitle'>
          Get in touch
        </ContactSectionSubtitle>

        <ContactContainer className={`${'container'} ${'grid'}`}>
          <div>
            <ContactInformation>
              <FiPhone className='contact_icon' />
              <div>
                <ContactTitle>
                  Call Me
                </ContactTitle>
                <ContactSubtitle>(+52) 5523147599</ContactSubtitle>
              </div>
            </ContactInformation>

            <ContactInformation>
              <FaRegEnvelope className='contact_icon' />
              <div>
                <ContactTitle>
                  Email
                </ContactTitle>
                <ContactSubtitle>isralop26@gmail.com</ContactSubtitle>
              </div>
            </ContactInformation>

            <ContactInformation>
              <FiMapPin className='contact_icon' />
              <div>
                <ContactTitle>
                  Location
                </ContactTitle>
                <ContactSubtitle>Mexico City</ContactSubtitle>
              </div>
            </ContactInformation>
          </div>

          <ContactForm onSubmit={sendEmail} className='grid'>
            <ContactInputs className='grid'>

              <ContactContent>
                <ContactLabel htmlFor='name' >
                  Name
                </ContactLabel>
                <ContactInput type='text' id='name' name="name" required />
              </ContactContent>

              <ContactContent>
                <ContactLabel htmlFor='email' >
                  Email
                </ContactLabel>
                <ContactInput type='email' id='name' name="email" required />
              </ContactContent>
            </ContactInputs>

            <ContactContent>
              <ContactLabel htmlFor='project' name="subject">
                Project/Subject
              </ContactLabel>
              <ContactInput type='text' id='project' name="subject" required />
            </ContactContent>

            <ContactContent>
              <ContactLabel htmlFor='message' >
                Message
              </ContactLabel>
              <ContactInputTextArea id='message' rows='7' name="message" required />
            </ContactContent>

            <div>
              <FormButton className={`${'button'} ${'button--flex'}`} type='submit'>Send Message
                <BiSend className='button_icon' />
              </FormButton>
            </div>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </>
  )
}

export default Contact
