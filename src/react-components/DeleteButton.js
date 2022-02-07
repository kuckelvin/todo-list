import {FaTimes} from "react-icons/fa"

const DeleteButton = ({todo, onDelete}) => {

    return (
      <button className="btn btn-delete" onClick={()=>onDelete(todo.id)}>
          <FaTimes />
      </button>
    )
        
  };
  
  export default DeleteButton
  