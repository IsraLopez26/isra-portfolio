import React, { useState } from 'react'
import { QualiSection, QualiTitle, QualiSubtitle, QualiContainer, QualiTabs, QualiButtonE, QualiButtonW, QualiSections, QualiContent1, QualiContent2, QualiData, QualiTitleH3, QualiSubtitleSpan, QualiCalendar, QualiRounder, QualiLine } from './QualificationStyle'
import { FaGraduationCap } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import '../../App.css'


const Qualification = () => {

  const procter = 'Procter & Gamble';
  const [showEducation, setShowEducation] = useState(false);
  const [showWork, setShowWork] = useState(true);


  const activeShowEducation = () => {
    setShowEducation(true);
    setShowWork(false);
  }

  const activeShowWork = () => {
    setShowEducation(false);
    setShowWork(true);
  }

  return (
    <>
      <QualiSection>
        <QualiTitle className='section_title'>My Journey</QualiTitle>
        <QualiSubtitle className='section_subtitle'>My personal journey</QualiSubtitle>

        <QualiContainer className='container'>
          <QualiTabs>

            <QualiButtonE className='button--flex' onClick={activeShowEducation} showEducation={showEducation}>
              <FaGraduationCap className='quali_icon' /> Education
            </QualiButtonE>

            <QualiButtonW className='button--flex' onClick={activeShowWork} showWork={showWork}>
              <BsBriefcaseFill className='quali_icon2' /> Work
            </QualiButtonW>

          </QualiTabs>
          <QualiSections>

            {/********* * CONTENT 1 * ********/}
            <QualiContent1 data-content id='education' showEducation={showEducation}>

              {/*** * Qualification 1 * ***/}
              <QualiData>
                <div>
                  <QualiTitleH3>B.S. Digital Systems and Robotics Engineer</QualiTitleH3>
                  <QualiSubtitleSpan>
                    ITESM - CEM
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2014 - 2018
                  </QualiCalendar>
                </div>
                <div>
                  <QualiRounder></QualiRounder>
                  <QualiLine></QualiLine>
                </div>
              </QualiData>
              {/*** * Qualification 1 finish * ***/}

              {/*** * Qualification 2 * ***/}
              <QualiData>
                <div></div>
                <div>
                  <QualiRounder></QualiRounder>
                  <QualiLine></QualiLine>
                </div>
                <div>
                  <QualiTitleH3>Abacus College</QualiTitleH3>
                  <QualiSubtitleSpan>
                    Oxford University
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2013
                  </QualiCalendar>
                </div>

              </QualiData>
              {/*** * Qualification 2 finish * ***/}

              {/*** * Qualification 3 * ***/}
              <QualiData>
                <div>
                  <QualiTitleH3>The Web Developer Bootcamp</QualiTitleH3>
                  <QualiSubtitleSpan>
                    Udemy
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2020 - 2021
                  </QualiCalendar>
                </div>
                <div>
                  <QualiRounder></QualiRounder>
                  {/* <QualiLine></QualiLine> */}
                </div>
              </QualiData>
              {/*** * Qualification 3 finish * ***/}

              {/*** * Qualification 4 * **}
              <QualiData>
                <div></div>
                <div>
                  <QualiRounder></QualiRounder>
                  {/* <QualiLine></QualiLine> }
                </div>
                <div>
                  <QualiTitleH3>Web Designer</QualiTitleH3>
                  <QualiSubtitleSpan>
                    Peru - University
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2009 - 2014
                  </QualiCalendar>
                </div>

              </QualiData>
              {/*** * Qualification 4 finish * ***/}

            </QualiContent1>
            {/********* * CONTENT 1 FINISH* ********/}


            {/********* * CONTENT 2 * ********/}
            <QualiContent2 data-content id='education' showWork={showWork}>

              {/*** * Qualification 1 * ***/}
              <QualiData>
                <div>
                  <QualiTitleH3>Production Line Manager</QualiTitleH3>
                  <QualiSubtitleSpan>
                    {procter}
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2021 - Present
                  </QualiCalendar>
                </div>
                <div>
                  <QualiRounder></QualiRounder>
                  <QualiLine></QualiLine>
                </div>
              </QualiData>
              {/*** * Qualification 1 finish * ***/}

              {/*** * Qualification 2 * ***/}
              <QualiData>
                <div></div>
                <div>
                  <QualiRounder></QualiRounder>
                  <QualiLine></QualiLine>
                </div>
                <div>
                  <QualiTitleH3>Process Engineer</QualiTitleH3>
                  <QualiSubtitleSpan>
                    {procter}
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2020 - 2021
                  </QualiCalendar>
                </div>

              </QualiData>
              {/*** * Qualification 2 finish * ***/}

              {/*** * Qualification 3 * ***/}
              <QualiData>
                <div>
                  <QualiTitleH3>Software Engineer</QualiTitleH3>
                  <QualiSubtitleSpan>
                    ADCOS de Mexico
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2018 - 2020
                  </QualiCalendar>
                </div>
                <div>
                  <QualiRounder></QualiRounder>
                  <QualiLine></QualiLine>
                </div>
              </QualiData>
              {/*** * Qualification 3 finish * ***/}

              {/*** * Qualification 4 * ***/}
              <QualiData>
                <div></div>
                <div>
                  <QualiRounder></QualiRounder>
                  {/* <QualiLine></QualiLine> */}
                </div>
                <div>
                  <QualiTitleH3>Firmware Engineering Intern</QualiTitleH3>
                  <QualiSubtitleSpan>
                    Honeywell
                  </QualiSubtitleSpan>
                  <QualiCalendar>
                    <FaRegCalendarAlt />2017 - 2018
                  </QualiCalendar>
                </div>

              </QualiData>
              {/*** * Qualification 4 finish * ***/}

            </QualiContent2>
            {/********* * CONTENT 1 FINISH* ********/}

          </QualiSections>
        </QualiContainer>
      </QualiSection>
    </>
  )
}

export default Qualification
