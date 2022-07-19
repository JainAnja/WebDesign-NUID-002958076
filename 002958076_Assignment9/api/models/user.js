const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({
    email_id:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});


module.exports = User = mongoose.model("User", userSchema);