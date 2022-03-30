import react, {useState,useContext,useCallback,useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'
import Work from '../comp/Work'
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
  #36d1dc  0%,
  #5b86e5 50%,
  #36d1dc  100%
);

z-index:1;
`
const Bot = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:2rem;
`
const ProjectImg = styled.img`
width:250px;
height:250px;
z-index:3;
`
const Main = styled.h3`
margin:0;
font-family: 'Playfair Display', serif;
font-size:32px;
margin-top:1rem;
line-height: 45px;
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
  }
`
const Set = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
padding:1rem;
margin-bottom:5rem;
@media only screen and (max-width: 600px){
  padding:0.3rem;
  flex-direction:column;
  }
`
export default function Projects() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const cursorHandlers = useCursorHandlers();

  const router = useRouter();
  return (
      <MainBox>
        {/* ================= Projects ====================== */}
        <Section>
          <HeaderBox>
            <Nav onMenuClick={toggle}/>
          </HeaderBox>
          <ColWrap>
            <Top>
              <ProjectImg src="/work.svg"/>
            </Top>
            <Bot>
            <Main>Projects</Main>
            <Set>
            <Work
            src="/Watchflixlogo.svg"
            title="Watchflix"
            about="web application"
            year="2022"
            width="200px"
            height="150px"        
            onClick={()=>router.push("/watchflix")}
            />
            <Work
            src="/Roomalogo.svg"
            title="Rooma"
            about="web application"
            year="2021"
            width="150px"
            height="150px"
            onClick={()=>router.push("/rooma")}
            />
             <Work
            src="/Retheraphylogo.svg"
            title="Retheraphy"
            about="mobile application"
            year="2020"
            width="200px"
            height="150px"        
            onClick={()=>router.push("/retheraphy")}
            />
            </Set>
            </Bot>
          </ColWrap>
          <FooterBox>
            <Footer/>
          </FooterBox>
        </Section>
      </MainBox>
   
  )
}