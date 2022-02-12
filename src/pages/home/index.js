import {FiLink} from 'react-icons/fi'
/* import {Link} from 'react-router-dom' */
import {useState} from 'react'
import ModalShortLink from '../../components/ModalShortLink'
//nomes dos componentes sempre em letra maiúscula 
import CopyModal from '../../components/CopyModal'
import ErrorModal from '../../components/ErrorModal'
// componentes locais são importados sem as chaves
import './home.css'
import api from '../../services/api'

export default function Home(){
    //use state
    const [url, setURL] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [showCopyModal, setShowCopyModal] = useState(false)
    const [dataAPI, setData] = useState({})

    async function cutLink(){
       try{
            const response = await api.post('/shorten', {long_url: url})
            setData(response.data)
            setURL('')
            setShowModal(true)
       } catch{
           setShowErrorModal(true)
       }
    }

    return(
        <div className="home">

           {/*  <header className='cabecalho'>
                <Link to="/links"><button className='links'>MEUS LINKS</button></Link>
            </header> */}
            
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
                show={()=>{setShowCopyModal(true)
                }}
                contentData={dataAPI}
            />)}

            {showCopyModal && (<CopyModal
                closeCopyModal={()=>{
                    setShowCopyModal(false)
                }}
            />)}

            {showErrorModal && (<ErrorModal
                closeErrorModal={() => {setShowErrorModal(false)}}
            />)} 
        </div>
    )
}
