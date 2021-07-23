import React from 'react'
import { PortfolioSection, PortfolioSectionTitle, PortfolioSectionSubtitle, PortfolioContent, PortfolioImg, PortfolioData, PortfolioTitle, PortfolioDescription, PortfolioButton, PortfolioContainer } from './PortfolioStyles'
import '../../App.css'
import img1 from '../../images/plaza.png'
import img2 from '../../images/tres.png'
import { BsArrowRightShort } from 'react-icons/bs'


// ******* Swiper *********
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";
import "swiper/swiper-bundle.css"
// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

// ******* Swiper *********


const Portfolio = () => {
  return (
    <>
      <PortfolioSection className='section' id='portfolio'>
        <PortfolioSectionTitle className='section_title'>Portfolio</PortfolioSectionTitle>
        <PortfolioSectionSubtitle className='section_subtitle'>
          Most recent work
        </PortfolioSectionSubtitle>

        <PortfolioContainer className='container'>
          <div>

            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={false} navigation={true} className='container'  >
              <SwiperSlide>
                {/****** * PORTFOLIO 1 * *******/}
                <PortfolioContent className='grid'>
                  <PortfolioImg src={img1}></PortfolioImg>
                  <PortfolioData>
                    <PortfolioTitle>Plaza Aves Website</PortfolioTitle>
                    <PortfolioDescription>
                      Modern Website adaptable to all devices, implemented through React. Project for "Plaza Aves", a shopping mall near Mexico City.
                    </PortfolioDescription>
                    <PortfolioButton href='https://isralopez26.github.io/plaza-aves/' target='_blank' className={`${'button'} ${'button--flex'} ${'button--small'}`}>
                      Demo
                      <BsArrowRightShort className='button_icon_portfolio' />
                    </PortfolioButton>
                  </PortfolioData>
                </PortfolioContent>
                {/****** * PORTFOLIO 1 FINISH* *******/}

              </SwiperSlide>

              <SwiperSlide>
                {/****** * PORTFOLIO 2 * *******/}
                <PortfolioContent className='grid'>
                  <PortfolioImg src={img2}></PortfolioImg>
                  <PortfolioData>
                    <PortfolioTitle>Tres Sazones Web Application</PortfolioTitle>
                    <PortfolioDescription>
                      Work in progress.<br />Web Application for a local Restaurant with all CRUD methods, implemented through React.
                    </PortfolioDescription>
                    <PortfolioButton className={`${'button'} ${'button--flex'} ${'button--small'}`}>
                      Not available yet :(
                    </PortfolioButton>
                  </PortfolioData>
                </PortfolioContent>
                {/****** * PORTFOLIO 2 FINISH* *******/}
              </SwiperSlide>
            </Swiper>





          </div>


        </PortfolioContainer>

      </PortfolioSection>
    </>
  )
}

export default Portfolio
