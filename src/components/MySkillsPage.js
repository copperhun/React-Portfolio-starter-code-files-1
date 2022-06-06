import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { lightTheme } from './Themes'
import {Design, Develope} from './AllSvgs';
import LogoComponent from '../SubComponents/LogoComponent';
import PowerButton from '../SubComponents/PowerButton';
import SocialIcons from '../SubComponents/SocialIcons';
import ParticleComponent from '../SubComponents/ParticleComponent';
import BigTitle from '../SubComponents/BigTitle';


const Box = styled.div
`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`


const Main = styled.div
`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body}
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono'.monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text}
}
`

const Title = styled.h2
`
display: flex;
justify-content: center;
align-items: center;
font-size; calc(1rem + 1vw);

${Main}:hover &{
  &>*{
    fill:${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6rem + 1vw);
padding: 0.5rem 0;
margin-left: 1rem;

${Main}:hover &{
  
  color:${props => props.theme.body};
  
}

strong{
  margin-bottom: 1rem;
  
  text-transform: uppercase;

}

ul,p{
  margin-left: 3rem;
}

`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

    <Box>
    <LogoComponent theme='light'/>
    <SocialIcons theme='light' />
    <PowerButton />
    <ParticleComponent theme='light' />
    <Main>
    <Title>
      <Design width={40} height={40} /> Design
    </Title>
    <Description>
      I made ESG ISLAND. 
      it's incredible and creative and crazy art.
    </Description>
    <Description>
    <strong> What do you want to draw?</strong>
    <ul>
      <li>
        World
      </li>
      <li>
        Character
      </li><li>
        Items
      </li>

    </ul>
    </Description>
    </Main>
    <Main>
    <Title>
      <Develope width={40} height={40} /> Develope
    </Title>
    <Description>
      Build Homepage and Create ESG ISLAND
    </Description>
    <Description>
    <strong>what program do you use for project?</strong>
    <ul>
      <li>
        React
      </li>
      <li>
        Unity C#
      </li><li>
        javascript
      </li>

    </ul>
    </Description>
    </Main>
    <BigTitle text="How Create" top='5%' right="20%" />
    </Box>
    </ThemeProvider>
    
  )
}

export default MySkillsPage