import React from 'react';


function Todo(props) {
    return (
        <li className="tasks" id={props.id}>
            <input 
                type="checkbox" 
                name="check" 
                id="todo-0" 
                defaultChecked={props.state} 
                />
            <span className="trash"><i class="fas fa-trash-alt"></i></span>
            <div className="listInfor">
                <span className="status">{props.title}</span>
                <span className="day">{props.date}</span>
            </div>
            
        </li>
    )
}

export default Todo
