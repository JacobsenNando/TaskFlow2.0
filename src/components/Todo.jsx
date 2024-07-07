import React from 'react'

const Todo = ({todo,removeTodo,completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div className="contet">
              <p>{todo.text}</p>
              <p className="category">
               ({todo.category})
              </p>
            </div>
            <div>
              <button className='complete' onClick={()=> completeTodo(todo.id)}>Concluir</button>
              <button className='remove'onClick={()=> removeTodo(todo.id)}>Excluir</button>
              
            </div>
          </div>
  )
}

export default Todo