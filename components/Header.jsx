function Header({title,subTitle}){
  return(
   <div className="text-center mb-10">
    <h2 className="text-3xl font-semibold text-gray-900 mb-3">{title}</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">{subTitle}</p>
   </div>
  );
}
export default Header;