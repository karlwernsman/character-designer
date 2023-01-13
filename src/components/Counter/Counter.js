import React from 'react';
import './Counter.css';

export default function Counter({ hatCount, characterCount, shoeCount, catchphrases }) {
  return (
    <div>
      <p>
        You have changed the hat {hatCount} times, the character {characterCount} times, and the
        shoes {shoeCount} times.
      </p>
      <label>Catchphrases</label>
      <ul className="catchphrases">
        {catchphrases.map((catchphrase) => {
          return <li key={catchphrase}>{catchphrase}</li>;
        })}
      </ul>
    </div>
  );
}
