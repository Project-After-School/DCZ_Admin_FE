import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { CreateClass } from "./Pages/CreateClass";
import { HomeWorkList } from "./Pages/HomeWorkList";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<CreateClass />} />
                <Route path="/homework" element={<HomeWorkList />} />
            </Routes>
        </BrowserRouter>
    );
};
