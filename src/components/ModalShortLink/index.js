import './short-link.css'
import{FiCopy, FiX} from "react-icons/fi"

export default function ModalShortLink({closeModal, contentData, show, close}){

    function copyURL(){
        navigator.clipboard.writeText(contentData.link)
    }

    return(
        <div className='container'>
            <button className='close-button' onClick={closeModal}>
                <FiX size={20}/>
            </button>
            <h2>LINK ENCURTADO</h2>
            <span className='original-link'>{contentData.long_url}</span>

            <div className='resultado'>
                <span className='short-link'>{contentData.link}</span>
                <button className='button-copy' onClick={copyURL, show}>
                    <FiCopy size={20}color='#FFF'/>
                </button>
            </div>
        </div>
    )
}