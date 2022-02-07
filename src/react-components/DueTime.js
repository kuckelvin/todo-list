import DueCalc from "./DueCalc";

const DueTime = ( {todo} ) => {
  return (
      <div className="due-time">
          <i><DueCalc todo={todo}/></i>
      </div>
  )
};

export default DueTime;
