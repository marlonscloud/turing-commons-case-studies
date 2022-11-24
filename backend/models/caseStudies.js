const mongoose = require("mongoose")

const textArraySchema = mongoose.Schema({ id: { type: Number }, text: { type: String } })
const datasheetSchema = mongoose.Schema({ category: { type: String }, details: { type: String } })
const caseSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true
    },
    subheading: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    }, 
    keyConsiderations: {
        type: [String],
        required: true
    },
    prompts: {
        type: [textArraySchema]
    },
    people: {
        type: [textArraySchema]
    },
    datasheet: {
        type: [datasheetSchema]
    },
    featuredImage: {
        type: String
    }
  },
  {
    timestamps: true
  }
);
const Case = mongoose.model("Case", caseSchema);

module.exports = Case;