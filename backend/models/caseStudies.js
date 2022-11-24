const mongoose = require("mongoose")

const caseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
const Case = mongoose.model("Case", caseSchema);

module.exports = Case;