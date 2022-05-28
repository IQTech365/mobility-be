const GiftCategoryModel = require("../models/GiftCategory");
const GiftModel = require("../models/Gift");

//** GiftCategory */
const createGiftCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    const GiftCategory = new GiftCategoryModel({
      category_name: category_name,
    });
    const doc = await GiftCategory.save();
    res.send({ GiftCategory: doc });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteGiftCategory = async (req, res) => {
  const _id = req.params.id;
  try {
    const giftCategory = await GiftCategoryModel.findByIdAndDelete(_id);
    if (!giftCategory) {
      return res.status(404).json({ error: "Error in deleting giftCategory!" });
    }
    return res.status(200).json({ success: true, data: giftCategory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateGiftCategory = async (req, res) => {
  try {
    const _id = req.params.id;
    const { category_name } = req.body;
    const giftCategory = await GiftCategoryModel.findOneAndUpdate(
      { _id: _id },
      { category_name: category_name },
      { new: true }
    );
    if (!giftCategory) {
      return res.status(404).json({ error: "Error in updating giftCategory!" });
    }
    return res.status(200).json({ success: true, data: giftCategory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllGiftCategory = async (req, res) => {
  try {
    const GiftCategories = await GiftCategoryModel.find({});
    res.send({ GiftCategories });
  } catch (error) {
    if (error.message) {
      return res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

//** Add Gift */
const addGift = async (req, res) => {
  try {
    const { gift_category, gift_image_url, gift_text_url, gift_text } = req.body;
    const Gift = new GiftModel({
      gift_category: gift_category,
      gift_image_url: gift_image_url,
      gift_text_url: gift_text_url,
      gift_text: gift_text,
    });
    const doc = await Gift.save();
    res.send({ Gift: doc });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteGift = async (req, res) => {
  const _id = req.params.id;
  try {
    const gift = await GiftModel.findByIdAndDelete(_id);
    if (!gift) {
      return res.status(404).json({ error: "Error in deleting gift!" });
    }
    return res.status(200).json({ success: true, data: gift });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateGift = async (req, res) => {
  try {
    const _id = req.params.id;
    const { category_name } = req.body;
    const gift = await GiftModel.findOneAndUpdate(
      { _id: _id },
      {
        category_name: category_name,
        gift_image_url: gift_image_url,
        gift_text_url: gift_text_url,
      },
      { new: true }
    );
    if (!gift) {
      return res.status(404).json({ error: "Error in updating gift!" });
    }
    return res.status(200).json({ success: true, data: gift });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllGift = async (req, res) => {
  try {
    const Gifts = await GiftModel.find({});
    res.send({ Gifts });
  } catch (error) {
    if (error.message) {
      return res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createGiftCategory,
  getAllGiftCategory,
  updateGiftCategory,
  deleteGiftCategory,
  addGift,
  deleteGift,
  updateGift,
  getAllGift,
};
