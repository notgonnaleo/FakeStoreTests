const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         image:
 *           type: string
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/products', productController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.get('/products/:id', productController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 */
router.post('/products', productController.addProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update product
 *     tags: [Products]
 */
router.put('/products/:id', productController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete product
 *     tags: [Products]
 */
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;