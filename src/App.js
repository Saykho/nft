import './App.scss';
import "./style/typography.scss";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { MainPage } from "./components/MainPage/MainPage";
import { UploadPage } from "./components/UploadPage";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Menu/>

            <Routes>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/" element={<MainPage/>}/>
            </Routes>

            <Footer/>
        </HashRouter>
    );
}

export default App;
