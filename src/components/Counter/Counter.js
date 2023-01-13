import React from 'react';
import './Counter.css';

export default function Counter({ hatCount, characterCount, shoeCount }) {
  return (
    <p>
      You have changed the hat {hatCount} times, the character {characterCount} times, and the shoes{' '}
      {shoeCount} times.
    </p>
  );
}
