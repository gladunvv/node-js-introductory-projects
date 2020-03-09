const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: { type: String, default: '' },
  body: { type: String, default: '' },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = model('Todo', schema);
