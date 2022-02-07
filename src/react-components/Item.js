import EditButton from "./EditButton.js"
import DeleteButton from "./DeleteButton.js"
import Reminder from "./Reminder.js"
import DueTime from "./DueTime.js"




const Item = ( {todo, onDelete, doRemind, onEdit} ) => {

            return (
                <div key={todo.id} className="item">
                    <div className="controls">
                        <Reminder 
                            todo={todo}
                            doRemind={doRemind}
                        />
                        <EditButton 
                            todo={todo}
                            onEdit={onEdit}
                        />
                        <DeleteButton 
                            todo={todo} onDelete={onDelete}
                        />
                    </div>
                    <div className="itemdata">
                        <h3>{todo.name}</h3>
                        <p>{todo.description}</p>
                        <h6>{todo.due}</h6>
                    </div>
                    <DueTime todo={todo}/>
                </div>
            )
};

export default Item;
