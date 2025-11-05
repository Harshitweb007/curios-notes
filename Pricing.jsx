import  PLANS,{pricingFeatures} from "./data/plans.js";
import {useState} from 'react';
import Header from './components/Header'
import ToggleSwitch from "./components/Toggle";
import PlanCard from './components/PlanCard';
import Cards from './components/Cards';
import Text1 from "./components/text1.jsx";
function Pricing(){
  const [isYearly,setIsYearly]=useState(false);
  const displayedPlans=isYearly? PLANS.map((plan)=>({...plan,price:plan.price*12}))
  :PLANS;

  
  return(
    <div>
    <section className="bg-gray-50 py-16 px-6 text-center">

      <Header title="Our Pricing" subTitle="Plan your notes, not your worries"/>
      
        <div className="flex justify-center mb-8">
      <ToggleSwitch isYearly={isYearly} setIsYearly={setIsYearly}/>
      </div>
     
     <div className="min-h-screen flex items-center justify-center bg-white">
      {displayedPlans.map((plan)=>(
        <PlanCard key={plan.id} {...plan} isYearly={isYearly}/>
        
      ))}
      </div>
    </section>
    <section className="bg-blue-700 py-16 px-6 flex flex-wrap justify-center">
    {pricingFeatures.map((feature)=>(
      <Cards key={feature.id}
      title={feature.title}
      shortText={feature.shortText}
      details={feature.details}
     />
    ))}
   
    </section>
     <div className=" mb-5 bg-amber-100">
    <Text1 head="Pricing FAQ" text="Got questions? We ve got all the answers you need before you subscribe."/>
    </div>
    </div>
  );
}
export default Pricing;