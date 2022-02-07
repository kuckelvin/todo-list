import React from "react";

const AddForm = ({setTodoItem, todo}) => {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [due, setDue] = React.useState("")
  const [reminder, setReminder] = React.useState(false)

  React.useEffect(() => {
    if (todo) {
      setName(todo.name)
      setDescription(todo.description)
      setDue(todo.due)
      setReminder(todo.reminder)
    }
  }, [todo])

  const submitTodoItem = (e) => {
    e.preventDefault()

    if (!name) {
      alert("todo item should be named!")
      return
    } 
    if (!due) {
      alert("Please input Due date!")
      return
    } 

    if (due < new Date()) {
      alert("Please input a valid Due date!")
      return
    }
    if (!todo) {
      let id = Math.floor(Math.random()*2000)
      const item = {id, name, description, due, reminder}
      setTodoItem(item)
    } else {
      let id = todo.id
      const item = {id, name, description, due, reminder}
      setTodoItem(item)
      console.log(id)
    }
    
    

    setName("")
    setDescription("")
    setDue("")
    setReminder(false)
    
  }
  
  return (
      <form action="" onSubmit={submitTodoItem}>
        <label>Item</label>
        <input 
          type="text" 
          placeholder="Add Item" 
          maxLength="84" 
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <label>Description</label>
        <input 
          type="text" 
          placeholder="Describe Item" 
          maxLength="120" 
          name="description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
         
        />
        <label>Due Date</label>
        <input 
          type="date" 
          placeholder="Item Due Date/Time" 
          name="due"
          value={due}
          onChange={(e)=>setDue(e.target.value)}
         
        />

        <label className="check">Set Reminder
          <input 
            type="checkbox"
            name="reminder"
            onChange={(e)=>setReminder(e.currentTarget.checked)}
            checked= {reminder}
          />
          <span className="customcheck"></span>
        </label>

        <input type="submit" value="Save To-Do Item!" className="btn btn-save"/>
      </form>
  )
};

export default AddForm;


/* const handleInputChange = event => {
  event.persist();
  setInputs(inputs => ({
    ...inputs,
    [event.target.name]: event.target.value
  }));
}; */