const express = require('express'),
router = express.Router();

var
// itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');
productCtrl = require('./product-controller');

// router.get('/hello', itemCtrl.getWorld);
// router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
// router.post('/hello', itemCtrl.postWorld);
var fx = function(req,res){
    res.send('pinto');
};

router.get('/', fx);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

router.post('/products', productCtrl.createProduct);
router.get('/products', productCtrl.getProducts);
router.get('/products/:id', productCtrl.getProduct);
router.put('/products/:id', productCtrl.updateProduct);
router.delete('/products/:id', productCtrl.deleteProduct);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;