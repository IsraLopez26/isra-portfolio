import React from 'react'
import { motion } from 'framer-motion'
import { HomeSection, HomeContainer, HomeContent, HomeSocial, SocialIcon, HomeImg, HomeData, HomeTitle, HomeSubtitle, HomeDescription, HomeButton, HomeScroll, HomeScrollButton, HomeScrollName } from './HomeStyle'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaRegEnvelope } from 'react-icons/fa'
import { CgMouse } from 'react-icons/cg'
import { FiArrowDown } from 'react-icons/fi'
import '../../App.css'

const Home = () => {

  const svgVariants = {
    hidden: { rotate: -200 },
    visible: {
      rotate: 0,
      transition: { duration: 1.5 }
    }
  }
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <>
      <HomeSection className='section' id='home'>
        <HomeContainer className={`${'container'} ${'grid'}`}>
          <HomeContent className='grid'>

            <HomeSocial>
              <SocialIcon href='https://www.linkedin.com/in/israel-lopez-cruz/' target='_blank'>
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href='https://github.com/IsraLopez26' target='_blank'>
                <FaGithub />
              </SocialIcon>
              <SocialIcon href='https://www.instagram.com/isralopez.drums/' target='_blank'>
                <RiInstagramFill />
              </SocialIcon>
            </HomeSocial>

            <HomeImg>
              <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='home_blob' variants={svgVariants} initial='hidden' animate='visible'>
                <motion.path fill="#576EE0" d="M69.3,-25.3C75.9,-2,57.9,26.4,35.9,40.3C13.8,54.2,-12.3,53.6,-32,40.2C-51.6,26.8,-64.8,0.7,-58.4,-22.2C-52,-45.2,-26,-65,2.7,-65.8C31.3,-66.7,62.6,-48.6,69.3,-25.3Z" transform="translate(80 80)" variants={pathVariants} />
              </motion.svg>
            </HomeImg>

            <HomeData>
              <HomeTitle>Hi, my name is Isra</HomeTitle>
              <HomeSubtitle>Frontend Developer</HomeSubtitle>
              <HomeDescription>I am a purposeful engineer, passionate about Web Design.</HomeDescription>
              <HomeButton href='#contact' className={`${'button'} ${'button--flex'}`}>
                Contact Me<FaRegEnvelope className='button_icon' />
              </HomeButton>
            </HomeData>

          </HomeContent>

          <HomeScroll>
            <HomeScrollButton href='#about' className='button--flex'>
              <CgMouse className='home_scroll-mouse' />
              <HomeScrollName>
                Scroll Down
              </HomeScrollName>
              <FiArrowDown className='home_scroll-arrow' />
            </HomeScrollButton>
          </HomeScroll>

        </HomeContainer>
      </HomeSection>
    </>
  )
}

export default Home
