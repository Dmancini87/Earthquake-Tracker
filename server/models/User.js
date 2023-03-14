const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Earthquake = require('./Earthquake');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        },
      email: {
        type: String,
        required: true,
        unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        location: {
            type: String,
            required: true,
        },
        earthquakes: [Earthquake.Schema]
})