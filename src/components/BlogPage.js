import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import img from "../assets/Images/dwdwdwdwd.jpg"
import LogoComponent from "../SubComponents/LogoComponent"
import PowerButton from "../SubComponents/PowerButton"
import SocialIcons from "../SubComponents/SocialIcons"
import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent'
import AnchorComponent from '../SubComponents/Anchor'
import BigTitle from '../SubComponents/BigTitle'

const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;



`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
hegiht: auto;

position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const BlogPage = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
  }, [])



  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers}/>
        
        <Center>
        <Grid>
          {
          Blogs.map(blog => {
          return <BlogComponent key={blog.id} blog={blog} />
          })
          }
        </Grid>        

        
        </Center>
        <BigTitle text="BLOG" top='5rem' left="5rem" />

      </Container>
    </MainContainer>
  )
}

export default BlogPage