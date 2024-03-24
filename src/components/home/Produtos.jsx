
import React, { useEffect, useState, useRef } from 'react'
import './css/produtos.css'



export default function Produtos(){

    const [data, setData] = useState([])
    const carousel = useRef(null)

    useEffect(() =>{
      fetch('http://localhost:3000/static/itensCarousel.json')
      .then((response) => response.json())
      .then(setData)
    }, [])

    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }


    const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    if(!data || !data.length) return null;


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
              <a>
                Realizar pedido
              </a>
                              
            </div>
            <div className='divTop' >
              
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
                        <span className='price'>{price}</span>
                      </div>
                    </div>
                  ) 
                })}
              </div>
              <div className='buttons'>
                <button onClick={handleLeftClick} ><img src="/static/image/setaCarousel.png" alt="Scroll Left" /></button>
                <button onClick={handleRightClick}><img src="/static/image/setaCarousel.png" alt="Scroll Right" /></button>
              </div>
                        
            </div>           
                                                    
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

