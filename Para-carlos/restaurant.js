const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    default: 1,
    enum: [1,2,3,4,5,6,7],
  },
})

module.exports = mongoose.model('restaurant', restaurantSchema)
