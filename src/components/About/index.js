import React from 'react'
import { AboutSection, AboutSectionTitle, AboutSectionSubtitle, AboutContainer, AboutImg, AboutData, AboutDescription, AboutInfo, AboutInfoTitle, AboutInfoName, AboutButtons, AboutButton } from './AboutStyle'
import { HiOutlineDownload } from 'react-icons/hi'
import img1 from '../../images/about.svg'
import cv from '../../images/IsraelLopezCV_.pdf'
import '../../App.css'

const About = () => {
  return (
    <>
      <AboutSection className='section' id='about'>
        <AboutSectionTitle className='section_title'>About Me</AboutSectionTitle>
        <AboutSectionSubtitle className='section_subtitle'>Get to know me</AboutSectionSubtitle>

        <AboutContainer className={`${'container'} ${'grid'}`}>
          <AboutImg src={img1} alt='' />
          <AboutData>
            <AboutDescription>
              Team Worker, Fast Learner, Frontend Developer, with great passion and joy for web technologies, delivering quality work.
            </AboutDescription>
            <AboutInfo>
              <div>
                <AboutInfoTitle>03+</AboutInfoTitle>
                <AboutInfoName>Years Professional<br />Experience </AboutInfoName>
              </div>

              <div>
                <AboutInfoTitle>05+</AboutInfoTitle>
                <AboutInfoName>College <br /> Awards </AboutInfoName>
              </div>

              <div>
                <AboutInfoTitle>03</AboutInfoTitle>
                <AboutInfoName>Companies <br /> Worked </AboutInfoName>
              </div>
            </AboutInfo>

            <AboutButtons>
              <AboutButton download='' href={cv} className={`${'button'} ${'button--flex'}`}>
                Download CV<HiOutlineDownload className='button_icon' />
              </AboutButton>
            </AboutButtons>

          </AboutData>
        </AboutContainer>

      </AboutSection>
    </>
  )
}

export default About
