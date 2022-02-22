import styled,{keyframes} from 'styled-components'
import * as React from 'react';

const Cont = styled.div`
width:550px;
height:250px;
display:flex;
flex-direction:column;
background-color:#EBEEF6;
padding:1.5rem;
margin:10px;
border-radius: 20px;
:hover{
  transform: scale(1.15);
  margin-bottom:20px;
  margin-top:20px;
  background-color:#7B8EFF;
}
`

const Img = styled.img`

`
const TextArea = styled.div`
width:95%;
display:flex;
flex-direction:row;
padding:0.8rem;
justify-content:space-between;

`
const SubArea = styled.div`
display:flex;
flex-direction:row;

`
const Title = styled.h4`
font-family: Raleway;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 28px;
color: #212121;
margin:0;

`
const Sub = styled.h5`
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 39px;
color: #212121;
margin:0;
margin-left:10px;

`
const Work = ({
src="",
title="Rooma",
about="web application",
year="2021"
})=>{
  return<Cont>
    <Img src={src}/>
    <TextArea>
      <Title>{title}</Title>
      <SubArea>
      <Sub>{about}</Sub>
      <Sub>{year}</Sub>
      </SubArea>  
    </TextArea>
  </Cont>

}

export default Work