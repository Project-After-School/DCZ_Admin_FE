import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { CreateClass } from "./Pages/CreateClass";
import { HomeWorkList } from "./Pages/HomeWorkList";
import { CreateHomeWork } from "./Pages/CreateHomeWork";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<CreateClass />} />
                <Route path="/homework" element={<HomeWorkList />} />
                <Route path="/homework/create" element={<CreateHomeWork />} />
            </Routes>
        </BrowserRouter>
    );
};
