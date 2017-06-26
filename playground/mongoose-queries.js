const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '595162d2cffb1a5c0f50e444';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo By Id', todo);
// });

var id = '5951367433581ac018f9f677';

User.findOne({
    _id: id
}).then((user) => {
    console.log('User found', user)
});

User.findById(id).then((user) => {
    if (!user) {
        console.log('Unable to find user');
    }

    console.log('User By Id', user);
}, (e) => {
    console.log(e);
});