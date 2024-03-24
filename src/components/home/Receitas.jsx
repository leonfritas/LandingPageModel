import React, { useEffect, useRef } from 'react'
import './css/receitas.css'


export default function Receitas() {

    const containerRef = useRef(null);
    const previousYRef = useRef(window.pageYOffset);
  
    useEffect(() => {
      const cards = containerRef.current.querySelectorAll('.cardReceita');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cardAnimation');            
          } else {
            if (previousYRef.current > window.pageYOffset) {
              entry.target.classList.remove('cardAnimation');
            }
          }
        });
        previousYRef.current = window.pageYOffset;
      }, observerOptions);
  
      cards.forEach(card => {
        observer.observe(card);
      });
  
      return () => {
        cards.forEach(card => {
          observer.unobserve(card);
        });
      };
    }, []);


  return(
    <main id='receitas' ref={containerRef}>
      <div className='mainCardReceitas'>
        <h2 className='tituloReceitas'>Receitas</h2>
        <div className='divCardsReceitas'>
          <a href="#receitaTop">
            <div className='cardReceita'>
              <div className='divImgCardReceitas'>
                <img src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/06/receita-de-salada-de-pepino-com-tomate.jpg" alt="" />
              </div>
              <h4 className='titleCardReceitas'>Salada de Verão</h4>
              <p className='textCardReceitas'>Uma salada  com Tomate, Pepino e Manjericão, refrescante e colorida, perfeita para os dias quentes de verão.</p>
            </div>
          </a>
          <a href="#receitaCenter">
            <div className='cardReceita'>
              <div className='divImgCardReceitas'>
                <img src="https://i.panelinha.com.br/i1/64-bk-4508-cp2022-12-08-0882.webp" alt="" />
              </div>  
              <h4 className='titleCardReceitas'>Sopa de Abóbora Assada</h4>
              <p className='textCardReceitas'>Uma sopa cremosa e reconfortante, feita com abóbora fresca assada e temperos aromáticos.</p>
            </div>
          </a>
          <a href="#receitaBottom">
            <div className='cardReceita'>
              <div className='divImgCardReceitas'>
                <img src="https://www.receiteria.com.br/wp-content/uploads/chips-assado-de-batata-doce-e-alecrim-730x548.jpeg" alt="" />
              </div>
              <h4 className='titleCardReceitas'>Chips de Batata Doce Assada</h4>
              <p className='textCardReceitas'>Um petisco crocante e saudável feito com fatias finas de batata doce assadas no forno.</p>
            </div>
          </a>
          
        </div>
        <div className='divAlimentacaoSaudavelText'>
              <h2>Alimentação Saudável: Um Cuidado Diário com Você Mesmo</h2>
              <p>
              Comer saudável é um ato de amor próprio, um compromisso diário que nutre não apenas o corpo, mas também a mente. Ao escolher alimentos frescos e equilibrados, estamos proporcionando ao nosso organismo os nutrientes essenciais para um funcionamento ótimo.
              </p>            
        </div>  

      </div>
      
      <div id='receitaTop'className='divReceita receitaTop'>
        <div className='divReceitaContainer divImgReceitaTop'>
          <img src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/06/receita-de-salada-de-pepino-com-tomate.jpg" alt="" />
        </div>
        <div className='divReceitaContainer divTextReceita'>
          <h3>SALADA DE VERÃO</h3>
          <h4>Ingredientes:</h4>
          <p>2 tomates
              1 pepino
              1 pimentão vermelho
              1 cebola roxa pequena
              1/2 xícara de milho cozido
              1/2 xícara de feijão-preto cozido
              1 abacate maduro
              Folhas de alface ou rúcula
              Coentro fresco (opcional)
              Sal e pimenta-do-reino
              Azeite de oliva extra virgem</p>
              <h4>Modo de Preparo:</h4>
          <p>Corte os tomates, pepino, pimentão e cebola em pedaços pequenos.
              Combine-os em uma tigela grande com o milho e o feijão-preto.
              Adicione os cubos de abacate.
              Tempere com sal, pimenta-do-reino e coentro, se desejar.
              Regue com azeite de oliva.
              Sirva sobre folhas de alface ou rúcula.</p>
        </div>
      </div>
      <div id='receitaCenter' className='divReceita  receitaCenter'>
          <div className='divReceitaContainer inverterText divTextReceita'>
            <h3>SOPA DE ABÓBORA ASSADA</h3>
            <h4>Ingredientes:</h4>
            <p>1 abóbora (aproximadamente 1,5 kg)
                2 cebolas médias
                3 dentes de alho
                4 xícaras de caldo de legumes
                1 colher de chá de cominho em pó
                1 colher de chá de páprica defumada
                Sal e pimenta-do-reino a gosto
                Azeite de oliva extra virgem
                </p>
                <h4>Modo de Preparo:</h4>
            <p>Asse a abóbora no forno até ficar macia.
                Refogue cebolas e alho em azeite.
                Adicione a polpa de abóbora, cominho e páprica à panela.
                Despeje caldo de legumes e deixe ferver.
                Bata a sopa até ficar cremosa.
                Ajuste o tempero com sal e pimenta.
                Sirva quente.
                </p>
          </div> 
          <div className='divReceitaContainer inverterImg divImgReceitaCenter'>
            <img src="https://i.panelinha.com.br/i1/64-bk-4508-cp2022-12-08-0882.webp" alt="" />
          </div>           
      </div>
      <div id='receitaBottom' className='divReceita receitaBottom'>
        <div className='divReceitaContainer divImgReceitaBottom'>
          <img src="https://www.receiteria.com.br/wp-content/uploads/chips-assado-de-batata-doce-e-alecrim-730x548.jpeg" alt="" />
        </div>
        <div className='divReceitaContainer divTextReceita'>
          <h3>CHIPS DE BATATA DOCE ASSADA</h3>
          <h4>Ingredientes:</h4>
            <p>2 batatas-doces médias
                2 colheres de sopa de azeite de oliva
                Sal e temperos a gosto (pimenta, páprica, alho em pó, etc.)
                </p>
                <h4>Modo de Preparo:</h4>
            <p>Pré-aqueça o forno a 200°C e forre uma assadeira com papel manteiga.
                Lave bem as batatas-doces e corte-as em rodelas finas, com cerca de 2-3 mm de espessura.
                Em uma tigela grande, misture as rodelas de batata-doce com o azeite de oliva e os temperos de sua escolha, garantindo que as fatias estejam uniformemente revestidas.
                Disponha as rodelas de batata-doce em uma única camada sobre a assadeira preparada.
                Asse no forno pré-aquecido por 15-20 minutos, ou até que as bordas comecem a dourar e as fatias fiquem crocantes.
                Retire do forno e deixe esfriar por alguns minutos antes de servir.
                </p>
        </div>
      </div>

    </main>
  )
}



















