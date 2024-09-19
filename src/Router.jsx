import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
