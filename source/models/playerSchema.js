const mongoose =    require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    username:String,
    password:String,
    score:Number
})
const player = mongoose.model('player',playerSchema)
module.exports = player