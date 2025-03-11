const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const logisticsRoutes = require('./routes/logisticsRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/ride', rideRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});