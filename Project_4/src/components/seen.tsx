// Define the structure of a single dog object using TypeScript interfaces
interface Dog {
    name: string;
    breed: string;
    image: string;
  }
  
  // Update the props to accept an array of Dog objects
  const Seen = (props: { dogs: Dog[] }) => {
    return (
      <div className='bg-indigo-500 bg-opacity-15 h-3/4 w-48 overflow-auto'>
        {/* Map over the dogs array to render each dog's info */}
        {props.dogs.map((dog, index) => (
          <div key={index} className='flex flex-col justify-center items-center text-slate-50 m-2 p-2 text-center'>
            <h5>{dog.name}</h5>
            <img src={dog.image} alt={dog.name} className='text-base border-white w-12 h-12' />
          </div>
        ))}
      </div>
    );
  };
  
  export default Seen;
  