import { FiArrowLeft, FiTrash2, FiLink } from "react-icons/fi";
import {Link} from 'react-router-dom'
import "./links.css"

export default function Links(){
    return(
        <div className="links-container">
            <div className="top">
                <Link to="/">
                    <FiArrowLeft size={48} color="#FFF"/>
                </Link>
                <h1 className="section-title">MEUS LINKS</h1>
            </div>

                <div className="link">
                    <div className="content">
                        <FiLink color="#FFF"/>
                        <span className="url">https://youtube.com</span>
                        <button className="trash">
                            <FiTrash2 size={22} color="#FF5E5B"/>
                        </button>
                    </div>

                    <div className="content">
                        <FiLink color="#FFF"/>
                        <span className="url">https://github.com/ofelipesantz</span>
                        <button className="trash">
                            <FiTrash2 size={22}color="#FF5E5B"/>
                        </button>
                        </div>
                    </div>
        </div>
    )
}