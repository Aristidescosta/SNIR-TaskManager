import React from 'react';
import './AddTask.css';
import NavbarProfile from "../../Navbar/NavbarProfile";
import TodoForm from '../../TodoForm';

function Task(props) {
    function back(){
        window.history.back();
    }
    
    function addTask(title){
        alert(title);
    }

    return (
        <div className="container container-add-task">
            <NavbarProfile />
            <div className="title-addTask-container">
                <div className="title-addTask">
                    <span onClick={back} className="border-span"><i class="fal fa-angle-double-left"></i></span>
                    <div>
                        <p>Add Task</p>
                        <small>
                            Add tasks to be registered
                        </small>
                    </div>
                </div>

                {/* Form */}
                <TodoForm addTask={addTask}/>

            </div>
        </div>
    )
}

export default Task;
