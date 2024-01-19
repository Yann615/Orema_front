import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Acceuil from './screen/Acceuil';
import Apropos from './screen/A propos';
import Faireundon from './screen/Faire un don';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/Apropos" element={<Apropos/>}  /> {/* 👈 Renders at /app/ */}
        <Route path="/Faireundon" element={<Faireundon/>}  /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
