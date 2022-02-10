import './copy-modal.css' 
import {FiX} from 'react-icons/fi'

export default function copyModal({closeModalCopy}){
    return(
        <div className='copy-modal-container'>
            <button className='close' onClick={closeModalCopy}><FiX/></button>
            <span>Link copiado!</span>
        </div>
    )
}