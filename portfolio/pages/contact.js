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
padding-left:6rem;
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
`


export default function Home() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const cursorHandlers = useCursorHandlers();

  const router = useRouter();
  return (
      <MainBox>
        {/* ================= Home ====================== */}
        <Section id="home">
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <RowWrap>
          <Left>
           
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