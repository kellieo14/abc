const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    },
    title: {
        type: String, 
        required: true
    },
    bio: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports  = Member = mongoose.model('member', MemberSchema);