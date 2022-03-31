import Footer from '../comp/Footer'
import Nav from '../comp/Nav'
import Content from '../comp/Content'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import React,{useState} from 'react';
import Back from "../comp/Back"
import Contact from '../comp/Contact';
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
align-items:center;
padding:1.5rem;
padding-top:0;
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
@media only screen and (max-width: 600px){
  padding-bottom:1.5rem;
  }
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
background:#E39A9A;
border-radius:30px;
color:#414141;
display:flex;
justify-content:center;
align-items:center;
font-family: Cantarell;
font-style: normal;
font-weight: normal;
font-size:20px;
:hover{
  background:#C34F4F;
  color:#FFFFFF;
}
@media only screen and (max-width: 600px){
  width:180px;
  height:50px;
  }
`
const BackCont = styled.div`
width:100%;
margin-left:3rem;

`
const ContactSection = styled.div`
min-width: 100%;
min-height: 100%;
display:flex;
justify-content:center;
align-items:center;
`
export default function Rooma(){
  const [showMe, setShowMe] = useState(false);
  const [openContact, setContact] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const router = useRouter();
  const onContactClicked = ()=>{
    if(openContact === false){
      setContact(true);
    }else{
      setContact(false);
    }
 
  }
  return(<MainBox>
              {openContact ? (
         <ContactSection>
            <HeaderBox>
            <Nav 
            onMenuClick={toggle}
            bkimg3={openContact? "":"linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)"}
            ContactClick={onContactClicked}
            ContactMobClick={onContactClicked}
            bkimg4={openContact? "linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)":""}
            />
          </HeaderBox>
           <Contact CloseClick={onContactClicked}/>
           <FooterBox>
            <Footer/>
          </FooterBox>
        </ContactSection>):(
    <MainBox>
    <Section>
          <HeaderBox>
            <Nav
              onMenuClick={toggle}
              bkimg3={openContact? "":"linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)"}
              ContactClick={onContactClicked}
              ContactMobClick={onContactClicked}
              bkimg4={openContact? "linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)":""}
            />
          </HeaderBox>
          <Wrap>
          <Left>
          <BackCont>
          <Back
          src="./watchflix_back.svg"
          />
          </BackCont>
          <Content
          color="#C34F4F"
          title="Watchflix"
          text={"Watchflix is a platform that provides movie lists with movie descriptions by using Kaggle dataset. Also, Watchflix can be the discussion place where users can make comments on the movies."}
          slogan={"Find and Share your Favorite Movies"}
          sgcolor="#FFC44F"
          />
          
          </Left>
          <Right>
           <Img src="./watchflix_img.svg"/>
           <Button><a href="https://github.com/Hoppeyyy/Watchflix" target="_blank" rel="noreferrer">Visit Watchflix</a></Button>
          </Right>
          </Wrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
        </MainBox>
        )}
  </MainBox>

  )
}