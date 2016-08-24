var mongoose = require('mongoose');

var MinutesSchema = new mongoose.Schema({
  dateOf:         { type: Date,  required: true },
  type:           { type: String, required: true },
  approved:     { type: Boolean, required: true },
  headline:     { type: String, required: true},
  author:       { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  { timestamps: true }  // createdAt, updatedAt
);

function date2String(date) {
  var options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}

MinutesSchema.methods.getDateOf = function() {
  return date2String(this.dateOf);
};

MinutesSchema.methods.getCreatedAt = function() {
  return date2String(this.createdAt);
};

MinutesSchema.methods.getUpdatedAt = function() {
  return date2String(this.updatedAt);
};

module.exports = mongoose.model('Minutes', MinutesSchema);
