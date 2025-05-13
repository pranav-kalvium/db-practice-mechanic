const express = require('express');
const Booking = require('../models/Booking');
const User = require('../models/User');
const router = express.Router();


router.post('/bookings', async (req, res) => {
  try {
    const { carModel, appointmentDate, mechanicId, ownerId } = req.body;

  
    if (new Date(appointmentDate) <= new Date()) {
      return res.status(400).json({ error: 'Appointment must be in the future' });
    }

   
    const mechanic = await User.findById(mechanicId);
    const owner = await User.findById(ownerId);

    if (!mechanic || mechanic.role !== 'mechanic') {
      return res.status(400).json({ error: 'Invalid mechanic' });
    }

    if (!owner || owner.role !== 'carOwner') {
      return res.status(400).json({ error: 'Invalid car owner' });
    }

    const booking = new Booking({ carModel, appointmentDate, mechanicId, ownerId });
    await booking.save();

    res.status(201).json({ message: 'Appointment booked successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
