const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CartSchema extends Model {}

CartSchema.init(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        product_id: Number,
        quantity: Number,
        name: String,
        price: Number
      }
    ],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = CartSchema;