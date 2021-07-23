import React, { useState } from 'react'
import { ServiceSection, SectionTitle, SectionSubtitle, ServicesContainer, ServiceContent, ServicesTitle, ServicesButton, ServicesModal1, ServicesModal2, ServicesModalContent, ServicesModalTitle, ServicesModalServices, ServicesModalService } from './ServiceStyles'
import { BsPeopleFill } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'
import '../../App.css'

const Services = () => {
  const st = '& Passions'
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const viewModal1 = () => {
    setShowModal1(true);
  }
  const viewModal2 = () => {
    setShowModal2(true);
  }
  const hideModal1 = () => {
    setShowModal1(false);
  }
  const hideModal2 = () => {
    setShowModal2(false);
  }
  return (
    <>
      <ServiceSection className='section' id='services'>
        <SectionTitle className='section_title'>Soft Skills</SectionTitle>
        <SectionSubtitle className='section_subtitle'>What makes me</SectionSubtitle>

        <ServicesContainer className={`${'container'} ${'grid'}`}>

          {/****** * SERVICES 1 * *****/}
          <ServiceContent>
            <div>
              <BsPeopleFill className='services_icon' />
              <ServicesTitle>Interpersonal <br /> Skills
              </ServicesTitle>
            </div>
            <ServicesButton className={`${'button'} ${'button--flex'} ${'button--small'} ${'button--link'}`} onClick={viewModal1}>View More <BsArrowRightShort className='button_icon_service' />
            </ServicesButton>

            <ServicesModal1 showModal1={showModal1}>
              <ServicesModalContent>
                <ServicesModalTitle>Interpersonal<br /> Skills</ServicesModalTitle>
                <FaTimes className='services_modal-close' onClick={hideModal1} />
                <ServicesModalServices className='grid'>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Team Player.</p>
                  </ServicesModalService>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Problem Solver.</p>
                  </ServicesModalService>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Communication Skills.</p>
                  </ServicesModalService>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Passion for Teaching.</p>
                  </ServicesModalService>
                </ServicesModalServices>

              </ServicesModalContent>
            </ServicesModal1>

          </ServiceContent>
          {/****** * SERVICES 1 FINISH* *****/}

          {/****** * SERVICES 2 * *****/}
          <ServiceContent>
            <div>
              <IoExtensionPuzzleSharp className='services_icon' />
              <ServicesTitle>Hobbies  <br /> {st}
              </ServicesTitle>
            </div>
            <ServicesButton className={`${'button'} ${'button--flex'} ${'button--small'} ${'button--link'}`} onClick={viewModal2}>View More <BsArrowRightShort className='button_icon_service' />
            </ServicesButton>

            <ServicesModal2 showModal2={showModal2}>
              <ServicesModalContent>
                <ServicesModalTitle>Hobbies <br /> {st}</ServicesModalTitle>
                <FaTimes className='services_modal-close' onClick={hideModal2} />
                <ServicesModalServices className='grid'>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Professional Musician.</p>
                  </ServicesModalService>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Math and Coding Teacher</p>
                  </ServicesModalService>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Passion for Puzzles and Mazes.</p>
                  </ServicesModalService>
                  <ServicesModalService>
                    <BsCheckCircle className='services_modal-icon' />
                    <p>Soccer Player.</p>
                  </ServicesModalService>
                </ServicesModalServices>

              </ServicesModalContent>
            </ServicesModal2>

          </ServiceContent>
          {/****** * SERVICES 2 FINISH* *****/}

        </ServicesContainer>

      </ServiceSection>
    </>
  )
}

export default Services
