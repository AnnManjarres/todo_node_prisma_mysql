function deleteTodo(id) {
    let confirmation = confirm("Quieres eliminar esta tarea?")
    if(confirmation == true) {
        fetch(`http://localhost:3000/todo/${id}`, {
            method: 'delete',
        })
        .then(() => {console.log("Eliminado")})
        .catch((err) => {console.log(err)})
    }

}

