import './copy-modal.css' 
import {FiX} from 'react-icons/fi'

export default function copyModal({closeCopyModal}){
    return(
        <div className='copy-modal-container'>
            <button className='close' onClick={closeCopyModal}><FiX/></button>
            <span>Link copiado!</span>
        </div>
    )
}