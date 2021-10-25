import React, { useState, useEffect } from 'react';
import './Tasks.css';
import { Button } from '../../Button/Button';
import NavbarProfile from "../../Navbar/NavbarProfile";
import Todo from '../../Todo';

function AddTask(props) {
    const [task, setTask] = useState([]);

    function addTask(title){
        alert(title);
    }

    useEffect(() => {
        fetch('./task.json', {
        headers: {
            Accept: "Application/json"
        }
    }).then(res => res.json()).then(res => setTask(res))
    }, [])

    const taskList = task.map(task => (
    <Todo
        id={task.id}
        title={task.title}
        state={task.state}
        date={task.date}
        key={task.id}
      />
    )
  );


    const date = new Date();
    const dayDate = date.getHours();

    return (
        <div className="container container-task">

            <NavbarProfile />    

            <form>
                <div className="title">
                    <p>My Tasks</p>
                    <small>
                        Register your task and have a better monitoring
                        of your activities
                    </small>
                </div>

                <div className="input-group">
                    <span className="input-group-text group1"><i class="fab fa-google"></i></span>
                    <input type="text" placeholder="Find of tasks" />
                </div>

                {/* <p>{headingText}</p> */}
                <p>Tasks - </p>            

                <ul className="taskList">
                    {taskList}
                </ul>
                <Button buttonStyle='btn--primary'>
                    +
                </Button>
            </form>
        </div>
    )
}

export default AddTask;