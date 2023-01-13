import './App.css';
import Display from './components/Display/Display.js';
import Controls from './components/Controls/Controls.js';
import { useState } from 'react';

function App() {
  const [hat, setHat] = useState('hat');
  const [character, setCharacter] = useState('character');
  return (
    <main>
      <Controls {...{ setHat, setCharacter }} />
      <Display {...{ hat, character }} />
    </main>
  );
}

export default App;
