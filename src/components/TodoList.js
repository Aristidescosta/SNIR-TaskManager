import React from 'react'

function TodoList(props) {
    return (
        <>
            <li className="tasks">
                <input 
                    type="checkbox" 
                    name="check" 
                    id={props.id} 
                    defaultChecked={props.state} 
                    />
                <span className="trash"><i class="fal fa-trash-alt"></i></span>
                <div className="listInfor">
                    <span className="status">{props.title}</span>
                    <span className="day">{props.data}</span>
                </div>
            </li>
        </>
    )
}

export default TodoList
