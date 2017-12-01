let mongoose = require('mongoose');

var waitingSchema = new mongoose.Schema({
    people : { type : Number, default : 1 },
    phone : { type : String , required : true }
});

var Waiting = mongoose.model('Wating', waitingSchema);

module.exports = Waiting;