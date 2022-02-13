var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    name:           { type: String, required: true},
    price:          { type: String, required: true, min: 0 },
    categories:     [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
});
// Export Contact model
module.exports = mongoose.model('Product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}