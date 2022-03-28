import react, {useState,useContext,useCallback,useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'
import Button from '../comp/Button'
import useCursorHandlers from "../hooks/useCursorHandlers";
import {useRouter} from 'next/router'



const MainBox = styled.div`
width:100vw;
height:100vh;
display:flex;
background-color:#212121;
flex-direction:column;
overflow-x:hidden;
overflow-y:scroll;
::-webkit-scrollbar {
    display: none;
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
const RowWrap = styled.div`
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
const ColWrap = styled.div`
min-width:100%;
height:80%;
display:flex;
flex-direction:column;
align-items:center;
`
const Left = styled.div`
display:flex;
flex:1;
align-items:left;
flex-direction:column;
padding-left:4rem;
justify-content:center;
`

const Right = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
`
const FooterBox = styled.div`
position:absolute; right:0;left:0;
height:70px; 
bottom:0;

`
const TextAnim = styled.div`
  background-image: linear-gradient(
    -225deg,
    #b06ab3 0%,
    #4568dc 50%,
    #b06ab3 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 6s linear infinite;
  display: inline-block;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

}
`
const Name = styled.h3`
margin:0;
font-family: 'Raleway', sans-serif;
font-weight:200;
color:#EBEEF6;
font-size:20px;
padding-bottom:1rem;
`
const Position = styled.h2`
margin:0;
font-family: 'Playfair Display', serif;
font-size:45px;

`
const Intro = styled.p`
margin:0;
max-width:80%;
font-family: 'Raleway', sans-serif;
font-weight:200;
color:#EBEEF6;
font-size:16px;
margin-top:1rem;
line-height: 24px;
`
const Profile = styled.img`
width:250px;
height:250px;
border-radius:10px;
-webkit-filter: grayscale(20%); /* Safari 6.0 - 9.0 */
filter: grayscale(20%);
:hover{
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
filter: grayscale(0%);
}
`

const Top = styled.div`
width:100%;
height:350px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
margin-top:1rem;
background-image: linear-gradient(
  -225deg,
  #02aab0  0%,
  #00cdac 50%,
  #02aab0  100%
);
z-index:1;

`
const AboutImg = styled.img`
width:250px;
height:250px;
z-index:3;

`
const Bot = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Para1 = styled.div`
display:flex;
flex-direction:row;
padding:1.5rem;
`
const Set = styled.div`
display:flex;
flex-direction:column;
`
const ToolBox = styled.div`
width:200px;
height:80px;
display:flex;
flex-wrap:wrap;
`
const Sub = styled.p`
width:50%;
margin:0;
font-family: 'Raleway', sans-serif;
font-weight:200;
color: #aaa9ad;
font-size:14px;
margin-top:1rem;
line-height: 20px;
text-align:left;
`
const Main = styled.h3`
width:50%;
margin:0;
font-family: 'Playfair Display', serif;
font-size:20px;
margin-top:1rem;
line-height: 24px;
text-align:left;
background-image: linear-gradient(
  -200deg,
  #e2e2e3 0%,
  #d4d3d5 5%,
  #c6c5c8 8%,
  #b8b7ba 20%,
  #aaa9ad 30%,
  #8b8b8e 60%,
  #6e6d70 100%
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

`
export default function About() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const cursorHandlers = useCursorHandlers();

  const router = useRouter();
  return (
      <MainBox>
          {/* ================= About ====================== */}
       <Section>
          <ColWrap>
          <Top>
          <AboutImg src="/AboutMe.svg"/>
          </Top>
          <Bot>
          <Para1>
          <Set>
          <Main>What I do</Main>
            <Sub>
            I developed numerous UI/UX designs and frontend development projects during the past two years using various software and coding languages. 
            </Sub>
          </Set>
          <Set>
          <Main>Tools</Main>
            <ToolBox>
              
            </ToolBox>
          </Set>
          </Para1>
          </Bot>
          </ColWrap>
        </Section>
        {/* ================= About ====================== */}
        <Section id="about">
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <RowWrap>
          <Left>
          <Profile src="/MyProfile.JPG"/>
          </Left>
          <Right>
           
          </Right>
          </RowWrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
     
      </MainBox>
   
  )
}