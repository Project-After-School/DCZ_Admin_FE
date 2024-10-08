import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { ClassList } from "./Pages/ClassRoom/ClassList";
import { HomeWorkList } from "./Pages/HomeWork/HomeWorkList";
import { CreateHomeWork } from "./Pages/HomeWork/CreateHomeWork";
import { HomeWorkDetail } from "./Pages/HomeWork/HomeWorkDetail";
import { StudentHomeWorkDetail } from "./Pages/HomeWork/StudentHomeWorkDetail";
import { ScrollTop } from "./Components/Common/ScrollTop";

export const Router = () => {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ClassList />} />
                <Route path="/homework" element={<HomeWorkList />} />
                <Route path="/homework/create" element={<CreateHomeWork />} />
                <Route path="/homework/detail" element={<HomeWorkDetail />} />
                <Route path="/homework/detail/studentId" element={<StudentHomeWorkDetail />} />
            </Routes>
        </BrowserRouter>
    );
};
