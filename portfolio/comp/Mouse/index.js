import useMousePosition from "../../hooks/useMousePosition";
import React, {useContext, useState,useEffect } from "react";
import { MouseContext } from "../../utils/mouse-context";
import styled, {keyframes} from 'styled-components';
/*
const Dot = styled.div`
width: 10px;
height: 10px;
background-color: #EBEEF6;
border-radius: 100%;
z-index: 999;
pointer-events: none;
display:flex;
margin-right:10px;
`
const Box = styled.div`
display:flex;
justify-content:flex-end;
`*/
const Cursor = styled.div`
position:absolute;
width: 10px;
height: 10px;
background-color: #EBEEF6;
border-radius: 100%;
will-change: transform;
transform: translate(-999px, -999px);
z-index: 999;
pointer-events: none;

`
// margin-right:10px;
const Img = styled.img`
position:relative;
top:10px;
left:-75px;
width:80px;
height:80px;
z-index: 999;
pointer-events: none;
transform:scale(${props=>props.scale});
will-change: transform;
transition: transform .1s linear;
transform: translate(-999px, -999px);
transform-origin: top right;
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
 
  //const { x, y } = useMousePosition();
  const [cursor] = useContext(MouseContext);
  
  /*const cursorAnim = keyframes`
  0% {transform:translate(${x},${y}px);}
  50% {transform:translate(${x},${y + 12}px);}
  100% {transform:translate(${x},${y}px);}
  `*/
  
  
    var rotatingCursor = function() {

      /* Local Variables */
      const INTERVAL_POSITION = 5;
      const INTERVAL_ROTATION = 70;
      let lastCursorPos = {x: -999, y: -999};
      let currentCursorPos = {x: -999, y: -999};
      let lastCursorAngle = 0, cursorAngle = 0;
      let cursorEl, cursorImageEl;//,cursorDot;
      /* Local Functions */
    
      // NOTE: I am transform two different elements here because so I can only animate the rotation with 'transition-property: transform'.
      function setCurrentCursorProps() {
        // Apply translation (set to actual cursor position)
        cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
        //cursorImageEl.style.transform =`translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
        // Ensure correct rotation transition direction
        while (Math.abs(lastCursorAngle - cursorAngle) > 180) {
          if (cursorAngle > lastCursorAngle) {
            cursorAngle -= 360;
          } else if (cursorAngle < lastCursorAngle) {
            cursorAngle += 360;
          }
        }
        // Apply rotation
       //cursorDot.style.transform = `rotate(${cursorAngle - 90}deg)`;
        cursorImageEl.style.transform = `rotate(${cursorAngle - 90}deg)`;
        //cursorEl.style.transform = `rotate(${cursorAngle - 90}deg)`;
      }
    
      function updateCursor() {
        window.addEventListener('mousemove', event => {
          currentCursorPos = {x: event.clientX, y: event.clientY};
     
    
        });
        console.log(currentCursorPos)
        // Interval for updating cursor-position
        setInterval(setCurrentCursorProps, INTERVAL_POSITION);
    
        // Interval for updating cursor-rotation
        setInterval(() => {
          const delt = {
            x: lastCursorPos.x - currentCursorPos.x,
            y: lastCursorPos.y - currentCursorPos.y
          }
          if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
          cursorAngle = (Math.atan2(delt.y, delt.x) * 180 / Math.PI);
    
          setCurrentCursorProps();
          
          lastCursorPos = currentCursorPos;
          lastCursorAngle = cursorAngle;

          
        }, INTERVAL_ROTATION);
       
      }
      
    
      /* Public Functions */
    
          cursorEl = document.querySelector('.cursor');
          cursorImageEl = document.querySelector('.myImg');
          //cursorDot = document.querySelector('.myDot');
          updateCursor();
          
    }
   
    useEffect(() => {
     
       rotatingCursor()
       
      return () => {
      };
      
    }, []);
   
  return<Cursor
  className="cursor"
  //style={{ left: `${x}px`, top: `${y}px` }}
  //style={{transform:`translate(${x}px,${y}px)`}}
  ><Img 
  //style={{ left: `${x}px`, top: `${y}px` }}
  //style={{transform:`translate(${x}px,${y}px)`}}
  src="./roket_mouse.svg" 
  //animation={cursorAnim}
  scale={cursor.active ?'1.7':'1'}
  className="myImg"
  /> 
  </Cursor>
  
  
}

export default Mouse

