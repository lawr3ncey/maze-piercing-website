    // routes/bookings.js
    import express from 'express';
    import verifyAdminToken from '../middleware/auth.js';
    import Booking from '../models/Booking.js'; // ✅ IMPORT the Booking model

    const router = express.Router();

    // Protected route
    router.get('/bookings', verifyAdminToken, async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    });

    export default router;
