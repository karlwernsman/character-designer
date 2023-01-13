import React from 'react';
import './Display.css';

export default function Display({ hat, character }) {
  return (
    <div>
      <img src={`/hats/${hat}.png`} />
      <img src={`/characters/${character}.png`} />
    </div>
  );
}
