import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import '../styles/App.css';
import Header from './header/header';
import Home from './home';
import AppliedRedux from './applied-redux';
import { Provider } from 'react-redux';
import configureStore from '../state/store.js';

function Navigation() {

    return (
        <div className="App">
            <div className="page">
                <div className="content">
                    <Router>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/applied-redux' element={<AppliedRedux />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default Navigation;