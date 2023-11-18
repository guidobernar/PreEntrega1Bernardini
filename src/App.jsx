import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';

// Resto del código de tu componente App


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductCatalog} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;





