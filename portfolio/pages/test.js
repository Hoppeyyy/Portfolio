import react, {useState} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'
import HomeTitle from '../comp/HomeTitle'

const Cont = styled.div`
width:100vw;
height:100vh;
background-color:#212121;
`
const HeaderBox = styled.div`
position:absolute; right:0;left:0;
height:50px; top:0;
`
const FooterBox = styled.div`
position:absolute; right:0;left:0;
height:50px; bottom:0;
`
const MainBox = styled.section`
width:100%;
height:80%;
display:flex;
position:absolute; 
right:0;
left:0;
top:50px;
bottom:50px;
@media only screen and (max-width: 600px){
  flex-direction:column;

  }
@media only screen and (min-width 600px){
  flex-direction:row;
  overflow:hidden;
  
}


`
const Left = styled.div`
display:flex;
flex:1;
`
const Right = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
`
export default function Test() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <Cont>
      <HeaderBox>
      <Nav onMenuClick={toggle}/>
      </HeaderBox>
      <MainBox>
        <Left>

        </Left>
        <Right>
          <HomeTitle/>
        </Right>
      </MainBox>
      <FooterBox>
      <Footer/>
      </FooterBox>
    </Cont>
  )
}