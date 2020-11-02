import React from 'react';
import './scss/style.scss';

import About from './components/About';
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
            <Route path='/onas' component={About} />
            <Route path='/galeria' component={Gallery} />
          </Switch>
          <Info />
          <Footer />
        </BrowserRouter>
    </>
  );
}


export default App;
