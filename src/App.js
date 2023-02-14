import { useEffect, useState } from 'react';
import './App.css';
import NewPet from './NewPet';
import PetsContainer from './PetsContainer';

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:8004/pets')
      .then(res => res.json())
      .then(data => setPets(data))
  }, [])

  // TODO 3. NewPet needs a way to add the new pet to our pets state. What should we pass as a prop?

  return (
    <div className="App">
      <PetsContainer pets={pets} />
      <NewPet setPets={setPets} />
    </div>
  );
}

export default App;
