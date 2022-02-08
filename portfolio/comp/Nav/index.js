import react, {useState,Component,useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {device} from '../device'
import {useRouter} from 'next/router'
import { Spin as Hamburger } from 'hamburger-react'


const Cont = styled.div`
@media only screen and (max-width: 600px){
  width:100%;
  padding:0.5rem;
  background-color:#212121;
  }
  padding:1rem;
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
  height:${props=>props.height};
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
`

const LinkBox = styled.div`
display:flex;
flex-direction:row;
margin-top:-5px;
`
const Link = styled.span`
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
height:${props=>props.height};
display:${props=>props.display};
flex-direction:column;
background-color:#212121;
margin-top:4rem;
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
    const Github_hover = './Github_hover.png'

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
       <Logo src="./logo.svg" onClick={()=>router.push("/")}/>
       <LinkBox>
        <Link onClick={()=>router.push("/About")}>About</Link>
        <Link onClick={()=>router.push("/Work")}>Work</Link>
        <Link onClick={()=>router.push("/Contact")}>Contact</Link>
       </LinkBox>
       </Web>
        <Mob>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#E5E5E5" size={25} />
        <MenuCont height={height} width={width} display={display}>
        <MobLogo src="./logo.svg"  onClick={()=>router.push("/")}/>
        <MobLinkBox>
        <MobLink onClick={()=>router.push("/About")}>About</MobLink>
        <MobLink onClick={()=>router.push("/Work")}>Work</MobLink>
        <MobLink onClick={()=>router.push("/Contact")}>Contact</MobLink>
       </MobLinkBox>
       <IconBox>
          <ImageChangeOnMouseOver/>
       </IconBox>
        </MenuCont>
        </Mob>
      </Cont>
      
  }
  
  export default Nav;