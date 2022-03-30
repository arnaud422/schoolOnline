const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema(
    {
        createurId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        membres: {
            type: [String],
            required: true,
        },
        admin: {
            type: [String],
            required: true,
        },
        evenements: {
            type: [
                {
                    authorEventId: String,
                    authorEventPseudo: String,
                    text: String,
                    date: Number,
                }
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const GroupModel = mongoose.model('group', GroupSchema)
module.exports = GroupModel