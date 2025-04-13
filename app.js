const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/swagger');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', cartRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/swagger`);
});