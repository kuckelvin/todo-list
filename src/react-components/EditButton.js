import { FaEdit } from "react-icons/fa";
//import { useState } from "react"

const EditButton = ( {todo, onEdit} ) => {
    return (
      <button className="btn btn-edit" onClick={()=>onEdit(todo.id)}>
          <FaEdit color = {todo.edit ? "blue" : "purple"}/>
      </button>
    )
        
  };
  
  export default EditButton
  