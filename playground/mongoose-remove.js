const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.findOneAndRemove({_id: '595162e3cffb1a5c0f50e445'}).then((todo) => {
    console.log('Document removed', todo);
});

Todo.findByIdAndRemove('595162d2cffb1a5c0f50e444').then((todo) => {
    console.log('Document removed', todo);
});

