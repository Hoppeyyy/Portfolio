import react, {useState} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'
import Footer from '../comp/Footer'

const Cont = styled.div`
width:100vw;
height:100vh;
background-color:#212121;
`
const Main = styled.div`
width:100%;
height:80%;

`
export default function Test() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <Cont>
      <Nav onMenuClick={toggle}/>
      <Main>

      </Main>
      <Footer/>
    </Cont>
  )
}