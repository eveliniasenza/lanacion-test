import React from 'react';
import './App.css';
import Box from "./components/Box";


function App() {
  return (
    <div>
      <Box
        title={'ACTUALIDAD'}
        totalArticles={6} // Puede ser 3, 6, 9
      />
    </div>
  );
}

export default App;
