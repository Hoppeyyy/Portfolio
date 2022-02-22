import useMousePosition from "../../hooks/useMousePosition";
import React, {useContext, useState,useEffect } from "react";
import { MouseContext } from "../../utils/mouse-context";
import styled, {keyframes} from 'styled-components';

const Dot = styled.div`
position: fixed;
width: 8px;
height: 8px;
background-color: #EBEEF6;
border-radius: 100%;
z-index: 900;
pointer-events: none;
`

const Img = styled.img`
position: fixed;
width:80px;
height:80px;
z-index: 999;
pointer-events: none;
transform:scale(${props=>props.scale});
will-change: transform;
transition: transform .1s linear;
-webkit-transition-duration: 100ms;
transition-duration: 200ms;
-webkit-transition-timing-function: ease-out;
transition-timing-function: ease-out;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-name:${props=>props.animation};
`

const Mouse = (
  
) =>{
 
  const { x, y } = useMousePosition();
  const [cursor] = useContext(MouseContext);
  const cursorAnim = keyframes`
    0% {top:${y}px;}
    50% {top:${y + 12}px;}
    100% {top:${y}px;}
    `
  return<Dot
  style={{ left: `${x}px`, top: `${y}px` }}
 
  ><Img 
  src="./roket_mouse.svg" 
  style={{ left: `${x -100}px`, top: `${y}px`}}
  animation={cursorAnim}
  scale={cursor.active ?'1.7':'1'}
  
  /></Dot>
  
}

export default Mouse

