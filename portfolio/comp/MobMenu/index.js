import react, {useState} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {device} from '../device'


const Cont = styled.div`
width:100vw;
height:100vh;
padding:2rem;
display:${props=>props.display};
justify-content:right;

`
const Open = styled.div`
width:100%;
padding:2rem;
display:flex;
height:100%;
background-color:#212121;
`
const Logo = styled.img`

`





const MobMenu = ({
  display="none",
  onBackClick=()=>{},
 
  }) => {
     return <Cont display={display}> 
      <Logo src="./Cross.svg" onClick={onBackClick}/>

      </Cont>
      
  }
  
  export default MobMenu;