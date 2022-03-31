import react, {useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
width:80px;
height:40px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
const Img = styled.img`
width:22px;
height:22px;
`
const Text = styled.p`
font-family: Cantarell;
font-style: normal;
font-size: 16px;
color: #EBEEF6;
`
const Back = ({
  src=""

})=>{
  const router = useRouter();
 
return<Cont>
  <Img src={src}  onClick={()=>router.push("/projects")}/>
  <Text>Back</Text>
</Cont>
}

export default Back