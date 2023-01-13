import './App.css';
import Display from './components/Display/Display.js';
import Controls from './components/Controls/Controls.js';
import { useState } from 'react';
import Counter from './components/Counter/Counter.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
  const [hat, setHat] = useState('beanie');
  const [character, setCharacter] = useState('abigail');
  const [shoes, setShoes] = useState('cowboiBoots');
  const [hatCount, setHatCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [shoeCount, setShoeCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <main>
      <Header />
      <div className="characterSetup">
        <Controls
          className="controls"
          {...{
            setHat,
            setCharacter,
            setShoes,
            setHatCount,
            setCharacterCount,
            setShoeCount,
            setCatchphrases,
          }}
        />
        <Display className="display" {...{ hat, character, shoes }} />
      </div>
      <Counter {...{ hatCount, characterCount, shoeCount, catchphrases }} />
      <Footer />
    </main>
  );
}

export default App;
