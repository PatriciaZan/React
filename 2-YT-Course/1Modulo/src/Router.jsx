import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Inicial ,SobreNos } from './pages';
import { LayoutPadrao } from './layout';

const Router = () => {
    return(
    //     <Routes>
    //         <Route path="/" element={<LayoutPadrao/>}>
    //             <Route path="/" element={<Inicial/>}/>
    //             <Route path="/sobre-nos" element={<SobreNos/>}/>
    //         </Route>
    //     </Routes>
    // )
        // <Routes>
        //     <Route Component={Inicial} path='/' />
        //     <Route Component={SobreNos} path='/sobre-nos'  />
            
        // </Routes>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={LayoutPadrao}>
                    <Route path='sobreNos' element={<SobreNos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export { Router }