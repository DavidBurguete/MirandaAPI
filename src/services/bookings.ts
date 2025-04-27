import { Booking } from "../interfaces/BookingInterfaces";
import { validateBooking } from "../validators/bookingsValidator";
const bookings: Booking[] = require("../data/Bookings.json");

export const getAllBookingsService = (): Booking[] => {
    return bookings as Booking[];
}

export const getOneBookingService = (id: number): Booking | undefined => {
    return bookings.find((booking: Booking) => booking.booking_id === id);
}

export const createBookingService = (newBooking: Booking): Booking[] | string[] => {
    const booking: Booking = { ...newBooking };
    bookings.push(booking);
    return bookings;
};

export const updateBookingService = (updatedBooking: Booking): Booking | string[] => {
    bookings[updatedBooking.booking_id] = { ...updatedBooking };
    return bookings[updatedBooking.booking_id];
};

export const deleteBookingService = (bookingID: number): boolean => {
    const indexOfBooking = bookings.findIndex((booking: Booking) => booking.booking_id === bookingID);
    if(indexOfBooking !== -1){
        bookings.splice(indexOfBooking, 1);
        return true;
    }
    return false;
}