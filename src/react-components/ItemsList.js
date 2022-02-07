import Item from "./Item.js"

const ItemsList = ( {todos, onDelete, doRemind, onEdit} ) => {

  return (
    todos.map((todoItem) => {
      return (
        
        <div key={todoItem.id} style={{backgroundColor:`${todoItem.reminder ? "aqua" : "pink" }`}}>
          <Item todo={todoItem} onDelete={onDelete} doRemind={doRemind} onEdit={onEdit}/>
        </div> 
      )
    })
  )
}

export default ItemsList

//(id)=>((todoItem.id === id) && !todoItem.reminder)