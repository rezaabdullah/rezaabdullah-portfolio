import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import ProfileImage from "../images/abdullah_reza_profile.jpg"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        This is Hero Content
      </HeroContent>
      <HeroImage>
        {/* <StaticImage src="../images/abdullah_reza_profile.jpg" alt="Profile picture of Abdullah Reza"/> */}
        <StaticImage src="../images/abdullah_reza_profile.jpg" alt="Profile picture of Abdullah Reza"  layout="constrained"/>
      </HeroImage>
      {/* <HeroIcon>

      </HeroIcon> */}
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #e0e0e0;
  display: flex;
  margin: -64px 0 0 0;
  padding: 16px calc((100vw - 1180px) / 2);
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  overflow: hidden;
`
const HeroContent = styled.div`
  // width: calc((100vw - 1180px) / 2);
  flex-grow: 1;
  background: red;
`
const HeroImage = styled.div`
  // flex-grow: 1;
  // margin-top: 128px;
  // padding-bottom: 64px;
  // margin-bottom: 64px;
  
  height: calc(100vh - 192px);
  background: yellow;
`
// const HeroContainer = styled.div``
// const HeroContainer = styled.div``