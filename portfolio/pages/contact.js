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

const Left = styled.div`
display:flex;
flex:1;
align-items:left;
flex-direction:column;
padding-left:6rem;
justify-content:center;
@media only screen and (max-width: 600px){
  padding-left:0;
}
`

const Right = styled.div`
display:flex;
flex:1;
justify-content:left;
align-items:center;
`
const FooterBox = styled.div`
position:absolute; right:0;left:0;
height:70px; 
bottom:0;

`
const Profile = styled.img`
width:250px;
height:250px;
border-radius:10px;
`
const InfoTitle = styled.h3`
margin:0;
font-family: 'Raleway', sans-serif;
font-weight:200;
color:#EBEEF6;
font-size:20px;
padding:0.5rem;
`
const Info = styled.p`
margin:0;
font-family: 'Raleway', sans-serif;
font-weight:200;
color:#EBEEF6;
font-size:16px;
line-height: 24px;
padding:0.5rem;
`
const Set = styled.div`
display:flex;
flex-direction:row;

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
            <Nav 
            onMenuClick={toggle}
            bkimg4="linear-gradient(
              -200deg,
              #4568dc 10%,
              #b06ab3 80%
            )"
            />
          </HeaderBox>
          <RowWrap>
          <Left>
           <Profile src="/MyProfile.JPG"/>
          </Left>
          <Right>
          <Set>
            <InfoTitle>Name</InfoTitle>
            <Info>Chisaki Nakamura</Info>
          </Set>
          </Right>
          </RowWrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
      </MainBox>
   
  )
}