const mongoose = require('mongoose');

/**
 * Represents a team member stored in the database.
 */
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