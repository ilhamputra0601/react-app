
const TodoList =(props)=>{
    return(
        <ul className='todo'>{
            props.dataTodos.map((todo) =>{
                return <li key={todo.id}>{todo.title}</li>
            })
        }</ul>
    )
}
export default TodoList