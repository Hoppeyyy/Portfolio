import react, {useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import Link from 'next/link'

const BtnCont = styled.div`
padding:1.5rem;

`
const Btn = styled.div`
width:130px;
height:35px;
border:0.5px #FFFFFF solid;
text-align:center;
padding:0.5rem;
color:#FFFFFF;
font-family: 'Raleway', sans-serif;
font-weight:200;
font-size:14px;
:hover{
  background-image: linear-gradient(
    -225deg,
    #06beb6 0%,
    #48b1bf 50%,
    #06beb6 100%
  );
  border:none;
}
`
const Button = ({
  src=""

})=>{
  const router = useRouter();
 
return<Link href="/projects">
<BtnCont>
  <Btn>
    Check Projects
  </Btn>
</BtnCont>
</Link>
}

export default Button