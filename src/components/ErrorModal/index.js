import './error-modal.css'
import {FiX} from 'react-icons/fi'

export default function ErrorModal({closeErrorModal}){
    return(
        <div className='error-modal-container'>
            <button onClick={closeErrorModal}>
                <FiX color='white'/>
            </button>
            <span>
                Ops! Algo de errado não está certo.
                Verifique o link inserido e tente novamente
            </span>
        </div>
    )
}