import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';

export default function myRouter() {
    return (
        <Routes>
            <Route path='home' element={<Home/>}/>
        </Routes>
    )
}