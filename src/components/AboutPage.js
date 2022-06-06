import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { DarkTheme } from './Themes'

import LogoComponent from '../SubComponents/LogoComponent';
import PowerButton from '../SubComponents/PowerButton';
import SocialIcons from '../SubComponents/SocialIcons';
import ParticleComponent from '../SubComponents/ParticleComponent';
import astronaut from '../assets/Images/spaceman-removebg-preview.png'
import { keyframes } from 'styled-components';
import BigTitle from '../SubComponents/BigTitle';

const Box = styled.div
`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

`
const float = keyframes `
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 100%;
  heigth: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono'. monospace;
font-style: italic;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>

    <Box>
    <LogoComponent theme='dark'/>
    <SocialIcons theme='dark' />
    <PowerButton />
    <ParticleComponent theme='dark' />
    <Spaceman>
      <img src={astronaut} alt="spaceman" />
    </Spaceman>
    <Main>

    I am a curious person. I started because I wanted to create a new world, character, and game.

<br></br>
<br></br>
I am learning programming and I am also learning drawing.
I want to create my own crazy world
<br></br>
<br></br>
I can say for sure. I love art and enjoy the pain of creation.
Thank you very much for coming to my website
    </Main>
    <BigTitle text="ABOUT" top='10%' right="5%" />

    </Box>
    </ThemeProvider>
    
  )
}

export default AboutPage