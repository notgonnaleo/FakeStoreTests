const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

const productController = {
    // Get all products
    getAllProducts: async (req, res) => {
        try {
            const response = await axios.get(`${BASE_URL}/products`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get single product
    getProductById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Add new product
    addProduct: async (req, res) => {
        try {
            const response = await axios.post(`${BASE_URL}/products`, req.body);
            res.status(201).json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update product
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.put(`${BASE_URL}/products/${id}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete product
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.delete(`${BASE_URL}/products/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = productController;