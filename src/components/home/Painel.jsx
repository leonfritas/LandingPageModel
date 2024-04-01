import React from 'react'
import styled from 'styled-components'
import '../App.css'
import './css/painel.css'
import SetaImg from './img/seta.png'


export default function Painel(){

    const imgPainelCarouselLista = document.getElementsByClassName('imgPainelCarousel');
    const painelButtonPrev = document.getElementsByClassName('painelButtonPrev');
    const painelButtonNext = document.getElementsByClassName('painelButtonNext');
    const painelIconIndicador = document.getElementsByClassName('painelIconIndicador')
    
    let imagemAtual = 0;

    function handleLeftClick(){  
        console.log(imagemAtual)
        console.log(imgPainelCarouselLista.length -1)
        if(imagemAtual > 0){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual--
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }else if(imagemAtual == 0){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual = imgPainelCarouselLista.length -1;
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }
        if (imagemAtual == 0){ painelIconIndicador[0].innerHTML = 'O o o o'} else
        if (imagemAtual == 1){ painelIconIndicador[0].innerHTML = 'o O o o'} else
        if (imagemAtual == 2){ painelIconIndicador[0].innerHTML = 'o o O o'} else 
        if (imagemAtual == 3){ painelIconIndicador[0].innerHTML = 'o o o O'}                     
    }

    function handleRightClick(){        
        if(imgPainelCarouselLista.length -1 > imagemAtual){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual++            
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }else if(imgPainelCarouselLista.length -1 == imagemAtual){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual = 0;
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }                  
        if (imagemAtual == 0){ painelIconIndicador[0].innerHTML = 'O o o o'} else
        if (imagemAtual == 1){ painelIconIndicador[0].innerHTML = 'o O o o'} else
        if (imagemAtual == 2){ painelIconIndicador[0].innerHTML = 'o o O o'} else 
        if (imagemAtual == 3){ painelIconIndicador[0].innerHTML = 'o o o O'}                   
    }


    return(
        <Main id='painel'>                        
                <div className='painelCarousel'>
                    <img className='imgPainelCarousel imgPainelCarouselMostrar' src="https://wallpaper-house.com/data/out/6/wallpaper2you_122644.jpg" alt="" />
                    <img className='imgPainelCarousel' src="https://static.vecteezy.com/ti/vetor-gratis/p3/2082573-material-fundo-preto-moderno-com-folhas-de-papel-sobrepostas-em-cmyk-cores-modelo-para-o-seu-negocio-abstrato-widescreen-background-vetor.jpg" alt="" />
                    <img className='imgPainelCarousel' src="https://img.freepik.com/fotos-premium/modelo-de-plano-de-fundo-panorama-widescreen-abstrato-patterh-vermelho_7954-26466.jpg?w=1380" alt="" />
                    <img className='imgPainelCarousel' src="https://img.freepik.com/fotos-premium/modelo-de-plano-de-fundo-widescreen-de-padrao-de-arranhao-verde_7954-26543.jpg?w=1380" alt="" />
                    <button className='painelButtonPrev' onClick={handleLeftClick} ><img src="/static/image/setaCarousel.png" alt="Scroll Left" /></button>
                    <button className='painelButtonNext' onClick={handleRightClick}><img src="/static/image/setaCarousel.png" alt="Scroll Right" /></button>
                    <button className='painelIconIndicador'>O o o o</button>
                </div>            
            <img className='setaBaixo' src={SetaImg} alt=''/>
                    
        </Main>
    )
}


const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
//padding-top: 80px;
// background: linear-gradient(#f5f5f5, #ADD8E6);
background: #f5f5f5;
position: relative;

`
