import { useState, useEffect } from 'react';
import axios from 'axios';
import Panel from './components/panel';
import Seen from './components/seen';

const api_url = 'https://api.thedogapi.com/v1/images/search?limit=10&api_key=live_9HYb9nJF4Ldc5j05IFsC2s7t18IeDbf2GfrfTF1RxyaNWRjMjiFLRKzc8kx9AFdh';

interface Dog {
  name: string;
  breed: string;
  image: string;
  weight: string;
  country: string;
  age: string;
}

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get(api_url);
      setDogs(response.data.map(dogData => {
        // Assuming the API returns an array of dog data
        const breedData = dogData.breeds[0] || {};
        return {
          name: breedData.name || 'Unknown',
          breed: breedData.breed_group || 'Unknown',
          image: dogData.url,
          weight: breedData.weight?.imperial || 'Unknown',
          country: breedData.bred_for || 'Unknown',
          age: breedData.life_span || 'Unknown'
        };
      }));
    };
    fetchDogs();
  }, []);

  const toggleIndex = () => {
    setIndex(prevIndex => (prevIndex + 1) % dogs.length); // Cycle through dogs
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {dogs.length > 0 && (
          <Panel 
            name={dogs[index].name} 
            breed={dogs[index].breed} 
            image={dogs[index].image} 
            weight={dogs[index].weight} 
            age={dogs[index].age}
          />
        )}
        <button className='bg-black p-1 m-3 text-slate-50 hover:border-white border-white w-30 h-30 text-center' onClick={toggleIndex}>Discover</button>
      </div>

      <div className='align-left absolute left-0 top-1'> 
        {dogs.length > 0 && (
           <Seen dogs={dogs.slice(0, index + 1)} />
        )}
      </div>
    </>
  );
}

export default App;
