import React from "react";
import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SocialMediaIcon,
  SocialMediaIcons,
} from "./HeroStyle";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import HeroImg from "../../images/Profile.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hello! I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <FaLinkedin />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.facebook} target="display">
                <FaFacebook />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="display">
                <FaTwitter />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="display">
                <FaInstagram />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <ResumeButton href={Bio.resume} target="display">
              Download CV
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
