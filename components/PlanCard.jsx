function PlanCard({name,description,price, isYearly}){
return(
  <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 m-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
    <p className="text-gray-500 mb-6">{description}</p>
    <p className="text-4xl font-bold text-blue-600 mb-6">${isYearly?price*12:price}
    <span>/{isYearly?"year":"month"}</span>
    </p>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">Choose Plan</button>
  </div>
);
}
export default PlanCard;