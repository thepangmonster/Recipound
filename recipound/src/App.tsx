import React from 'react';
import './App.css';
import { EditRecipePage } from './frontend/EditRecipePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
        <>
          <Route path="/" component={EditRecipePage}/>
          <Route path="edit-recipe" component={EditRecipePage}/>
        </>
    </Router>

  );
}

export default App;
