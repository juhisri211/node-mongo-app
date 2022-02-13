let router = require('express').Router();
Category = require('./category.js');
Product = require('./product.js');

//Add category.
router.post('/category/add', async function (req, res) {
   
    const { category } = req.body;
    console.log( category)
    const newCategory = await Category.create(category);
    
    await Product.updateMany({ '_id': newCategory.products }, { $push: { categories: newCategory._id } });
  
    return res.send(newCategory);
  
});

//List categories.
router.get('/category/list', async function (req, res) {
    const category = await Category.find();
  
    return res.send(category);
});

//List category by id.
router.get('/category/id', async function (req, res) {
    const _id = req.params.id;
    const category = await Category.findOne({ _id });
  
    return res.send(category);
});


//getAllProducts
router.get('/getallproducts', async function (req, res) {
    const product = await Product.find();
  
    return res.send(product);
});
// Export API routes
module.exports = router;    