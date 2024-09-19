import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ded" element={<div>djeiji</div>} />
            </Routes>
        </BrowserRouter>
    );
};
