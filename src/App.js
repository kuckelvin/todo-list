import "./index.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import TopLayout from "./react-components/TopLayout.js";
import ItemsList from "./react-components/ItemsList.js";
import AddForm from "./react-components/AddForm.js";
import Footer from "./react-components/Footer.js";

function App() {
  const [showForm, setShowForm] = useState(false);
  //const [showModal, setShowModal] = useState(false);
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
    if (showForm !== false) {
      setShowForm(!showForm)
    } 
    let concernedTodo = defaultTodos.find((todo, index) => 
    (todo.id === id ))
    setEditingTodoItem(concernedTodo)
    deleteItem(id)
  }


  return (
    <div className="container">
      <TopLayout
        formShow={()=>setShowForm(!showForm)}
        text={showForm ? "HIDE FORM" : "ADD TODO ITEM"}
        btnBgColor={showForm ? "rgb(230, 57, 70)" : "rgb(29, 53, 87)"}
      />
      <ItemsList
        todos={defaultTodos}
        onDelete={deleteItem}
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
      )};
      {(editingTodoItem !== null) ? (
        <div className="modalContainer">
        <div id="open-modal" className="modalWindow">
          <FaTimes onClick={()=> setEditingTodoItem(null)} className="modalClose"/>
          <AddForm
            setTodoItem={addTodoItem}
            todo={editingTodoItem}
          />
        </div>
      </div>
      ) : (
        ""
      )
        
      }
      
      
      <Footer />
    </div>
  );
}

export default App;
