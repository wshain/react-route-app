import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import Django from './django';
import Linux from './linux';
import Web from './web';
import NotFound from './notFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import WebContent from './webContent';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className='container'>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/django' element={<Django id="jhh"></Django>}></Route>
                    <Route path='/linux' element={<Linux></Linux>}>
                        <Route path="homework" element={<h3>homework的内容</h3>}></Route>
                        <Route path="terminal" element={<h3>terminal的内容</h3>}></Route>
                        <Route path="*" element={<h3>其他</h3>}></Route>
                    </Route>
                    <Route path='/web' element={<Web></Web>}></Route>
                    <Route path='/web/content' element={<WebContent />}></Route>
                    <Route path="/404" element={<NotFound></NotFound>}></Route>
                    <Route path="*" element={<Navigate to="/404" />}></Route>
                </Routes>
                </div>

            </React.Fragment>
        );
    }
}
 
export default App;