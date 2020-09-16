import React from 'react';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage'

import './App.css';

function App() {
  return (
    <div className="app">
    <Router>
       <Header/>
       
       <Switch>
         <Route path='/search'>
            <SearchPage />
         </Route>
         <Route path='/'>
             <Home/>
         </Route>   
       </Switch>
      
       <Footer/>
    </Router>

    </div>
  );
}

export default App;
