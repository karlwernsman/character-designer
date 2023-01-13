import React from 'react';
import './Controls.css';

export default function Controls({ hat, setHat, character, setCharacter }) {
  const handleHat = (event) => {
    setHat(event.target.value);
  };
  const handleCharacter = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div className="controls">
      <h1>Pick a hat</h1>
      <select value={hat} onChange={handleHat}>
        <option value="beanie">Beanie</option>
        <option value="bow">Bow</option>
        <option value="chef">Chef</option>
        <option value="cowboi">Cowboi</option>
        <option value="cowgal">Cowgal</option>
        <option value="fedora">Fedora</option>
        <option value="santa">Santa</option>
        <option value="straw">Straw</option>
      </select>
      <h1>Pick a character</h1>
      <select value={character} onChange={handleCharacter}>
        <option value="abigail">Abigail</option>
        <option value="elliot">Elliot</option>
        <option value="emily">Emily</option>
        <option value="george">George</option>
        <option value="harvey">Harvey</option>
        <option value="lewis">Lewis</option>
        <option value="maru">Maru</option>
        <option value="pam">Pam</option>
        <option value="sebastian">Sebastian</option>
        <option value="shane">Shane</option>
      </select>
    </div>
  );
}
