import React, { useState } from 'react'
import { SkillsSection, SectionTitle, SkillsTitle, SkillsSubtitle, SkillsSectionSubtitle, SkillsContainer, SkillsContent, SkillsHeader, SkillsListGridFront, SkillsData, SkillsTitleDiv, SkillsName, SkillsNumber, SkillsBar, SkillsPercentage, SkillsListGridBack } from './SkillStyles'
import { BsDisplay } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa'
import { VscServerProcess } from 'react-icons/vsc'
import '../../App.css'

const Skills = () => {

  const [displayFront, setDisplayFront] = useState(false);
  const toogleDisplayFront = (deg1) => {
    setDisplayFront(!displayFront);

  }

  const [displayBack, setDisplayBack] = useState(false);

  const toogleDisplayBack = () => {
    setDisplayBack(!displayBack);
  }



  return (
    <>
      <SkillsSection className='section' id='skills'>
        <SectionTitle className='section_title'> Skills</SectionTitle>
        <SkillsSectionSubtitle className='section_subtitle'>
          My technical level
        </SkillsSectionSubtitle>

        <SkillsContainer className={`${' container'} ${'grid'}`}>
          <div>

            {/************ Skill1 **********/}
            <SkillsContent>
              <SkillsHeader onClick={toogleDisplayFront}>
                <BsDisplay className='skills_icon' />
                <div>
                  <SkillsTitle>Frontend Developer</SkillsTitle>
                  <SkillsSubtitle>Web Design</SkillsSubtitle>
                </div>
                <FaAngleDown className='skills_arrow' />
              </SkillsHeader>

              <SkillsListGridFront displayFront={displayFront}>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>HTML5</SkillsName>
                    <SkillsNumber>
                      Strong
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_html'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>CSS3</SkillsName>
                    <SkillsNumber>
                      Strong
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_css'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>JavaScript</SkillsName>
                    <SkillsNumber>
                      Strong
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_js'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>React</SkillsName>
                    <SkillsNumber>
                      Strong
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_react'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>NodeJS - Express Apps</SkillsName>
                    <SkillsNumber>
                      Basic
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_react'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

              </SkillsListGridFront>
            </SkillsContent>
            {/************ Finish Skill1 **********/}

            {/************ Skill2 **********/}
            <SkillsContent>
              <SkillsHeader onClick={toogleDisplayBack}>
                <VscServerProcess className='skills_icon' />
                <div>
                  <SkillsTitle>Software Developer</SkillsTitle>
                  <SkillsSubtitle>Other Coding Skills</SkillsSubtitle>
                </div>
                <FaAngleDown className='skills_arrow' />
              </SkillsHeader>

              <SkillsListGridBack displayBack={displayBack}>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>Object-Oriented Programming</SkillsName>
                    <SkillsNumber>
                      Strong
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_node'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>Python</SkillsName>
                    <SkillsNumber>
                      Strong
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_mongo'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>C Language</SkillsName>
                    <SkillsNumber>
                      Medium
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_python'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

                <SkillsData>
                  <SkillsTitleDiv>
                    <SkillsName>Embedded Systems (Microcontrollers)</SkillsName>
                    <SkillsNumber>
                      Medium
                    </SkillsNumber>
                  </SkillsTitleDiv>
                  <SkillsBar>
                    <SkillsPercentage className='skills_api'></SkillsPercentage>
                  </SkillsBar>
                </SkillsData>

              </SkillsListGridBack>
            </SkillsContent>
            {/************ Finish Skill2 **********/}

          </div>
        </SkillsContainer>

      </SkillsSection>
    </>
  )
}

export default Skills
