import React from 'react';
import './Controls.css';

export default function Controls({
  hat,
  setHat,
  character,
  setCharacter,
  shoes,
  setShoes,
  setHatCount,
  setCharacterCount,
}) {
  const handleHat = (event) => {
    setHat(event.target.value);
    setHatCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleCharacter = (event) => {
    setCharacter(event.target.value);
    setCharacterCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleShoes = (event) => {
    setShoes(event.target.value);
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
      <h1>Pick a pair of shoes</h1>
      <select value={shoes} onChange={handleShoes}>
        <option value="cowboiBoots">Cowboi boots</option>
        <option value="crystalShoes">Crystal shoes</option>
        <option value="leatherBoots">Leather boots</option>
        <option value="rubberBoots">Rubber boots</option>
        <option value="sneakers">Sneakers</option>
        <option value="spaceBoots">Space boots</option>
        <option value="tundraBoots">Tundra boots</option>
      </select>
    </div>
  );
}
