import react, {useState} from 'react';
import styled from 'styled-components';
import Nav from '../comp/Nav'
import {device} from '../comp/device'

const Cont = styled.div`
width:100%;
height:100%;
background-color:#212121;
`
export default function Test() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <Cont>
      <Nav onMenuClick={toggle}/>
    </Cont>
  )
}