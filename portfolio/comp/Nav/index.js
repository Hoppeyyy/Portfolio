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
  display:flex;
  flex-direction:column;
  align-items:flex-end;
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
color:#EBEEF6;
font-size: 16px;
font-family: 'Raleway', sans-serif;
font-weight:200;
padding:0.5rem;
margin-right:1.3rem;
background-image: ${props=>props.bkimg};
background-repeat: no-repeat;
background-position: 0 70%;
background-size: 100% 0.2em;
:hover{

    background-image: linear-gradient(
      -200deg,
      #4568dc 10%,
      #b06ab3 80%
    );
      background-repeat: no-repeat;
      background-position: 0 70%;
      background-size: 100% 0.2em;
      transition: background-size 0.40s ease-in;
      animation: underline 0.40s;
      @keyframes underline{
        from{background-size:0% 0.2em;}
        to{background-size:100% 0.2em;}
      }

}
`
const MenuCont = styled.div`
width:${props=>props.width};
min-height:${props=>props.height};
display:${props=>props.display};
flex-direction:column;
background-color:#212121;
z-index:1;
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
color:#EBEEF6;
font-size: 20px;
font-family: 'Raleway', sans-serif;
font-weight:200;
padding:0.4rem;
margin-top:40px;
:hover{
  background-image: linear-gradient(
    -200deg,   
    #4568dc 10%,
    #b06ab3 80%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
}
`
const IconBox = styled.div`
display:flex;
justify-content:center;
margin-top:6rem;
`


const Nav = ({
  bkimg1="",
  bkimg2="",
  bkimg3="",
  bkimg4="",
  ContactClick=()=>{},
  ContactMobClick=()=>{}
  }) => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    const LinkedIn = "/LinkedIn.svg"
    const LinkedIn_hover = "/LinkedIn_hover.svg"
    const Insta = "/Insta.svg"
    const Insta_hover = "/Insta_hover.svg"
    const Behance = "/Behance.svg"
    const Behance_hover = "/Behance_hover.svg"
    const Github = "/Github.svg"
    const Github_hover = "/github_hover.png"

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
       <Link href="/" scroll={false}><Logo src="./logo.svg"/></Link>
       <LinkBox>
        <Link href="/" scroll={false}><LinkSpan bkimg={bkimg1}>Home</LinkSpan></Link>
        <Link href="/about" scroll={false}><LinkSpan bkimg={bkimg2}>About</LinkSpan></Link>
        <Link href="/projects" scroll={false}><LinkSpan bkimg={bkimg3}>Frontend</LinkSpan></Link>
        <LinkSpan bkimg={bkimg4} onClick={ContactClick}>Contact</LinkSpan>
       </LinkBox>
       </Web>
        <Mob>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#E5E5E5" size={25} />
        <MenuCont height={height} width={width} display={display}>
        <Link href="/" scroll={false}><MobLogo src="./logo.svg"/></Link>
        <MobLinkBox>
        <Link href="/" scroll={false}><MobLink>Home</MobLink></Link>
        <Link href="/about" scroll={false}><MobLink>About</MobLink></Link>
        <Link href="/projects" scroll={false}><MobLink>Frontend</MobLink></Link>
        <MobLink onClick={ContactMobClick}>Contact</MobLink>
       </MobLinkBox>
       <IconBox>
          <ImageChangeOnMouseOver/>
       </IconBox>
        </MenuCont>
        </Mob>
      </Cont>
      
  }
  
  export default Nav;