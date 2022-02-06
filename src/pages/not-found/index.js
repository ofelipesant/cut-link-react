import './not-found.css'
import {Link} from 'react-router-dom'


export default function NotFound(){
    return(
        <div className='not-found-container'>
            <div className='not-found-content'>
                <img src="./images/notfound.png" alt="teste"/>
                <h1>PÁGINA NÃO ENCONTRADA</h1>
                <Link to="/">
                    <button className='back-home'>Voltar para a home</button>
                </Link>
            </div>
        </div>
    )
}