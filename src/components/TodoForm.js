import React, { useState, useEffect } from 'react'
import { Button } from './Button/Button'

function TodoForm(props) {
    const [name, setName] = useState();

    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleChange(e){
        setName(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Title task</span>
                    <input 
                        type="text" 
                        placeholder="Insert your " 
                        value={name}
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <span>Date</span>
                    <input type="date" />
                </div>

                <div>        
                    <Button buttonStyle='btn--primary' buttonSize="btn--large">
                        Creat task
                    </Button>

                    <Button buttonStyle='btn--outline' buttonSize="btn--large">
                        Edit task
                    </Button>
                </div>
            </form>  
        </>
    )
}


export default TodoForm
