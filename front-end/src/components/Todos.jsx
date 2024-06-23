export function Todos({ todos }) {
        return (
        <div>
            {todos.map(todo => {
                return (
                    <div><h2>{todo.title}</h2>
                        <h3>{todo.description}</h3>
                        <button>{todo.completed == true ? "Done" : "Mark as done"}</button>
                    </div>
                )
            })}

        </div>
    )
}