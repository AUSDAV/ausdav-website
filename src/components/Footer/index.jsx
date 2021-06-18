import React from 'react'
import { FaFacebook, FaGoogle, FaMapMarkedAlt, FaGithub, FaYoutube } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  FooterLinkA,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/'>Vission</FooterLink>
              <FooterLink to='/'>Mission</FooterLink>
              <FooterLink to='/'>History</FooterLink>
              <FooterLink to='/'>Investor</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLinkA href="https://www.youtube.com/playlist?list=PLICvd5Ixeo8mu6xSNTiZGB6w_rTxdKAel" target='_blank'>
                Chemistry Revision
              </FooterLinkA>
              <FooterLinkA href="https://www.youtube.com/playlist?list=PLICvd5Ixeo8lKbi3wX1y8fl04tjmX6HuT" target='_blank'>
                2021 First Form Course Introduction
              </FooterLinkA>
              <FooterLinkA href="https://www.youtube.com/watch?v=sD3tE7RYz_Q&list=PLICvd5Ixeo8lAY1Q7yDzM_ApkdYVxZbhy&index=1" target='_blank'>
                INOVIA 2020 Moments - Women Tribute
              </FooterLinkA>
              <FooterLinkA href="https://www.youtube.com/watch?v=iRaL9325Cjk&list=PLICvd5Ixeo8lAY1Q7yDzM_ApkdYVxZbhy&index=2" target='_blank'>
                Corona Awareness
              </FooterLinkA>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLinkA href='mailto: ausdavofficial@gmail.com/' target='_blank'>
                Gmail
              </FooterLinkA>
              <FooterLinkA href="https://www.facebook.com/ausdavmail" target='_blank'>
                Facebook
              </FooterLinkA>
              <FooterLinkA href="https://www.youtube.com/channel/UCYwkNjiR0Be-Zxm-EcGN4mg" target='_blank'>
                Youtube
              </FooterLinkA>
              <FooterLinkA to='/'>
                Twitter
              </FooterLinkA>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              AUSDAV
            </SocialLogo>
            <WebsiteRights>AUSDAV © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/ausdavmail' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='mailto: ausdavofficial@gmail.com/' target='_blank' arial-label='gmail'>
                <FaGoogle />
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/channel/UCYwkNjiR0Be-Zxm-EcGN4mg' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/AUSDAV' target='_blank' arial-label='github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.google.com/maps/place/AUSDAV/@8.7522259,80.4942694,17z/data=!3m1!4b1!4m5!3m4!1s0x3afc1503007b9bcd:0x916812ae1f354d56!8m2!3d8.7522206!4d80.4964581' target='_blank' arial-label='location'>
                <FaMapMarkedAlt />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
