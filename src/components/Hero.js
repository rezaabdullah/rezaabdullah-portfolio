import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"
import { GrLinkedin, GrGithub, GrMedium } from "react-icons/gr"
import { Link } from "gatsby"
import { Button } from "./Button"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Hi, I'm Abdullah Reza</HeroH1>
        <HeroH2>
          <Typewriter
            options={{
              strings: ["Product Manager", "Data Scientist", "Mechanical Engineer", "Philomath"],
              autoStart: true,
              loop: true,
              wrapperClassName: HeroH2,
            }}
          />
        </HeroH2>
        <HeroP>
          Generalized specialist with expertise in building data driven business solutions. Intrigued by multifaceted nature of human dynamics and strongly believe that good solutions must have a human narrative at its core.
        </HeroP>
        <HeroCTA>
          <HeroIcon>
            <IconLink to="/"><GrLinkedin /></IconLink>
            <IconLink to="/"><GrGithub /></IconLink>
            <IconLink to="/"><GrMedium /></IconLink>
          </HeroIcon>
          <Button to="/">Contact Me</Button>
        </HeroCTA>
      </HeroContent>
      <HeroImage>
        <StaticImage src="../images/abdullah_reza_profile.jpg" alt="Profile picture of Abdullah Reza"  layout="constrained"/>
      </HeroImage>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  margin: -64px 0 0 0;
  padding: 16px calc((100vw - 1180px) / 2);
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

const HeroContent = styled.div`
  width: calc((100vw - 1180px) / 2);
  margin: 128px 0 64px 0;
  flex-grow: 1;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin: 96px 0 32px 0;
    width: 100%;
    height: 50vh;
  }
`
const HeroImage = styled.div`
  flex-grow: 1;
  height: calc(100vh - 192px);
  width: calc((100vw - 1180px) / 2);
  margin: 128px 0 64px 0;
  overflow: hidden;
  padding: 0 4px;

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0;
  }
`

const HeroH1 = styled.h1`
  color: #1d3557;
  font-size: clamp(28px, 4vw, 54px);
  line-height: clamp(36px, 4vw, 64px);
  font-weight: 300;
  vertical-align: text-top;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const HeroH2 = styled.h2`
  color: #e63946;
  font-size: clamp(16px, 4vw, 32px);
  line-height: clamp(22px, 4vw, 40px);
  font-family: "IBM Plex Mono";
  font-weight: 300;
  margin-top: 24px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const HeroP = styled.p`
  margin-top: 16px;
  color: #457b9d;
  font-size: clamp(12px, 2vw, 20px);
  line-height: clamp(26px, 4vw, 32px);
  font-weight: 400;
  width: 90%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const HeroIcon = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`

const IconLink = styled(Link)`
  font-size: 32px;
  line-height: 24px;
  color: #1d3557;
  margin:0 32px 0 0;
  cursor: pointer;
`

const HeroCTA =styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`