import React, { useState } from 'react'
import Video from '../../Video/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg /* autoPlay loop */  muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Vavuniya All University Students' Development Association
        </HeroH1>
        <HeroP>
          Our organization is run by members who select students
          from Vavuniya district to universities
          (excluding Open University)
        </HeroP>
        <HeroBtnWrapper>
          <Button to='more' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
            More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
