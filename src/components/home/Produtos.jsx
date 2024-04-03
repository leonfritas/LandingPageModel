
import React, { useEffect, useState, useRef } from 'react'
import './css/produtos.css'
import carrinho from './img/carEdit.gif'
import { Link, useNavigate } from 'react-router-dom'
import './css/finalizarPedidoCartao.css'
import { CheckIcon, XMarkIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";





export default function Produtos(){

    let [data, setData] = useState([])
    const carousel = useRef(null)    
    const [valorTotal, setValorTotal] = useState(0)
    const [finalizarPedido, setFinalizarPedido] = useState(false)

    let carrinhoListaDinamicaLegendas = document.getElementsByClassName('carrinhoListaDinamicaLegendas')
    let carrinhoListaDinamicaValores = document.getElementsByClassName('carrinhoListaDinamicaValores')

    // useEffect(() =>{
    //   fetch('http://localhost:3000/static/itensCarousel.json')
    //   .then((response) => response.json())
    //   .then(setData)
    // }, [])

    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    console.log(carousel)
    const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    // () => setData()
    data = [

      {
          "id": "1",
          "name": "Produto 1",
          "image": "https://receitinhas.com.br/wp-content/uploads/2016/05/Bem-casados-Cia-de-Receitas.png",
          "price": "30",
          "oldPrice": "40"
      },
      {
          "id": "2",
          "name": "Produto 2",
          "image": "https://receitinhas.com.br/wp-content/uploads/2016/05/Bem-casados-Cia-de-Receitas.png",
          "price": "20",
          "oldPrice": "30"
      },
      {
          "id": "3",
          "name": "Produto 3",
          "image": "https://receitinhas.com.br/wp-content/uploads/2016/05/Bem-casados-Cia-de-Receitas.png",
          "price": "10",
          "oldPrice": "20"
      },
      {
          "id": "4",
          "name": "Produto 4",
          "image": "https://receitinhas.com.br/wp-content/uploads/2016/05/Bem-casados-Cia-de-Receitas.png",
          "price": "40",
          "oldPrice": "20"
      },
      {
          "id": "5",
          "name": "Produto 5",
          "image": "https://receitinhas.com.br/wp-content/uploads/2016/05/Bem-casados-Cia-de-Receitas.png",
          "price": "10",
          "oldPrice": "20"
      },
      {
          "id": "6",
          "name": "Produto 6",
          "image": "https://receitinhas.com.br/wp-content/uploads/2016/05/Bem-casados-Cia-de-Receitas.png",
          "price": "200",
          "oldPrice": "20"
      }
    ]




    
    // if(!data || !data.length) return null;

    function limparLista(){
      carrinhoListaDinamicaValores[0].innerHTML = ''
      carrinhoListaDinamicaLegendas[0].innerHTML = ''
      setValorTotal(0)
    }

  

    return(
        <main id='produtos'> 
          <div className='divHeaderProdutos'>
              <div  className='tituloProdutos'>
                <h2>
                  Sabor da Natureza em sua Mesa
                </h2>
                <h3>
                  Uma seleção saudável e saborosa para sua dieta diária.
                </h3>  
              </div>
                                           
            </div>
            <div className='divTop' >  
              <ArrowLongLeftIcon className="ArrowLongLeftIcon  text-gray-500" />
              <ArrowLongRightIcon className="ArrowLongRightIcon text-gray-500" />                
              <div className='carousel' ref={carousel}>                
                {data.map((item) => {  
                  const {id, name, price, oldPrice, image} = item;
                  return(
                    <div className='item' key={id}>
                      <div className='image'>
                        <img src={image} alt={name} />
                      </div>
                      <div className='info'>
                        <span className='name'>{name}</span>
                        <span className='oldPrice'>{oldPrice}</span>
                        <button onClick={()=> {
                          setValorTotal(parseInt(valorTotal) + parseInt(price))
                          carrinhoListaDinamicaLegendas[0].innerHTML += `<p>${name}</p>`
                          carrinhoListaDinamicaValores[0].innerHTML += `<p>${price}</p>`
                          }} className='price'>{price}</button>
                      </div>
                    </div>
                  ) 
                })} 
                
              </div>
              
              <div className='carrinho'>
               
                <div className='carrinhoDivLista'>
                  <div className='carrinhoDivListaLegendas'>
                    <h3>Lista de compras</h3>   
                    
                    <div className='carrinhoListaDinamicaLegendas'>
                      {/* {valorTotal === 0? 'Lista vazia': ''} */}

                    </div> 
                    
                    <p>Total</p>                                     
                  </div>   
                  <div className='carrinhoDivListaValores'>  
                    <div className='carrinhoListaDinamicaValores'>
                    

                    </div>                                     
                    <p>{valorTotal}</p> 
                  </div>  
                
                    
                </div>
                <div>
                  {valorTotal > 1?<button className='limparLista' onClick={limparLista}>Esvaziar lista</button>: ''}
                  {valorTotal > 1?<button onClick={()=>setFinalizarPedido(true)}  className='realizarPedido' >Realizar pedido</button> : ''}

                </div>
                 
                <div className='carrinhoDivImg'>
                  <img src={carrinho} alt="" />
                </div>              
              </div>
              
              {/* <div className='buttons'> */}
                <button className='buttonPrev' onClick={handleLeftClick} ><img src="/static/image/setaCarousel.png" alt="Scroll Left" /></button>
                <button className='buttonNext' onClick={handleRightClick}><img src="/static/image/setaCarousel.png" alt="Scroll Right" /></button>
              {/* </div> */}
                        
            </div>         
            {finalizarPedido === true?        
            <div id="finalizarPedido">              
              <button onClick={() => setFinalizarPedido(false)}className="FPbotaoFechar">X</button>
              <header className='FPHeader'><h2>Dados do cartão</h2></header>
              <div className='FPDadosDoCartao'>
                <label htmlFor="">Nome do Titular</label>
                <input type="text" />
                <label htmlFor="">CPF do Titular</label>
                <input type="text" />
                <label htmlFor="">Número do Cartão</label>
                <input type="text" />

              </div>
              
              <div className='FPButtons'>
                <a><XMarkIcon className="h-6 w-6 " />Sair</a>
                <a><CheckIcon className="h-6 w-6 " />Realizar Pagamento</a>
              </div>
            </div>: ''}                                                   
        </main>        
    )
}



// const H2 = styled.h2`
// font-size: 200%;
// color: white;`


// const DivTexto = styled.div`
// width: 40%;
// background-color: #5f9ea0;
// max-height: 80%;
// padding: 50px;
// border-radius: 20px;
// font-size: 100%
// font-weight: 500;
// text-align: justify;

// `

