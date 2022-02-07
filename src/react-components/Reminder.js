import Bell from "./Icons/Bell.js"

const Reminder = ( {todo, doRemind} ) => {
  

  return (
    <button className="btn btn-reminder" onDoubleClick={()=>doRemind(todo.id)} >
        <Bell color={todo.reminder ? "green" : "red"} />
    </button>
  )
};

export default Reminder;


//{`btn btn-reminder ${remind ? 'green'  : 'red'}`} 
// onDoubleClick={doRemind}
//style={{backgroundColor: remind ? "green" : ""}}