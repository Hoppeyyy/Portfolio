import react, {useState,Component,useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {device} from '../device'

const Cont = styled.div`
padding:1rem;
`

const Title = styled.h3`
font-family: Cantarell;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 35px;
color: #FFB319;
text-align:left;

`
const HomeTitle = ({

})=>{
return<Cont>
   <Title>
   Looking For a Web Developer <br/>
   Understanding UI / UX Design ?
  </Title>
</Cont>
}

export default HomeTitle