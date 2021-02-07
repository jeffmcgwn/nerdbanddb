const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    band: {
        type: String,
        required: true
    },
    blurb: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    youtube: {
        type: String
    },
    image: {
        type: String
    },
    facebook: {
        type: String 
    },
    instagram: {
        type: String 
    },
    twitter: {
        type: String 
    },
    bandcamp: {
        type: String 
    },
    spotify: {
        type: String 
    },
    twitch: {
        type: String 
    },
    patreon: {
        type: String 
    },
    website: {
        type: String 
    },
    snapchat: {
        type: String 
    },

    type: {
        type: String,
        default: 'Video Game Cover Band'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('contact', ContactSchema);