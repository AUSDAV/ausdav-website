import styled from 'styled-components'

export const ProjectsContainer = styled.div`
height: 2450px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #0f3069;

@media screen and (max-width: 1015px) {
  height: 3300px;
}

@media screen and (max-width: 865px) {
  height: 3450px;
}

@media screen and (max-width: 785px) {
  height: 5550px;
}

@media screen and (max-width: 768px) {
  height: 5650px;
}

@media screen and (max-width: 720px) {
  height: 5900px;
}

@media screen and (max-width: 506px) {
  height: 6300px;
}

@media screen and (max-width: 480px) {
  height: 6250px;
}

@media screen and (max-width: 410px) {
  height: 6600px;
}

 `
export const ProjectsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`


