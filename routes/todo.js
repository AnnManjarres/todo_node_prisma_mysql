let express = require('express')
let router = express.Router()
let { bringTodos, postNewTodo, deleteTodo } = require('../service/todo')


router.get('/', bringTodos)

router.post('/todo', postNewTodo)

router.delete('/todo/:id', deleteTodo)


module.exports = router