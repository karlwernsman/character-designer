import React from 'react';
import './Display.css';

export default function Display({ hat, character, shoes, catchphrases }) {
  return (
    <div>
      <div>
        <img src={`/hats/${hat}.png`} />
        <img src={`/characters/${character}.png`} />
        <img src={`/shoes/${shoes}.png`} />
      </div>
      <div>
        <label>Catchphrases</label>
        <ul>
          {catchphrases.map((catchphrase) => {
            return <li key={catchphrase}>{catchphrase}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
