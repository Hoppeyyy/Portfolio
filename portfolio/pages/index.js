import react, {useState,useContext,useCallback,useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'
import HomeTitle from '../comp/HomeTitle'
import Content from '../comp/Content'
import Mouse from '../comp/Mouse'
import useCursorHandlers from "../hooks/useCursorHandlers";
import Work from '../comp/Work'





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

`
const WLeft = styled.div`
display:flex;
flex:1;
flex-direction:column;
justify-content:center;
align-items:center;
padding:1.5rem;
position: relative;
animation: mycard 4.5s 5;
animation-delay:0s;
@keyframes mycard {
  0%{
    top:-300;
    opacity:0;
  }
  50%{
    top:-300;
    opacity:0;
  }
  100% {
    top:0;
    opacity:1;
  }
}
`
const Middle = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
`
const Right = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
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
const ImgRobo = styled.img`
width:400px;
height:400px;
@media only screen and (max-width: 600px){
width:250px;
height:250px;
}

:hover{
  animation: myrobot 2.5s 1;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 2);
  @keyframes myrobot {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
}
`
const ImgAnim = styled.img`
width:400px;
height:400px;
position: relative;
animation: mymove 5s 5;
@keyframes mymove {
  from {left: -500px;}
  to {left: 0px;}
}
@media only screen and (max-width: 600px){
width:250px;
height:250px;
}
`
/* 
or overflow-x:hidden 

===== section child styling ========
section:nth-child(even) {
  background-color: teal;
  color: white;
}

*/



export default function Home() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const cursorHandlers = useCursorHandlers();


  return (
      <MainBox>
        {/* ================= Home ====================== */}
        <Section id="home">
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left {...cursorHandlers}>
          <HomeTitle/>
          </Left>
          <Right>
           
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
        {/* ================= About ====================== */}
        <Section id="about">
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left {...cursorHandlers}>
          <Content
          color="#3448F0"
          timer={cursorHandlers ?'running':'paused'}
          title="Hello World"
          text={"Hello and Welcome, Folks"}
          text2={"I am Chisaki Nakamura who has passion in designing and developing websites and currently is studying at Digital Design and Development Program at BCIT."}
          text3={"I specialized designing beautiful and functional UI/ UX designs for both web and mobile applications / websites and developing them professionally with the skills of collabolations and communications in a team."}
          />
          </Left>
          <Right >
          <ImgRobo src="./AboutMe_Robot.svg"/>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
         {/* ================= About Me ====================== */}
         <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left {...cursorHandlers}>
          <Content
          title="Design"
          timer={cursorHandlers ?'running':'paused'}
          color="#FF4E64"
          text={"Coming up with new innovative ideas and visualizing them are my favorite parts of my job."}
          text2={"To ensure that the final product will help people and be easy to use, I listen carefully to the needs and demands of users during the design process."}
          text3=""
          />
          </Left>
          <Middle>
            <Img src="./AboutMe.svg"/>
          </Middle>
          <Right {...cursorHandlers}>
          <Content
          title="Develop"
          timer={cursorHandlers ?'running':'paused'}
          color="#FF4E64"
          text={"In my free time, I enjoy reading coding documentations and watching programming crush courses on Youtube."}
          text2={"Languages are my favorite subject, and programming languages let me visualize the languages, which is pretty cool !"}
          text3=""
          />
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
          {/* ================= Work ====================== */}
          <Section id="work">
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <WLeft {...cursorHandlers}>
            <Work 
            src="./roomaView.svg"
            title="Rooma"
            about="web application"
            year="2021"
            />
            <Work
            src="./retheraphyView.svg"
            title="Retheraphy"
            about="mobile application"
            year="2020"
            />
          </WLeft>
          <Right>
            <ImgAnim src="./work.svg"/>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
           {/* ================= Contact ====================== */}
           <Section id="contact">
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left>

          </Left>
          <Right>
          
          </Right>
          </Wrap>
        </Section>
      </MainBox>
   
  )
}