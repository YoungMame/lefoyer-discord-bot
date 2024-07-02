const mongoose = require('mongoose')

const lawsuitSchema = mongoose.Schema(
    {
        id : {
            type: Number,
            required: true,
            unique: true
        },
        label : {
            type: String,
            required: true
        },
        facts : {
            type: [String],
            required: true
        },
        suspect : {
            type: Number,
            required: true
        },
        suspectLawyer : {
            type: Number,
            required: true
        },
        judge : {
            type: Number,
            required: true
        },
        sanction : {
            type: String,
            required: true,
            default: ""
        },
        yes : {
            type: Number,
            required: true
        },
        no : {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const model = mongoose.model("lawsuit", lawsuitSchema)

module.exports = model