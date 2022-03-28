import react, {useState,Component,useRef,useEffect} from 'react';
import * as React from 'react';
import styled ,{keyframes}from 'styled-components';
import {device} from '../device'


const Cont = styled.div`

display:flex;
flex-direction:column;
padding:1.5rem;


`

const Title = styled.h3`
font-family: Abril Fatface;
font-style: normal;
font-weight: normal;
margin:0;
color:${props=>props.color};
text-align:left;
font-size: 80px;
line-height: 108px;

@media only screen and (max-width: 1025px){
  font-size: 55px;
  line-height: 63px;
  }
@media only screen and (max-width: 820px){
  font-size: 40px;
  line-height: 48px;
  }
 

`

const Content = styled.p`
font-family: Cantarell;
font-style: normal;
font-weight: normal;
color: #EBEEF6;
text-align:left;
font-size: 24px;
line-height: 34px;
margin-bottom:0;
margin-top:0;


@media only screen and (max-width: 1025px){
  font-size: 18px;
  line-height: 32px;
  }
@media only screen and (max-width: 820px){
  font-size: 16px;
  line-height: 30px;
  }
@media only screen and (max-width: 600px){
  font-size: 14px;
  line-height: 20px;
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
  title="Title",
  color="",
  text="content text",
  text2="",
  text3="",
  slogan="",
  sgcolor="",
})=>{
 

return<Cont>
 <Title color={color}>{title} </Title>
<Content>{text}<br/>{text2}<br/>{text3}</Content>
<Content style={{fontWeight:"bold",color:sgcolor}}>{slogan}</Content>
</Cont>
}

export default HomeTitle