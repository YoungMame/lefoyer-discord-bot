const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        id : {
            type: Number,
            required: true,
            unique: true
        },
        discordId : {
            type: Number,
            required: true,
            required: true
        },
        name : {
            type: String,
            required: true
        },
        sex : {
            type: String,
            required: true,
            default: "m"
        },
        lvl : {
            type: Number,
            required: true,
            default: 0
        },
        mute : {
            type: Boolean,
            required: true,
            default: false
        },
        politic : {
            type: String,
            required: true,
            default: ""
        },
        warnings : {
            type: [String],
            required: true
        },
        bannedFrom : {
            type: [Number],
            required: true
        },
    },
    {
        timestamps: true
    }
)

const model = mongoose.model("user", userSchema)

module.exports = model