import React from 'react';
import './Counter.css';

export default function Counter({ hatCount }) {
  return (
    <p>
      You have changed the hat {hatCount} times, the character {} times, and the shoes {} times.
    </p>
  );
}
