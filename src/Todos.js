import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ?
        (todos.map(todo => {
            return (
                <div className='collectioon-item' key={todo.id}>
                    <span onClick={()=> {deleteTodo(todo.id)}}>
                        {todo.content}
                    </span>
                </div>
            )
        })) 
        : 
        (<p className='center'>You have no todos left</p>)
console.log("todos",todos)
  return (
    <div className= 'todos collection'>
      {todoList}
    </div>
  )
}

export default Todos