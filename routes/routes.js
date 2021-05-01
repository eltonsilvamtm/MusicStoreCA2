const express = require('../node_modules/express'),
router = express.Router();

var
// itemCtrl = require('./item-controller'),
userCtrl = require('../controlers/user-controller');
productCtrl = require('../controlers/product-controller');

// router.get('/hello', itemCtrl.getWorld);
// router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
// router.post('/hello', itemCtrl.postWorld);
// var fx = function(req,res){
//     res.send('pinto');
// };

// router.get('/', fx);

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

var multer = require("../node_modules/multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('../controlers/image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;