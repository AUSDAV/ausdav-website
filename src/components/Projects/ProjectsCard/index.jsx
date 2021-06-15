import React from 'react'
import {
    ProjectsImg,
    ProjectsH2,
    ProjectsP,
    ProjectCardDiv
} from './ProjectsCardElements';

const ProjectCard = ({ img, alt, heading, description }) => {
    return (
        <ProjectCardDiv>
            <ProjectsImg src={img} alt={alt} />
            <ProjectsH2>{heading}</ProjectsH2>
            <ProjectsP>{description}</ProjectsP>
        </ProjectCardDiv>
    )
}

export default ProjectCard
