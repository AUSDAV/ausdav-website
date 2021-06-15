import React from 'react'
import ProjectCard from './ProjectsCard'
import { projectOne, projectTwo } from './ProjectsCard/Data'
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
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectTwo} />
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
