import './css/footer.css'
import  logo  from '../home/img/logoHortiFruti.png'
import { ImFacebook2 } from "react-icons/im";
import { TfiInstagram } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";





export default function Footer(){
    return(
        <main id='footer'> 
            <div className='divLeft'>
                <img className="logoHortifruti" src={logo} alt="" />
                <div className='redesSociais'>
                    <a className='fbIcon' target='_blank'href='https://www.facebook.com.br'><ImFacebook2 /></a>
                    <a className='fbIcon' target='_blank'href='https://www.instagram.com.br'><TfiInstagram /></a>
                    <a className='fbIcon' target='_blank'href='https://www.youtube.com.br'><IoLogoYoutube /></a>
                </div>

            </div>
            <div className='divCenter'>
                <p className='textFooter'>
                Nutrindo sua vida com frescor e qualidade, colhendo saúde diretamente da terra para a sua mesa. 
                Bem-vindo ao nosso universo de sabores naturais e cores vibrantes. © Hortifruti dos Franceses - Todos os direitos reservados.
                </p>
            </div>
            <div className='divRight'>
                <p>
                    Contatos
                </p>
                <p>
                    Ligação e Whatsapp : (92) 99999-9999                   
                </p>
                <div>
                    <p>
                        Horario de Atendimeto:
                    </p>
                    <p className='horarioFooter'>
                        Seg. a sab. das 8h às 17h
                    </p>                    
                </div>
                <p>
                    sac@hortifrutidosfranceses.com.br
                </p>
            </div>
        </main>
    )
}



