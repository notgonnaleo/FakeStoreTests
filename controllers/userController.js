const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

const userController = {
    // Get all users with optional limit and sort parameters
    getAllUsers: async (req, res) => {
        try {
            const { limit, sort } = req.query;
            let url = `${BASE_URL}/users`;

            // Add query parameters if they exist
            if (limit) {
                url += `?limit=${limit}`;
            }
            if (sort) {
                url += limit ? `&sort=${sort}` : `?sort=${sort}`;
            }

            const response = await axios.get(url);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get single user
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Add new user
    addUser: async (req, res) => {
        try {
            const response = await axios.post(`${BASE_URL}/users`, req.body);
            res.status(201).json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update user (PUT)
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.put(`${BASE_URL}/users/${id}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Patch user
    patchUser: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.patch(`${BASE_URL}/users/${id}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete user
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.delete(`${BASE_URL}/users/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;