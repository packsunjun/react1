import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Appshell from "./Appshell";
import Home from "./Home";
import Texts from "./Texts";
import Words from "./Words";

class App extends React.Component{
    render() {
        return(
            <Router>
                <Appshell>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/texts" element={<Texts />} />
                        <Route exact path="/words" element={<Words />} />
                    </Routes>
                </Appshell>
            </Router>
        )
    }
}

export default App;
