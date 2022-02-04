//roteação das páginas do projeto
import {BrowserRouter, Routes, Route} from 'react-router-dom' //componentes do react router

import Home from './pages/home'
import Links from'./pages/links'

//configuração do router
function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                {/* essa estrutura é necessária para configurar as rotas de cada componnente */}
                <Route  path="/" element={<Home/>}/> {/* quando acessar o site, será renderizado o componente <Home> */}
                <Route path ="/links" element ={<Links/>}/>{/* quando acessar o endereço/links será renderizado o componente <Links> */}

            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp // exportando o componente para ficar acesível, [EXPORTAR SEM OS PARENTESES]