import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reservation from './pages/reservation/Reservation'
import Home from './pages/home/Home'

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/> }> </Route>
                <Route path="/reservation" element={<Reservation/>} > </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
