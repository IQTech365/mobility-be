const mongoose = require('mongoose');

const GiftCategorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('GiftCategory', GiftCategorySchema)