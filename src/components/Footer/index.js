import React from 'react'
import { FooterSection, FooterBg, FooterContainer, FooterTitle, FooterSubtitle, FooterLinks, LinkItem, FooterLink, FooterSocials, FooterSocial } from './FooterStyles'
import '../../App.css'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterBg>
          <FooterContainer className={`${'container'} ${'grid'}`}>

            <div>
              <FooterTitle>Isra</FooterTitle>
              <FooterSubtitle>Frontend developer</FooterSubtitle>
            </div>

            <FooterLinks>
              <LinkItem>
                <FooterLink href='#services'>
                  Services
                </FooterLink>
              </LinkItem>

              <LinkItem>
                <FooterLink href='#portfolio'>
                  Portfolio
                </FooterLink>
              </LinkItem>

              <LinkItem>
                <FooterLink href='#contact'>
                  Contactme
                </FooterLink>
              </LinkItem>
            </FooterLinks>

            <FooterSocials>

              <FooterSocial href='https://www.linkedin.com/in/israel-lopez-cruz/' target='_blank'>
                <FaLinkedin />
              </FooterSocial >
              <FooterSocial href='https://github.com/IsraLopez26' target='_blank'>
                <FaGithub />
              </FooterSocial>
              <FooterSocial href='https://www.instagram.com/isralopez.drums/' target='_blank'>
                <FaInstagram />
              </FooterSocial>
            </FooterSocials>

          </FooterContainer>

          {/* <FooterCopy>
            All right reserved. 2021.
          </FooterCopy> */}
        </FooterBg>
      </FooterSection>
    </>
  )
}

export default Footer
