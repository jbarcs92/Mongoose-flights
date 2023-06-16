const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United'] 
    },
    airport: { 
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: { 
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: String,
        lastActiveAt: Date,
        default: function() {
            return new Date().getFullYear() + 1;
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);