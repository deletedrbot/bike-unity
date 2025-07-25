const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initDb } = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');
const setupSwagger = require('./swagger');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

initDb();
setupSwagger(app);

app.use('/api/auth', authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}/api`);
});