import React from 'react'
import Painel from '../components/home/Painel'
import Sobre from '../components/home/Sobre'
import Receitas from '../components/home/Receitas'
import Produtos from '../components/home/Produtos'
import Header from '../components/home/Header'
import ScrollArrow from '../components/home/ScrollArrow'
import Footer from '../components/home/Footer'


export default function Home(){

        return(
            <>
                <Header/>
                <Painel/>
                <Sobre/>
                <Produtos/>  
                <Receitas/>                                              
                <Footer/>
                <ScrollArrow/>
            </>

        )
    }


