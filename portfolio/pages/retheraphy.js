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
@media only screen and (max-width: 600px){
width:250px;
height:250px;
}
`
const Button = styled.div`
width:200px;
height:60px;
background:#9AE3D2;
border-radius:30px;
margin-top:20px;
color:#414141;
display:flex;
justify-content:center;
align-items:center;
font-family: Cantarell;
font-style: normal;
font-weight: normal;
font-size:20px;
:hover{
  background:#3BA99C;
  color:#FFFFFF;
}
`
const BackCont = styled.div`
width:100%;
margin-left:3rem;
margin-top:-4rem;
`
export default function Retheraphy(){
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
          src="./retheraphy_back.svg"
          />
          </BackCont>
          <Content
          color="#40B04D"
          title="Retheraphy"
          text={"A goal of the app is to be your therapist that shows the potential illnesses you may have and improve your mental health."}
          text2={" Our small-scale test helps you to check your mental health condition. We analyze and evaluate your answers from the test you take and show your percentages of the chance to have the top 3 mental illnesses."}
          slogan={"Check and Take Care Your Mental Health"}
          sgcolor="#FFC44F"
          />
          
          </Left>
          <Right>
           <Img src="./retheraphy.svg"/>
           <Button><a href="https://final-project-retheraphy.vercel.app/" target="_blank" rel="noreferrer">Visit Retheraphy</a></Button>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
  </MainBox>

  )
}