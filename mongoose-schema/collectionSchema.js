const mongoose = require('mongoose');

const CollectionSchema = mongoose.Schema({ objet })
module.exports = mongoose.model('Collection', CollectionSchema)


// example of object
/* objet=   name : {
    type : String,
    required: true
},
email : {
    type : String,
    required: true
},
token : {
    type : String,
    required: true
 }*/