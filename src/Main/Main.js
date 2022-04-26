import React from 'react';
import AnimalList from './AnimalList/AnimalList';
import { animals } from '../data';
import './Main.css';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${'./background.png'})` }}> {
      animals.map((animal) => 
        <AnimalList
          key={animal.name}
          animal={animal} />
      )
    }
    </main>
  );
}
