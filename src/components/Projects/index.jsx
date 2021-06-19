import React from 'react'
import ProjectCard from './ProjectsCard'
import { 
    projectOne, 
    projectTwo, 
    projectThree, 
    projectFour, 
    projectFive } from './ProjectsCard/Data'
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
} from './ProjectsElements'

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Our Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectCard {...projectOne} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectThree} />
                <ProjectCard {...projectFour} />
                <ProjectCard {...projectFour} />
                <ProjectCard {...projectFive} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
