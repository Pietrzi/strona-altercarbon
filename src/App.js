import React from 'react';
import './scss/style.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/onas' component={Info} />
            <Route path='/galeria' component={Gallery} />
          </Switch>
          <Footer />
        </BrowserRouter>
    </>
  );
}


export default App;
