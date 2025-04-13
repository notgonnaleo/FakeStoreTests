const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Shopping cart management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CartProduct:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *         quantity:
 *           type: integer
 *     Cart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         userId:
 *           type: integer
 *         date:
 *           type: string
 *           format: date
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CartProduct'
 */

/**
 * @swagger
 * /carts:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     parameters:
 *       - in: query
 *         name: startdate
 *         schema:
 *           type: string
 *       - in: query
 *         name: enddate
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: List of carts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 *
 *   post:
 *     summary: Create a new cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       201:
 *         description: Cart created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 */

/**
 * @swagger
 * /carts/{id}:
 *   get:
 *     summary: Get cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 *
 *   put:
 *     summary: Update cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 *
 *   patch:
 *     summary: Partially update cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date
 *               products:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/CartProduct'
 *     responses:
 *       200:
 *         description: Cart partially updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 *
 *   delete:
 *     summary: Delete cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart deleted successfully
 *       404:
 *         description: Cart not found
 */

/**
 * @swagger
 * /carts/user/{userId}:
 *   get:
 *     summary: Get user's carts
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: startdate
 *         schema:
 *           type: string
 *       - in: query
 *         name: enddate
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of user's carts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 *       404:
 *         description: No carts found for this user
 */

// Cart routes
router.get('/carts', cartController.getAllCarts);
router.get('/carts/:id', cartController.getCartById);
router.get('/carts/user/:userId', cartController.getUserCarts);
router.post('/carts', cartController.addCart);
router.put('/carts/:id', cartController.updateCart);
router.patch('/carts/:id', cartController.patchCart);
router.delete('/carts/:id', cartController.deleteCart);

module.exports = router;