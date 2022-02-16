import react, {useState,Component,useRef,useEffect} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {device} from '../device'


const Cont = styled.div`
font-family: Arial;
font-size: 50px;
font-weight: 900;
letter-spacing: -2px;
text-transform: uppercase;
white-space: nowrap;
color: transparent;
-webkit-text-stroke: 2px #eeeeee;
`

const LineCont = styled.div`
height: 50px;
overflow: hidden;
position: relative;

:nth-child(1) {
  left: 29px;
}
:nth-child(2) {
  left: 58px;
}
:nth-child(3) {
  left: 87px;
}
:nth-child(4) {
  left: 116px;
}
:nth-child(5) {
  left: 145px;
}

`

const Text = styled.p`
  transform: translate(0, -50px);
  animation-timing-function: cubic-bezier(1.000, 0.000, 0.000, 1.000);
  animation: text-anim 6s infinite;
  margin: 0;
  height: 50px;
  line-height: 50px;
  transition: all 0.5s ease-in-out;

  :hover{
    color: #eeeeee;
  }
  @keyframes text-anim {
    0% {
      transform: translate(0, 0);
      opacity:0;
    }
      50% {
      transform: translate(0, -50px);
      opacity:0.6;
    }
    100% {
      transform: translate(0, 0);
      opacity:1;
    }
  }
  
`
/*
padding:2rem;

const Title = styled.h3`
font-family: Cantarell;
font-style: normal;
font-weight: bold;
color: #FFB319;
text-align:left;
font-size: 35px;
line-height: 65px;
@media only screen and (max-width: 600px){
font-size: 20px;
line-height: 40px;
}

`
*/


const HomeTitle = ({
  

})=>{

 

return<Cont>
  <LineCont>
   <Text></Text>
   <Text>Curious</Text>
  </LineCont>
  <LineCont> 
    <Text>Frontend</Text>
    <Text>Creative</Text>
  </LineCont>
  <LineCont>
    <Text>Developer</Text>
    <Text> Ambitious</Text>
  </LineCont>
</Cont>
}

export default HomeTitle