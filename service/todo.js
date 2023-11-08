const { PrismaClient } =  require('@prisma/client')
const prisma = new PrismaClient()


let bringTodos = async (req, res) => {
    let allTodos = await prisma.todo.findMany()
    res.render('home', {todos: allTodos})
    
}

let postNewTodo =  async (req, res) => {
    let body = req.body
    await prisma.todo.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    res.redirect('/')
}

let deleteTodo = async (req, res) => {
    let id = parseInt(req.params.id)
    await prisma.todo.delete({
        where: {
            id: id
        }
    })
    res.redirect('/')

}


module.exports = { bringTodos, postNewTodo, deleteTodo }
