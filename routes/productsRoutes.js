const express = require('express')

const productController = require('../controllers/productsController')

const router = express.Router()

router.get('/products', productController.getAllProducts)
.get('/products/:pid', productController.getProduct)
.post('/products', productController.createProduct)
.delete('/products/:pid', productController.deleteProduct)
.put('/products', productController.replaceProduct)
.patch('/products', productController.updateProduct)
.get('/something', productController.doSomething)


exports.router = router