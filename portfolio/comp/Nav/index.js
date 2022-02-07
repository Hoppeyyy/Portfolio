import react, {useState,Component,useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {device} from '../device'
import MobMenu from '../MobMenu';
import {useRouter} from 'next/router'
import { Spin as Hamburger } from 'hamburger-react'

const Cont = styled.div`
@media only screen and (max-width: 600px){
  width:100%;
  padding:0.5rem;
  background-color:#212121;
  }
  width:100%;
  padding:2rem;
`
const Web = styled.div`
@media only screen and (max-width: 600px){
  display:none;
  }
  @media only screen and (min-width: 600px){
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
`
const NavIcon = styled.img`


`
const LinkBox = styled.div`
display:flex;
flex-direction:row;
`
const Link = styled.span`
color:#999CA0;
font-size: 32px;
font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: normal;
padding:1rem;
margin-right:3rem;
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
height:51px;

`
const MobLinkBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const MobLink = styled.span`
color:#999CA0;
font-size: 32px;
font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: normal;
padding:1rem;
margin-top:20px;
:hover{
  color:#FFFFFF;
}
`
const IconBox = styled.div`
display:flex;
justify-content:center;
margin-top:4rem;
`
const Icon = styled.img`
:hover{}
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
    const Github_hover = './Github_hover.svg'

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
        />
      )
    }
    
    const ImageChangeOnMouseOver = () => {
      return (
        <div>
          <ImageToggleOnMouseOver
            primaryImg={LinkedIn}
            secondaryImg={LinkedIn_hover}
            alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver
            primaryImg={Insta}
            secondaryImg={Insta_hover}
            alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver
            primaryImg={Behance}
            secondaryImg={Behance_hover}
            alt="" />
          &nbsp; &nbsp; &nbsp;
          <ImageToggleOnMouseOver
            primaryImg={Github}
            secondaryImg={Github_hover}
            alt="" />
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
       <Logo src="./logo.svg"/>
       <LinkBox>
        <Link href="#">About</Link>
        <Link href="#">Work</Link>
        <Link href="#">Contact</Link>
       </LinkBox>
       </Web>
        <Mob>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#E5E5E5"  />
        <MenuCont height={height} width={width} display={display}>
        <MobLogo src="./logo.svg"/>
        <MobLinkBox>
        <MobLink href="#">About</MobLink>
        <MobLink href="#">Work</MobLink>
        <MobLink href="#">Contact</MobLink>
       </MobLinkBox>
       <IconBox>
          <ImageChangeOnMouseOver/>
       </IconBox>
        </MenuCont>
        </Mob>
      </Cont>
      
  }
  
  export default Nav;