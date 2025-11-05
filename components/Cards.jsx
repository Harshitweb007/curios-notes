import {useState} from 'react';
function Cards({title,shortText,details}){
  const[isOpen,setIsOpen]=useState(false);
  return(
   <div className="border rounded-2xl p-6 m-4 shadow-sm hover:shadow-md bg-gray-100 w-80 text-left">
    <h3 className='text-xl font-medium mb-2'>{title}</h3>
    <p className='text-gray-600 mb-2'>{shortText}</p>
    <button onClick={()=>setIsOpen(!isOpen)}
      className='bg-blue-500 rounded-xl px-6 py-1 text-white hover:bg-blue-800 font-medium hover:underline'
      >{isOpen?"Hide Details":"Show Details"}</button>
    {isOpen && (
      <ul className="mt-3 list-disc">{
        details.map((point,index)=>(
          <li key={index}>{point}</li>
        ))
        }</ul>
    )}
   </div>
  )
};
export default Cards;