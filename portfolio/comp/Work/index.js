import styled,{keyframes} from 'styled-components'
import * as React from 'react';

const Cont = styled.div`
position: relative;
width: 300px;
height: 350px;
background: rgba(255, 255, 255, 0.05);
margin: 20px;
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(10px);
@media only screen and (max-width: 820px){
width: 210px;
height: 350px;
  }
`
const Content = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transition: 0.5s;
:hover{
  transform: translateY(-20px);
}

`
const Img = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
padding:2rem;
`
const ImgBx = styled.div`
position: relative;
width:${props=>props.width};
height:${props=>props.height};
`
const TextArea = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:0.8rem;
justify-content:center;
align-items:center;

`
const SubArea = styled.div`
display:flex;
flex-direction:column;
padding-top:0.5rem;
align-items:center;
`
const Title = styled.h4`
font-family: 'Playfair Display', serif;
font-size: 32px;
line-height: 42px;
margin:0;
color:#EBEEF6;
opacity:0.9;

`
const Sub = styled.h5`
font-family: 'Raleway', sans-serif;
font-weight:200;
font-size: 16px;
color: #EBEEF6;
margin:0;
margin-top:5px;
`
const Work = ({
src="",
title="Rooma",
about="web application",
year="2021",
width="150px",
height="150px",
onClick=()=>{},
})=>{
  return<Cont onClick={onClick}>
    <Content>
    <ImgBx width={width} height={height}>
    <Img src={src}/>
    </ImgBx>
    <TextArea>
      <Title>{title}</Title>
      <SubArea>
      <Sub>{about}</Sub>
      <Sub>{year}</Sub>
      </SubArea>  
    </TextArea>
    </Content>
  </Cont>

}

export default Work