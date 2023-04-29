
import { useState } from 'react'

const ComponentA = () => {
    const [newTodo, setNewTodo] = useState('');
    const [lastName, setLastname] = useState('');

    const [todos, setTodos] = useState(() => {
        const storedTodo = localStorage.getItem('todos');
        return storedTodo ? JSON.parse(storedTodo) : [];
       
    });
    console.log(localStorage);
    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleNewToDoSubmit = (e) => {
        e.preventDefault();

        if (!newTodo.trim()) return;

        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('')

    }

    localStorage.setItem('todos', JSON.stringify(todos));

    const handleDeleteToDo = (id) => {
        const updateToDos = todos.filter((item) => item.id !== id);
        setTodos(updateToDos);
    }

    return (
        <div>
            <h1>To do List</h1>
            <form onSubmit={handleNewToDoSubmit}>
                <label>
                    Name:
                    <input type="text" value={newTodo} onChange={handleNewTodoChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
          
                {
                    todos.map((item) => (
                        <h3 key={item.id}>
                            <span>{item.text}</span>
                            <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
                        </h3>
                    ))
                }
            
        </div>
    )
}

export default ComponentA;