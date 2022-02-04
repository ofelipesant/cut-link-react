import {FiLink} from 'react-icons/fi'
import './home.css'

export default function Home(){
    return(
        <div className="home">

            <header className='cabecalho'>
                <a href="/links"><button className='links'>MEUS LINKS</button></a>
            </header>
            
            <div className="logo">
                <img src="./images/logo.png" alt="logo"/>
                <h1>REACT CUT-LINK</h1>
            </div>

            <span>Insira um link abaixo para encurtar</span>

            <div className='input-area'>
                <div className='inputs'>
                    <FiLink size={28} color='#FFF'/>
                    <input placeholder='Insira o link'></input>
                </div>

                <button class="button-cta">ENCURTAR</button>
            </div>

            <div className='resultado'></div>
            
        </div>
    )
}
