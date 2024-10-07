import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props

  return (
    <ul>
      {todos.map((todo, todoIndex) => {
        return(
          <TodoCard {...props} index={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
