import './AnimalList.css';

export default function AnimalList({ animal }) {
  return (
    <div className='animal-card'>
      <img src={`./${animal.type}.svg`}/>
      <p>{animal.name} the {animal.type}</p>
      <p>{animal.says}</p>
    </div>  
  );
}
