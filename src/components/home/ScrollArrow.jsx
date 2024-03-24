import Seta from './img/setaSubir.png'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import './css/ScrollArrow.css'


const ScrollArrow = () => {

    const [setaVoltar, setSetaVoltar] = useState(false)

    useEffect(() => {
        const handleScroll = ()=>{
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            setSetaVoltar(scrollPosition > 0)
        }

        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return(
        <ScrollArrowContainer className={`${setaVoltar ? 'visible' : ''}`}>
            <a href='#painel'><ImgSeta src={Seta} alt="Seta para baixo" /></a>
        </ScrollArrowContainer>
    )
}

const ScrollArrowContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;

const ImgSeta = styled.img`
width: 100px;
position: fixed;
right: 10px;
bottom: 10px;`

export default ScrollArrow;