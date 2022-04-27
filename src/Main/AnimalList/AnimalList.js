import './AnimalList.css';
import Animal from './Animal/Animal';

export default function AnimalList({ animals }) {
  return (
    animals.map((animal) => 
      <Animal
        key={animal.name}
        animal={animal} />
    )
  );
}
