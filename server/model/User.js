const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
    avatar: {type: String},
    files : [{type: mongoose.Schema.Types.ObjectId, ref:'File'}],
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema) 



