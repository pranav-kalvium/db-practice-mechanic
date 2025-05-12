const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  carModel: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  mechanicId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
