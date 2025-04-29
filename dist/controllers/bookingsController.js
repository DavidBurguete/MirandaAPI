"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingController = exports.updateBookingController = exports.createBookingController = exports.getOneBookingController = exports.getAllBookingsController = void 0;
const bookings_1 = require("../services/bookings");
const bookingsValidator_1 = require("../validators/bookingsValidator");
const getAllBookingsController = (req, res) => {
    const bookings = (0, bookings_1.getAllBookingsService)();
    res.json(bookings);
};
exports.getAllBookingsController = getAllBookingsController;
const getOneBookingController = (req, res) => {
    const booking_id = parseInt(req.params.id);
    if (isNaN(booking_id)) {
        res.status(400).send({ message: "The parameter is not a booking id" });
    }
    const booking = (0, bookings_1.getOneBookingService)(booking_id);
    if (booking) {
        res.json(booking);
    }
    else {
        res.status(404).json({ message: "Booking not found" });
    }
};
exports.getOneBookingController = getOneBookingController;
const createBookingController = (req, res) => {
    const newBooking = req.body;
    const validBooking = (0, bookingsValidator_1.validateBooking)(newBooking);
    if (validBooking.length === 0) {
        const createdBooking = (0, bookings_1.createBookingService)(newBooking);
        res.status(201).json(createdBooking);
    }
    else {
        res.status(403).json({ errors: validBooking });
    }
};
exports.createBookingController = createBookingController;
const updateBookingController = (req, res) => {
    const updatedData = req.body;
    const validBooking = (0, bookingsValidator_1.validateBooking)(updatedData);
    if (validBooking.length === 0) {
        const updatedBooking = (0, bookings_1.updateBookingService)(updatedData);
        res.status(201).json(updatedBooking);
    }
    else {
        res.status(403).json({ errors: validBooking });
    }
};
exports.updateBookingController = updateBookingController;
const deleteBookingController = (req, res) => {
    const bookingToDeleteID = parseInt(req.params.id);
    if (isNaN(bookingToDeleteID)) {
        res.status(400).send({ message: "The parameter is not a booking id" });
    }
    const deletedBooking = (0, bookings_1.deleteBookingService)(bookingToDeleteID);
    if (deletedBooking) {
        res.json("Booking deleted");
    }
    else {
        res.status(404).json("Booking not found");
    }
};
exports.deleteBookingController = deleteBookingController;
