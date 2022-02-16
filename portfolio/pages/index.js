import react, {useState} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'
import HomeTitle from '../comp/HomeTitle'

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




  return (
      <MainBox>
        {/* ================= Home ====================== */}
        <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left>
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
        <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left>

          </Left>
          <Right>
            <HomeTitle/>
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
          <Left>

          </Left>
          <Right>
            <HomeTitle/>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
          {/* ================= Work ====================== */}
          <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left>

          </Left>
          <Right>
            <HomeTitle/>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
           {/* ================= Contact ====================== */}
           <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <Wrap>
          <Left>

          </Left>
          <Right>
            <HomeTitle/>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
      </MainBox>
   
  )
}