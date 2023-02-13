import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Details from "./views/Details";
import Main from "./views/Main";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
