import react, {useRef} from 'react';
import * as React from 'react';
import styled from 'styled-components';

const Cont = styled.section`
@media only screen and (max-width: 600px){
  display:none;
  }
display:flex;
flex-direction:row;
justify-content:space-between;

`

const IconBox = styled.div`
padding-left:2rem;

`
const TextCont = styled.div`
padding-right:2rem;
`
const Text = styled.p`
color:#999CA0;
margin-top:5px;
font-family: 'Raleway', sans-serif;
font-weight:200;
font-size:14px;
`
const Footer = ({

})=>{
    const LinkedIn = "/LinkedIn.svg"
    const LinkedIn_hover = "/LinkedIn_hover.svg"
    const Insta = "/Insta.svg"
    const Insta_hover = "/Insta_hover.svg"
    const Behance = "/Behance.svg"
    const Behance_hover = "/Behance_hover.svg"
    const Github = "/github.png"
    const Github_hover = "/github_hover.png"

    const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
      const imageRef = useRef(null);
      return (
        <img 
          onMouseOver={() => {
            imageRef.current.src = secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src= primaryImg;
          }}
          src={primaryImg} 
          alt=""
          ref={imageRef}
          width="30px"
          height="30px"
          
        />
      )
    }
    
    const ImageChangeOnMouseOver = () => {
      return (
        <div>
          <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank"><ImageToggleOnMouseOver
            primaryImg={LinkedIn}
            secondaryImg={LinkedIn_hover}
            alt="LinkedIn" /></a>
          &nbsp; &nbsp; &nbsp;
          <a href="https://www.instagram.com/hoppeyyy/?hl=ja" target="_blank"><ImageToggleOnMouseOver
            primaryImg={Insta}
            secondaryImg={Insta_hover}
            alt="Instagram" /></a>
          &nbsp; &nbsp; &nbsp;
          <a href="https://www.behance.net/hoppeyyye6a4" target="_blank"><ImageToggleOnMouseOver
            primaryImg={Behance}
            secondaryImg={Behance_hover}
            alt="Behance" /></a>
          &nbsp; &nbsp; &nbsp;
          <a href="https://github.com/Hoppeyyy" target="_blank"><ImageToggleOnMouseOver
            primaryImg={Github}
            secondaryImg={Github_hover}
            alt="Github" /></a>
        </div>
      )
    }
  return<Cont>
      <IconBox>
      <ImageChangeOnMouseOver/>
      </IconBox>
      <TextCont>
        <Text>Designed and Developed by Chisaki Nakamura | 2022</Text>
      </TextCont>
  </Cont>
}

export default Footer