function ToggleSwitch({isYearly,setIsYearly}){
  return(
    <div>
      <span className={`font-medium ${!isYearly? "text-blue-900":"text-blue-600"}`}>Monthly</span>
{/* switch */}
{ <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox"
  className="sr-only peer"
  checked={isYearly}
  onChange={()=>setIsYearly(!isYearly)}
  />
 <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
 <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
 </label> }
    <span className={`font-medium ${isYearly? "text-blue-900":"text-blue-600"}`}>Yearly</span>
    </div>
  );
}
export default ToggleSwitch;