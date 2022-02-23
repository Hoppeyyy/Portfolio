import Footer from '../comp/Footer'
import Nav from '../comp/Nav'
import Content from '../comp/Content'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import React,{useState} from 'react';
import Back from "../comp/Back"

const MainBox = styled.div`
width:100%;
height:100vh;
display:flex;
background-color:#212121;
@media only screen and (max-width: 600px){
  flex-direction:column;
  overflow-x:hidden;
  overflow-y:scroll;
  ::-webkit-scrollbar {
    display: none;
}
  }
@media only screen and (min-width 600px){
  flex-direction:row;
  overflow-x:scroll; 
  overflow-y:none;
  
}
`
const Section = styled.section`
min-width: 100%;
min-height: 100%;
display: flex;
align-items: center;
background-color:#212121;
`
const HeaderBox = styled.div`
position:absolute; 
height:50px; top:0; left:0; right:0px; 

`
const Wrap = styled.div`
min-width:100%;
height:80%;
display:flex;
@media only screen and (max-width: 600px){
flex-direction:column;
justify-content:center;
align-items:center;
}
@media only screen and (min-width 600px){
  flex-direction:row;
}
`
const Left = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
padding-left:1rem;
flex-direction:column;
`
const Right = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
flex-direction:column;
`
const FooterBox = styled.div`
position:absolute; right:0;left:0;
height:70px; bottom:0;

`
const Img = styled.img`
width:400px;
height:400px;
@media only screen and (max-width: 700px){
width:250px;
height:250px;
}
`
const Button = styled.div`
width:180px;
height:60px;
background:#7B8EFF;
border-radius:30px;
color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
font-family: Cantarell;
font-style: normal;
font-weight: normal;
font-size:20px;
:hover{
  background:#6853E9;
}
`
const BackCont = styled.div`
width:100%;
margin-left:3rem;
margin-top:-4rem;
`
export default function Rooma(){
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const router = useRouter();
  return(<MainBox>
    <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left>
          <BackCont>
          <Back
          src="./rooma_back.svg"
          />
          </BackCont>
          <Content
          color="#924FC3"
          title="Rooma"
          text={"Rooma is a scheduling and communication aids application for people who live together. The app is designed for people to communicate with each other regarding house rules and chores. Also, on the app, people would be able to find new roommates."}
          slogan={"Your Stress-Free Living Starts Now"}
          sgcolor="#FFC44F"
          />
          
          </Left>
          <Right>
           <Img src="./rooma.svg"/>
           <Button><a href="https://rooma.ca/login" target="_blank" rel="noreferrer">Visit Rooma</a></Button>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
  </MainBox>

  )
}