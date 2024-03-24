import React from 'react'
import styled from 'styled-components'
import '../App.css'
import './css/painel.css'
import SetaImg from './img/seta.png'


export default function Painel(){
    return(
        <Main id='painel'>            
            <DivContainer className='divContainer'>
                <DivConteudo>
                    <H2Titulo>   
                        {/* Hortifruti dos franceses: Sabor da Natureza em sua Mesa                      */}
                    </H2Titulo>                    
                </DivConteudo>
                
                {/* <DivPainel> */}
                    {/* <DivBoasVindas>
                        <div>
                            <H2BemVindo>Bem-vindo(a) a Saúde Mental Manaus</H2BemVindo>
                            <TxtBemVindo className='robotoLight'>Meu nome é Lincoln Almeida, PSICÓLOGO por formação e ESPECIALISTA EM SAÚDE MENTAL.
                                Para saber um pouco mais sobre mim e minha carreira na pscicologia clique na aba Sobre.</TxtBemVindo>
                        </div>
                        <A target='_blank' href='https://wa.me/+5592994235646'>
                            <BtnAgendar>
                                Agende já sua consulta
                            </BtnAgendar>
                        </A> */}
                        
                    {/* </DivBoasVindas>
                    
                    <DivConteudo>
                     <Img src={ImgPainel}/>
                    </DivConteudo>
                </DivPainel>  
                <H2Titulo>
                    Equilíbrio. Transformação. Liberdade. 
                </H2Titulo> */}
                

                
            </DivContainer> 
            <SetaBaixo className='setaBaixo' src={SetaImg}>
            </SetaBaixo>        
        </Main>
    )
}


const SetaBaixo = styled.img`
position: absolute;
bottom: 150px;
margin: auto;
right: 50%;
left: 50%;
width: 50px;
`


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
const DivContainer = styled.div`

width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;



`

const DivPainel = styled.div`
width: 100%;
display: flex;
height: 100%;
align-items: center;
justify-content: space-around;
position: relative;

`



const DivConteudo = styled.div`

width: 600px;
display: flex;
flex-direction: column;
justify-content: center;
height: 500px;



`

const H2Titulo = styled.h2`

font-size: 50px;
text-align: center;
color: #649105;

`

const BtnAgendar = styled.button`

text-align: center;
height: 80px;
width: 300px;
border: none;
background-color: #4682B4;
color: white;
font-weight: 600;
border-radius: 30px;
cursor: pointer;
font-size:22px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
transition: 300ms ease;

&:hover{
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
&:active{
    background-color: white;
}

`

const A = styled.a`
color: white;
height: 80px;
width: 280px;
margin-top: 80px;
border-radius: 30px;
`