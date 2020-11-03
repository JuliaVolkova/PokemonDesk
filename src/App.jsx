import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return <>
        <Router>
            <Header/>
            <Switch>
                <Route path="/pokédex">
                    <main>Pokédex</main>
                </Route>
                <Route path="/legendaries">
                    <main>Legendaries</main>
                </Route>
                <Route path="/documentation">
                    <main>Documentation</main>
                </Route>
                <Route path="/">
                    <main>4</main>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    </>
}

export default App;
