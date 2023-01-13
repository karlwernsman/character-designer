import React from 'react';
import './Display.css';

export default function Display({ hat, character, shoes }) {
  return (
    <div className="display">
      <img src={`/hats/${hat}.png`} />
      <img src={`/characters/${character}.png`} />
      <img src={`/shoes/${shoes}.png`} />
    </div>
  );
}
