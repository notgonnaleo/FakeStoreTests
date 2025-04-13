const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

const cartController = {
    // Get all carts with optional parameters
    getAllCarts: async (req, res) => {
        try {
            const { limit, sort, startdate, enddate } = req.query;
            let url = `${BASE_URL}/carts`;
            const queryParams = [];

            if (startdate && enddate) {
                queryParams.push(`startdate=${startdate}`);
                queryParams.push(`enddate=${enddate}`);
            }
            if (limit) {
                queryParams.push(`limit=${limit}`);
            }
            if (sort) {
                queryParams.push(`sort=${sort}`);
            }

            if (queryParams.length > 0) {
                url += `?${queryParams.join('&')}`;
            }

            const response = await axios.get(url);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get single cart
    getCartById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.get(`${BASE_URL}/carts/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get user carts
    getUserCarts: async (req, res) => {
        try {
            const { userId } = req.params;
            const { startdate, enddate } = req.query;
            let url = `${BASE_URL}/carts/user/${userId}`;

            if (startdate && enddate) {
                url += `?startdate=${startdate}&enddate=${enddate}`;
            }

            const response = await axios.get(url);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Add new cart
    addCart: async (req, res) => {
        try {
            const response = await axios.post(`${BASE_URL}/carts`, req.body);
            res.status(201).json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update cart (PUT)
    updateCart: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.put(`${BASE_URL}/carts/${id}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Patch cart
    patchCart: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.patch(`${BASE_URL}/carts/${id}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete cart
    deleteCart: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await axios.delete(`${BASE_URL}/carts/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = cartController;