// import { useInView } from 'react-intersection-observer';
// import { useEffect, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import produto1 from './img/produto1.jpg'
// import produto2 from './img/produto2.jpg'
// import produto3 from './img/produto3.jpg'
// import produto4 from './img/produto4.jpg'
// import './css/receitas.css'




// export default function Receitas() {
//     const containerRef = useRef(null);
//     const previousYRef = useRef(window.pageYOffset);
  
//     useEffect(() => {
//       const cards = containerRef.current.querySelectorAll('.card');
//       const observerOptions = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1,
//       };
  
//       const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('cardVisible');
//             entry.target.classList.remove('cardHide');
//           } else {
//             if (previousYRef.current > window.pageYOffset) {
//               entry.target.classList.add('cardHide');
//             }
//           }
//         });
//         previousYRef.current = window.pageYOffset;
//       }, observerOptions);
  
//       cards.forEach(card => {
//         observer.observe(card);
//       });
  
//       return () => {
//         cards.forEach(card => {
//           observer.unobserve(card);
//         });
//       };
//     }, []);



//     return (
//         <main id='receitas'> 
//           <ContainerCards ref={containerRef}>
//             <Card className='card cardVisible' slideFrom='left'><img className='imgProduto' src={produto1}/></Card>
//             <Card className='card cardVisible' slideFrom='right'><img className='imgProduto' src={produto2}/></Card>
//             <Card className='card' slideFrom='left'><img className='imgProduto' src={produto3}/></Card>
//             <Card className='card' slideFrom='right'><img className='imgProduto' src={produto4}/></Card>
//             {/* <Card className='card' slideFrom='left'><img className='imgProduto' src={produto4}/></Card>
//             <Card className='card' slideFrom='right'><img className='imgProduto' src={produto4}/></Card> */}
//           </ContainerCards>
//         </main>
//     )
// }


// const ContainerCards = styled.div`
//   height: 90%;
//   width: 90%;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

// const slideFromLeft = keyframes`
//   from {
//     transform: translateX(-100%);
//     opacity: 0;
//     display: none;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//     display: block;
//   }
// `;

// const slideFromRight = keyframes`
//   from {
//     transform: translateX(100%);
//     opacity: 0;
//     display:none;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//     display: block;
//   }
// `;

// const slideToLeft = keyframes`
//   // from {
//   //   transform: translateX(0);
//   //   opacity: 1;
//   //   display: block;
    
//   // }
//   // to {
//   //   transform: translateX(-100%);
//   //   opacity: 0;
//   //   overflow: hidden;
//   // }
// `;

// const slideToRight = keyframes`
//   // from {
//   //   transform: translateX(0);
//   //   opacity: 1;
//   //   display: block;
    
//   // }
//   // to {
//   //   transform: translateX(100%);
//   //   opacity: 0;
//   //   overflow: hidden;
//   // }
// `;

// const Card = styled.div`
//   width: 40%;
//   height: 40%;
//   opacity: 0;
//   padding: 0;
//   margin: 0;
//   overflow: hidden;
//   cursor: pointer;  
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  
//   &.cardVisible {
//     animation: ${({ slideFrom }) => (slideFrom === 'left' ? slideFromLeft : slideFromRight)} 1s forwards;
//   }

//   &.cardHide {
//     animation: ${({ slideFrom }) => (slideFrom === 'left' ? slideToLeft : slideToRight)} 0.5s forwards;
//   }
// `


