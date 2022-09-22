import './App.scss';
import "./style/typography.scss";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { MainPage } from "./components/MainPage/MainPage";
import { UploadPage } from "./components/UploadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/" element={<MainPage/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;
