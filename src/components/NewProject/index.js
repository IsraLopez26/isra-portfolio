import React from 'react'
import { ProjectSection, ProjectBG, ProjectContainer, ProjectData, ProjectTitle, ProjectDescription, ProjectButton, ProjectImg } from './NewProjectStyle'
import '../../App.css'
import img1 from '../../images/programming.svg'
import { BiMessageRoundedDetail } from 'react-icons/bi'

const NewProject = () => {
  return (
    <>
      <ProjectSection className='section'>
        <ProjectBG>
          <ProjectContainer className={`${'container'} ${'grid'}`}>
            <ProjectData>
              <ProjectTitle>
                You have a new project
              </ProjectTitle>
              <ProjectDescription>
                Let's get to know each other!
              </ProjectDescription>
              <ProjectButton href='#contact' className={`${'button'} ${'button--flex'} ${'button--white'}`}>
                Contact Me
                <BiMessageRoundedDetail className={`${'project_icon'} ${'button_icon'}`} />
              </ProjectButton>
            </ProjectData>

            <ProjectImg src={img1} />
          </ProjectContainer>
        </ProjectBG>
      </ProjectSection>
    </>
  )
}

export default NewProject
