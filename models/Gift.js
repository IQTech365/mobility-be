const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema(
  {
    gift_category: {
      type: [String],
      required: true,
    },
    gift_image_url: {
      type: String,
      required: true,
      unique: true,
    },
    gift_text_url: {
      type: String,
      required: true,
    },
    gift_text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Gift', GiftSchema)