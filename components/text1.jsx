function Text1(props){
  return(
    <div>
      <h2 className="text-center font-semibold text-xl  py-3">{props.head}</h2>
      <p className="font-md text-gray-500 text-center">{props.text}</p>
    </div>
  );
}
export default Text1;