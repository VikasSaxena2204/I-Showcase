import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle, 
    ResumeButton 
} from './HeroStyle';
import HeroImg from '../../images/vikas_3.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <section id="about" aria-labelledby="hero-section">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title id="hero-section">Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                        delay: 75, 
                                        cursor: '|' 
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank' rel="noopener noreferrer">Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt={`${Bio.name}'s profile`} />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section>
    );
}

export default HeroSection;
