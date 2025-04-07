// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    data:{
        type: Date,
        default: Date.now
    },
    content: String,
    likes:[
        {type: mongoose.Schema.Types.ObjectId, ref: "user"}
    ] 
});

module.exports = mongoose.model('post', postSchema);