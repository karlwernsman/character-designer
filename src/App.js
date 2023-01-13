import './App.css';
import Display from './components/Display/Display.js';
import Controls from './components/Controls/Controls.js';
import { useState } from 'react';
import Counter from './components/Counter/Counter.js';

function App() {
  const [hat, setHat] = useState('beanie');
  const [character, setCharacter] = useState('abigail');
  const [shoes, setShoes] = useState('cowboiBoots');
  const [hatCount, setHatCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  return (
    <main>
      <Controls {...{ setHat, setCharacter, setShoes, setHatCount, setCharacterCount }} />
      <Counter {...{ hatCount, characterCount }} />
      <Display {...{ hat, character, shoes }} />
    </main>
  );
}

export default App;
