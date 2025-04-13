const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

const authController = {
    // Login user
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Validate required fields
            if (!username || !password) {
                return res.status(400).json({ 
                    error: 'Username and password are required' 
                });
            }

            const response = await axios.post(`${BASE_URL}/auth/login`, {
                username,
                password
            });

            res.json({
                token: response.data.token,
                status: 'success'
            });
        } catch (error) {
            res.status(401).json({ 
                error: 'Invalid credentials',
                details: error.message 
            });
        }
    }
};

module.exports = authController;