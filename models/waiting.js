let mongoose = require('mongoose');

var waitingSchema = new mongoose.Schema({
    id : {type : Number, require : true},
    people : { type : Number, require : true },
    phone : { type : String , required : true },
    menu : { type : String, require : true}
});

var Waiting = mongoose.model('Wating', waitingSchema);

module.exports = Waiting;