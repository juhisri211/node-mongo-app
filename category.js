var mongoose = require('mongoose');
// Setup schema
var categorySchema = mongoose.Schema({
    name:       { type: String, required: true },
    products:   [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
});
// Export Category model
var Category = module.exports = mongoose.model('Category', categorySchema);
