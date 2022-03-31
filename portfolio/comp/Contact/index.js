import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

// ============ CSS ============== //
const Cont = styled.div`    
  width:85vw;
  height:75vh;
  display:flex;
  flex-direction:column;
  background: rgba(255, 255, 255, 0.05);
  border-radius:10px;
  padding:1.5rem;
  z-index:3;
`
const ColWrap = styled.div`
height:90%;
display:flex;
flex-direction:column;
`
const Top = styled.div`
width:100%;
height:10%;
display:flex;
justify-content:right;
`
const Close = styled.img`
width:30px;
height:30px;
`
const Bot = styled.div`
width:100%;
height:80%;
display:flex;
flex-direction:column;
align-items:center;
`
const Left = styled.div`
display:flex;
flex-direction:column;
flex:1;
justify-content:center;
align-items:center;
`
const Right = styled.div`
width:70%;
display:flex;
flex-direction:column;
flex:1;
justify-content:center;
align-items:center;
`
const Profile = styled.img`
width:250px;
height:250px;
border-radius:10px;
@media only screen and (max-width: 600px){
  width:200px;
  height:200px;
  }
`
const ContactMe = styled.h2`
margin:0;
margin-bottom:5px;
font-family: 'Playfair Display', serif;
font-size:24px;
line-height: 30px;
text-align:center;
background-image: linear-gradient(
  -225deg,
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
display: inline-block;
@media only screen and (max-width: 600px){
  margin-top:1rem;
  }
`
const Set = styled.div`
min-width:200px;
display:flex;
flex-direction:row;
align-items:left;
justify-content:left;
padding:0.3rem;
@media only screen and (max-width: 600px){
  flex-direction:column;
  }
`
const Title = styled.h3`
margin:0;
font-family: 'Playfair Display', serif;
font-size:18px;
color:#4568dc;
margin-right:0.5rem;

`
const Content = styled.p`
margin:0;
margin-left:0.5rem;
margin-top:5px;
font-family: 'Raleway', sans-serif;
font-size:16px;
color:#EBEEF6;
`
const EmailContent = styled.p`
margin:0;
margin-left:0.5rem;
margin-top:3px;
font-family: 'Raleway', sans-serif;
font-size:16px;
color:#EBEEF6;
text-decoration:underline;
:hover{
  color:#4568dc;
}
`
const Contact =({
CloseClick=()=>{}
})=>{
  return (
    <Cont> 
        <ColWrap>
        <Top>
          <Close src="Close.svg" onClick={CloseClick}/>
        </Top>
        <Bot>
          <Left>
          <ContactMe>Get In Touch!</ContactMe>
          <Profile src="/MyProfile.JPG"/>
          </Left>
          <Right>
            <Set>
              <Title>Name</Title>
              <Content>Chisaki Nakamura</Content>
            </Set>
            <Set>
              <Title>Email</Title>
              <EmailContent><a href="mailto:hoppeyyy@gmail.com">hoppeyyy@gmail.com</a></EmailContent>
            </Set>
          </Right>
        </Bot>
        </ColWrap>
    </Cont>
  );
}

export default Contact;