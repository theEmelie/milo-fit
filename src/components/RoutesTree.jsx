import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components import
import Header from "./Header/Header";

import Home from "./Home/HomeStart/HomeStart";
import NewPlan from "./NewPlan/NewPlan/NewPlan";
import MoreMenu from "./MoreMenu/MoreMenu/MoreMenu";

const RoutesTree = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-plan" element={<NewPlan />} />
                    <Route path="/more" element={<MoreMenu />} />
                </Routes>
            </Router>
        </div>
    );
};
export default RoutesTree;