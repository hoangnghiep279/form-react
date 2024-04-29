import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div
            className="bg-cover  text-white h-[100vh] flex justify-center items-center "
            style={{ backgroundImage: "url(../src/assets/img/bg2.jpg)" }}
        >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
