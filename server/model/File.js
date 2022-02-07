const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const File = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type:String},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
    date: {type: Date, default: Date.now()},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'File'},
    childs: [{type: mongoose.Schema.Types.ObjectId, ref: 'File'}],
})

module.exports = model('File', File)
