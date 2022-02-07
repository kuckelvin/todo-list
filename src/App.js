import "./index.css";
import { useState } from "react";
import TopLayout from "./react-components/TopLayout.js";
import ItemsList from "./react-components/ItemsList.js";
import AddForm from "./react-components/AddForm.js";
import Footer from "./react-components/Footer.js";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingTodoItem, setEditingTodoItem] = useState(null);
  const [defaultTodos, setDefaultTodos] = useState([
    {
      id: 1,
      name: "Have Breakfast",
      description: "First meal of the day",
      due: "2022-06-28",
      reminder: true,
    },
    {
      id: 2,
      name: "Have Lunch",
      description: "Second meal of the day",
      due: "2022-2-12",
      reminder: false,
    },
    {
      id: 3,
      name: "Have Dinner",
      description: "Last meal of the day",
      due: "2022-4-4",
      reminder: true,
    },
  ]);


  const dueCalculation = () => {
    console.log(defaultTodos.due)
  }

  const changeReminder = (id) => {
    let concernedTodo = defaultTodos.find((todo, index) => 
     (todo.id === id ))
    //let newReminder= !concernedTodo.reminder
    setDefaultTodos(defaultTodos.map((todo) => 
    (todo.id === id) ? {...todo, reminder: !concernedTodo.reminder} : todo))
  };

  const addTodoItem = (item) => {
    setDefaultTodos([...defaultTodos, item]);
    setEditingTodoItem(null)
  };

  // const formShow = () => {
  //   setShowForm(!showForm);
  // };

  //Delete Item
  const deleteItem = (id) => {
    setDefaultTodos(defaultTodos.filter((todo) => todo.id !== id));
  };


  const editForm = (id) => {
    if (showForm === false) {
      setShowForm(!showForm)
    } 
    let concernedTodo = defaultTodos.find((todo, index) => 
    (todo.id === id ))
    setEditingTodoItem(concernedTodo)
    //concernedTodo.name = {editName}
    //populateForm(concernedTodo)
    deleteItem(id)
  }
  
  // const toggleRemind = (id) => {
  //   setDefaultTodos(defaultTodos.forEach(
  //     (todo)=>((todo.id === id) && !todo.reminder)
  //     ))

  //   console.log(id)
  // }

  // const remind = (color = "") => {
  //   setDefaultTodos(
  //     defaultTodos.map((todo) => todo.reminder === true && (color = "green"))
  //   );
  // };

  return (
    <div className="container">
      <TopLayout
        formShow={()=>setShowForm(!showForm)}
        text={showForm ? "HIDE FORM" : "ADD TODO ITEM"}
        btnBgColor={showForm ? "red" : "green"}
        //populateForm={populateForm}
      />
      <ItemsList
        todos={defaultTodos}
        onDelete={deleteItem}
        //reminder={(id)=defaultTodos()}
        doRemind={changeReminder}
        onEdit={editForm}
        dueCalculation={dueCalculation}
      />
      {showForm ? (
        <AddForm  
          setTodoItem={addTodoItem}
          todo={editingTodoItem}
        />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default App;
