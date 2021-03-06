'use-strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model;