import './short-link.css'
import{FiCopy, FiX} from "react-icons/fi"

export default function ModalShortLink(){
    return(
        <div className='container'>
            <button className='close-button'>
                <FiX size={20}/>
            </button>
            <h2>LINK ENCURTADO</h2>
            <span className='original-link'>link</span>

            <div className='resultado'>
                <span className='short-link'>resultado</span>
                <button className='button-copy'>
                    <FiCopy size={20}color='#FFF'/>
                </button>
            </div>
        </div>
    )
}