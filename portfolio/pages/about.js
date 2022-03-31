import react, {useState,useContext,useCallback,useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'
import Button from '../comp/Button'
import useCursorHandlers from "../hooks/useCursorHandlers";
import {useRouter} from 'next/router'
import Contact from '../comp/Contact';

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
height:80px; top:0; left:0; right:0px; 
background-color:#212121;
@media only screen and (max-width: 600px){
  height:50px; top:0; left:0; right:0px; 
  }
`

const ColWrap = styled.div`
min-width:100%;
height:80%;
display:flex;
flex-direction:column;
align-items:center;

`

const FooterBox = styled.div`
position:absolute; right:0;left:0;
height:70px; 
bottom:0;

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
@media only screen and (max-width: 600px){
  z-index:0;
}
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

const Set = styled.div`
width:60%;
display:flex;
flex-direction:column;
align-items:center;
padding:1.5rem;
@media only screen and (max-width: 600px){
  padding:0.3rem;
  }
`
const ToolBox = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:1rem;
justify-content:center;
padding:0.2rem;
@media only screen and (max-width: 600px){
  margin-top:0.5rem;
  }
`
const Sub = styled.p`
margin:0;
font-family: 'Raleway', sans-serif;
color: #aaa9ad;
font-size:14px;
margin-top:1rem;
line-height: 20px;
text-align:center;
align-items:center;
justify-content:center;
@media only screen and (max-width: 600px){
  margin-top:0.5rem;
  }
`
const Main = styled.h3`
margin:0;
font-family: 'Playfair Display', serif;
font-size:20px;
margin-top:1rem;
line-height: 24px;
text-align:center;
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
@media only screen and (max-width: 600px){
  margin-top:1rem;
  line-height: 20px;
  }
`
const Logo = styled.img`
margin:5px;
`
const Icon = styled.img`
width:30px;
height:30px;

`
const ProcessBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
@media only screen and (max-width: 800px){
 flex-wrap:wrap;
  }

`
const Process = styled.div`
width:80px;
height:80px;
border-radius:80px;
background-color:#212121;
box-shadow: 10px 4px  10px rgba(0,0,0,0.3), -10px 4px 10px rgba(0,0,0,0.2);
display:flex;
justify-content:center;
align-items:center;
@media only screen and (max-width: 600px){
  width:50px;
  height:50px;
  border-radius:50px;
  margin:10px;
  }
`
const Box = styled.div`
width:90%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media only screen and (max-width: 600px){
  padding:0.3rem;
  }
`
const ContactSection = styled.div`
min-width: 100%;
min-height: 100%;
display:flex;
justify-content:center;
align-items:center;
`
export default function About() {
  const [showMe, setShowMe] = useState(false);
  const [openContact, setContact] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const cursorHandlers = useCursorHandlers();

  const router = useRouter();
  const onContactClicked = ()=>{
    if(openContact === false){
      setContact(true);
    }else{
      setContact(false);
    }
 
  }
  return (
      <MainBox>
        {openContact ? (
         <ContactSection>
            <HeaderBox>
            <Nav 
            onMenuClick={toggle}
            bkimg2={openContact? "":"linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)"}
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
        bkimg2={openContact? "":"linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)"}
        ContactClick={onContactClicked}
        ContactMobClick={onContactClicked}
        bkimg4={openContact? "linear-gradient(-200deg, #4568dc 10%, #b06ab3 80%)":""}
            />
        </HeaderBox>
        <ColWrap>
          <Top>
          <AboutImg src="/AboutMe.svg"/>
          </Top>
          <Bot>
          <Set>
          <Main>What I do</Main>
            <Sub>
            I developed numerous UI/UX designs and frontend development projects during the past two years using various software and coding languages. 
            </Sub>
          </Set>
          <Set>
          <Main>Tools</Main>
            <ToolBox>
              <Logo src="/html.svg"/>
              <Logo src="/css.svg"/>
              <Logo src="/js.svg"/>
              <Logo src="/react.svg" style={{marginLeft:"-5px", marginRight:"-5px"}}/>
              <Logo src="/next.svg"/>
              <Logo src="/figma.svg"/>
              <Logo src="/php.svg"/>
              <Logo src="/node.svg"/>
              <Logo src="/firebase.svg"/>
              <Logo src="/vercel.svg"/>
              <Logo src="/docker.svg"/>
              <Logo src="/adobe.svg" style={{marginLeft:"-20px", marginRight:"-20px"}}/>
            </ToolBox>
          </Set>
          </Bot>
          <Box style={{padding:0}}>
              <Set>
              <Main>Design Process</Main>
              <Sub>
              Coming up with new innovative ideas and visualizing them are the favorite parts of my job. 
              To ensure that the final product will help people and be easy to use, I listen carefully to the needs and demands of users during the design process.
              </Sub>
              </Set>
              <ProcessBox>
                <Set>
                <Process>
                  <Icon src="/bulb.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Identify Problems and Solutions</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/research.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>User Research</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/wireframe.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Wireframing</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/design.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Low-Fi / High-Fi</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/usertest.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>User Testing</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/check.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Finalize Design</Sub>
                </Set>
              </ProcessBox>
            </Box>
            <Box style={{padding:0}}>
              <Set>
              <Main>Development Process</Main>
              <Sub>
              In the development process, I focus on writing maintainable, secured, fast to load code. 
              Also, I work closely with designers to make sure the design concepts are functioning on the browser to make the final product usable, functional, and beautiful.
              </Sub>
              </Set>
              <ProcessBox style ={{marginBottom:"5rem"}}>
                <Set>
                <Process>
                  <Icon src="/code.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Decide Platform and Environment</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/identify.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Identify Components and Functions</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/build.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Build Components, Functions, and Pages</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/debag.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Debagging</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/usertest.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>User Testing</Sub>
                </Set>
                <Set>
                <Process>
                  <Icon src="/debag.svg"/>
                </Process>
                <Sub style={{fontWeight:200}}>Debagging</Sub>
                </Set>
              </ProcessBox>
            </Box>
        </ColWrap>
        <FooterBox>
            <Footer/>
        </FooterBox>
        </Section>
        </MainBox>
        )}
      </MainBox>
   
  )
}