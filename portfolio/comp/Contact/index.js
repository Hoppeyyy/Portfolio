import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

// ============ CSS ============== //
const Cont = styled.div`    
  width:100%;
  height:90%;
  display:flex;
  flex-direction:column;
`

const ContTitle = styled.h3`
font-family: Abril Fatface;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 67px;
color: #FFB319;
`


const Form = styled.form`
max-width: 500px;
letter-spacing: 1px;
`
const Input = styled.input`
  width: 100%; 
  height: 2em;
  padding:1em;
  box-sizing: border-box;
  margin-bottom: 25px;  
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  background:transparent;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #999CA0;
`

const TextArea = styled.textarea`
  width: 100%; 
  height: 250px;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #FFFFFF;
  background:transparent;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #999CA0;
`

const BttnCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:2em;
 
`
const Button = styled.input`
width: 158px;
height: 76px;
background: rgba(233, 232, 232, 0.4);
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 20px;
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
:hover{
  background: rgba(255, 179, 25, 0.85);
border: 1px solid #FFFFFF;
box-sizing: border-box;
}
`

const Contact =({

})=>{
  
  function ready() {
    document.addEventListener("DOMContentLoaded", ready);
    alert('DOM is ready');
    document.querySelector('#contact').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
}


  return (
    <Cont> 
      <ContTitle>Let's Talk!</ContTitle>
      <Form action="hoppeyyy.com" method="post" enctype="text/plain" id="contact">
        <Input type="text" name="name" placeholder='Name' required />
        <Input type="text" name="email" placeholder='Email' required />
        <TextArea type="text" name="comment" placeholder='Leave me messages :)' required />
        <BttnCont>
          <Button 
            type="submit"
            value="Send"
          />
        </BttnCont>
      </Form>
    </Cont>
  );
}

export default Contact;