import './Animal.css';

export default function Animal({ animal }) {
  return (
    <div style={{ top: `${animal.top}`, left: `${animal.left}` }} className='animal-card'>
      <img src={`./${animal.type}.svg`}/>
      <p>{animal.name}</p>
      <p>{animal.says}</p>
    </div>  
  );
}