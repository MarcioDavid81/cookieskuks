import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio";
import Sobre from "./pages/sobre";
import Blog from "./pages/blog";
import Contato from "./pages/contato";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes