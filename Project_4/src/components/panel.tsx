const panel = (props:{name:string,breed:string, image:string, weight:string, age:string}) => {
    return (
        <div className='bg-red-gradient bg-opacity-15 flex flex-col items-center h-3/4 w-3/5 m-8'>
            <div className = 'text-slate-50 m-0'>
                <h1 className='text-5xl m-10'> Dog Discovery!</h1>
            </div>
            <div className = 'flex justify-center text-slate-50 m-0 text-sm'>
                
                <button className='bg-black p-1 m-3 text-slate-50 hover:border-sky-300 border-slate-300 w-30 h-30 text-center'>Breed: {props.name}</button>
                <button className='bg-black p-1 m-3 text-slate-50 hover:border-sky-300 border-slate-300 w-30 h-30 text-center'>Weight: {props.weight}</button>
                <button className='bg-black p-1 m-3 text-slate-50 hover:border-sky-300 border-slate-300 w-30 h-30 text-center'>Life Span: {props.age}</button>
            </div>
            <img src={props.image} alt={props.name} className = 'text-base border-white w-1/2 h-1/2 m-8'/>
        </div>
    )
}

export default panel;