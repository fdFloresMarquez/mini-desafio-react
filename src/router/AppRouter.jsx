import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { Form, Home } from '../pages/';


export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="form" element={<Form />} />
                </Routes>
            </div>
        </>
    )
}
