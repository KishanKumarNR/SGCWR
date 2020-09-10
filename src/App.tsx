import React from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home.container'
// import Cart from './components/Cart'
import Navbar from "./components/Navbar.component";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/*<Route path="/cart" component={Cart}/>*/}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
