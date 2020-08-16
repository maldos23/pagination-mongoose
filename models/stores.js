const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Store = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

Store.plugin(mongoosePaginate);

module.exports = model("stores", Store);
