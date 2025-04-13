const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         city:
 *           type: string
 *           example: kilcoole
 *         street:
 *           type: string
 *           example: 7835 new road
 *         number:
 *           type: integer
 *           example: 3
 *         zipcode:
 *           type: string
 *           example: 12926-3874
 *         geolocation:
 *           type: object
 *           properties:
 *             lat:
 *               type: string
 *               example: -37.3159
 *             long:
 *               type: string
 *               example: 81.1496
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID
 *           example: 1
 *         email:
 *           type: string
 *           format: email
 *           description: User email
 *           example: john@example.com
 *         username:
 *           type: string
 *           description: User username
 *           example: johnd
 *         password:
 *           type: string
 *           description: User password
 *           example: m38rmF$
 *         name:
 *           type: object
 *           properties:
 *             firstname:
 *               type: string
 *               example: John
 *             lastname:
 *               type: string
 *               example: Doe
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         phone:
 *           type: string
 *           example: 1-570-236-7033
 *       required:
 *         - email
 *         - username
 *         - password
 *         - name
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of users returned
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order for users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               username:
 *                 type: string
 *                 example: johnd
 *               password:
 *                 type: string
 *                 example: m38rmF$
 *               name:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                     example: John
 *                   lastname:
 *                     type: string
 *                     example: Doe
 *               address:
 *                 $ref: '#/components/schemas/Address'
 *               phone:
 *                 type: string
 *                 example: 1-570-236-7033
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid user data
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid user data
 *   patch:
 *     summary: Partially update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                   lastname:
 *                     type: string
 *               address:
 *                 $ref: '#/components/schemas/Address'
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: User partially updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid user data
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */

// User routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.addUser);
router.put('/users/:id', userController.updateUser);
router.patch('/users/:id', userController.patchUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;