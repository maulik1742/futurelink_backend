const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const testRoutes = require('./routes/test.routes');
const aiRoutes = require('./routes/ai.routes');

dotenv.config();

const app = express();

// Connect to Database
connectDB();

app.use(cors());
app.use(express.json());

app.use('/test', testRoutes);
app.use('/api', aiRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
