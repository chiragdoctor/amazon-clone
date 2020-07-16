import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <h1>Chekcout Page</h1>
          </Route>
          <Route path='/login'>
            <h1>Login Page</h1>
          </Route>
          <Route path='/'>
            <h1>HOME PAGE!!!</h1>
            <h2>Lets build amazon clone app ..🚀</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
