import react, {useState,useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'

const Cont = styled.section`
@media only screen and (max-width: 600px){
  width:100%;
  padding:0.5rem;
  background-color:#212121;
  }
  padding:1rem;
  padding-top:2rem;
  width:100vw;
  height:10vh;
  
`
const Web = styled.div`
@media only screen and (max-width: 600px){
  display:none;
  }
  @media only screen and (min-width: 600px){
    height:52px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
`
const Mob = styled.div`
@media only screen and (max-width: 600px){
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  }
  @media only screen and (min-width: 600px){
    display:none;
  }
`
const Logo = styled.img`
display:${props=>props.display};
width:30px;
height:30px;
margin-top:-2px;
margin-left:1rem;
`

const LinkBox = styled.div`
display:flex;
flex-direction:row;
margin-top:-5px;
`
const LinkSpan = styled.span`
color:#999CA0;
font-size: 18px;
font-family: 'Raleway', sans-serif;
font-weight:200;
padding:0.5rem;
margin-right:1.3rem;
:hover{
  color:#FFFFFF;
}
`
const MenuCont = styled.div`
width:${props=>props.width};
min-height:${props=>props.height};
display:${props=>props.display};
flex-direction:column;
background-color:#212121;
z-index:1;
overflow:hidden;
padding-top:5rem;

`
const MobLogo = styled.img`
height:50px;

`
const MobLinkBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const MobLink = styled.span`
color:#999CA0;
font-size: 25px;
font-family: 'Raleway', sans-serif;
font-weight:200;
padding:0.4rem;
margin-top:40px;
:hover{
  color:#FFFFFF;
}
`
const IconBox = styled.div`
display:flex;
justify-content:center;
margin-top:6rem;
`


const Nav = ({
  
  
  }) => {
    const router = useRouter();
    //const [open, setOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const LinkedIn = './LinkedIn.svg'
    const LinkedIn_hover = './LinkedIn_hover.svg'
    const Insta = './Insta.svg'
    const Insta_hover = './Insta_hover.svg'
    const Behance = './Behance.svg'
    const Behance_hover = './Behance_hover.svg'
    const Github = './Github.svg'
    const Github_hover = './github_hover.png'

    const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
      const imageRef = useRef(null);
      return (
        <img 
          onMouseOver={() => {
            imageRef.current.src = secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src= primaryImg;
          }}
          src={primaryImg} 
          alt=""
          ref={imageRef}
          width="50px"
          height="50px"
        />
      )
    }
    
    const ImageChangeOnMouseOver = () => {
      return (
        <div>
          <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank"><ImageToggleOnMouseOver
            primaryImg={LinkedIn}
            secondaryImg={LinkedIn_hover}
            alt="LinkedIn" /></a>
          &nbsp; &nbsp; &nbsp;
          <a href="https://www.instagram.com/hoppeyyy/?hl=ja" target="_blank"><ImageToggleOnMouseOver
            primaryImg={Insta}
            secondaryImg={Insta_hover}
            alt="Instagram" /></a>
          &nbsp; &nbsp; &nbsp;
          <a href="https://www.behance.net/hoppeyyye6a4" target="_blank"><ImageToggleOnMouseOver
            primaryImg={Behance}
            secondaryImg={Behance_hover}
            alt="Behance" /></a>
          &nbsp; &nbsp; &nbsp;
          <a href="https://github.com/Hoppeyyy" target="_blank"><ImageToggleOnMouseOver
            primaryImg={Github}
            secondaryImg={Github_hover}
            alt="Github" /></a>
        </div>
      )
    }
  
    var height = 0, width = 0, display = "none";
    if(isOpen){
      height="100vh";
      width="100vw";
      display="flex";
    }else{
     
    }
     return<Cont>
       <Web>
       <Link href="/#home" scroll={false}><Logo src="./logo.svg"/></Link>
       <LinkBox>
        <Link href="/#about" scroll={false}><LinkSpan>About</LinkSpan></Link>
        <Link href="/#work" scroll={false}><LinkSpan>Work</LinkSpan></Link>
        <Link href="/#contact" scroll={false}><LinkSpan>Contact</LinkSpan></Link>
       </LinkBox>
       </Web>
        <Mob>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#E5E5E5" size={25} />
        <MenuCont height={height} width={width} display={display}>
        <Link href="/#home" scroll={false}><MobLogo src="./logo.svg"/></Link>
        <MobLinkBox>
        <Link href="/#about" scroll={false}><MobLink>About</MobLink></Link>
        <Link href="/#work" scroll={false}><MobLink>Work</MobLink></Link>
        <Link href="/#contact" scroll={false}><MobLink>Contact</MobLink></Link>
       </MobLinkBox>
       <IconBox>
          <ImageChangeOnMouseOver/>
       </IconBox>
        </MenuCont>
        </Mob>
      </Cont>
      
  }
  
  export default Nav;