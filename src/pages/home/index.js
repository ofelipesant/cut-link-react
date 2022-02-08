import {FiLink} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import ModalShortLink from '../../components/ModalShortLink' 
// componentes locais são importados sem as chaves
import './home.css'

export default function Home(){
    //use state
    const [url, setURL] = useState('')
    const [showModal, setShowModal] = useState(false)

    function cutLink(){
        setShowModal(true)
    }



    return(
        <div className="home">

            <header className='cabecalho'>
                <Link to="/links"><button className='links'>MEUS LINKS</button></Link>
            </header>
            
            <div className="logo">
                <img src="./images/logo.png" alt="logo"/>
                <h1>REACT CUT-LINK</h1>
            </div>

            <span>Insira um link abaixo para encurtar</span>

            <div className='input-area'>
                <div className='inputs'>
                    <FiLink size={28} color='#FFF'/>

                    <input 
                    placeholder='Insira o link' 
                    value={url} 
                    onChange={(e) => {setURL(e.target.value)}}></input>
                </div>

                <button class="button-cta" onClick={cutLink}>ENCURTAR</button>
            </div>

            {/* renderização com condicional com usestate */}
            {showModal && (<ModalShortLink
                closeModal={() => {setShowModal(false)}}
            />)}

            
        </div>
    )
}
