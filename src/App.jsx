import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de herramientas!" />
      {/* Agrega aquí el resto de tu contenido */}
    </div>
  );
}



export default App;

