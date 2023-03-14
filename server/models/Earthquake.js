const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Earthquake = require('./Earthquake');

const userSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    Time: {
      type: Number,
      required: true,
    }
});