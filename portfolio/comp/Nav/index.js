import react, {useState} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {device} from '../device'
import MobMenu from '../MobMenu';
import {useRouter} from 'next/router'


const Cont = styled.div`
@media only screen and (max-width: 600px){
  width:100%;
  padding:1rem;
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
width:100vw;
height:${props=>props.height};
display:${props=>props.display};
flex-direction:column;
background-color:#222222;
padding:0rem;
`
const Nav = ({
  
  
  }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    var height = 0, display = "none", Navsrc="./Humberger.svg";
    if(open){
      height="100vh";
      display="flex";
      Navsrc="./Cross.svg";
     
        
    }else{
      Navsrc="./Humberger.svg";
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
        <NavIcon 
          src={Navsrc}
        onClick={()=>{
          setOpen(!open)
          
        }}
       
        />
        <MenuCont height={height} display={display}>

        </MenuCont>
        </Mob>
      </Cont>
      
  }
  
  export default Nav;