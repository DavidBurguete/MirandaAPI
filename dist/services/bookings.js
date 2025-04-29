"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingService = exports.updateBookingService = exports.createBookingService = exports.getOneBookingService = exports.getAllBookingsService = void 0;
const bookings = require("../data/Bookings.json");
const getAllBookingsService = () => {
    return bookings;
};
exports.getAllBookingsService = getAllBookingsService;
const getOneBookingService = (id) => {
    return bookings.find((booking) => booking.booking_id === id);
};
exports.getOneBookingService = getOneBookingService;
const createBookingService = (newBooking) => {
    const booking = Object.assign({}, newBooking);
    bookings.push(booking);
    return bookings;
};
exports.createBookingService = createBookingService;
const updateBookingService = (updatedBooking) => {
    bookings[updatedBooking.booking_id] = Object.assign({}, updatedBooking);
    return bookings[updatedBooking.booking_id];
};
exports.updateBookingService = updateBookingService;
const deleteBookingService = (bookingID) => {
    const indexOfBooking = bookings.findIndex((booking) => booking.booking_id === bookingID);
    if (indexOfBooking !== -1) {
        bookings.splice(indexOfBooking, 1);
        return true;
    }
    return false;
};
exports.deleteBookingService = deleteBookingService;
