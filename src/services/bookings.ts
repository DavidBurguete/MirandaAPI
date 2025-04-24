import { Booking } from "../interfaces/BookingInterfaces";
import { validateBooking } from "../validators/bookingsValidator";
const bookings: Booking[] = require("../data/Bookings.json");

export const getAllBookings = (): Booking[] => {
    return bookings as Booking[];
}

export const getOneBooking = (id: number): Booking | undefined => {
    return bookings.find((booking: Booking) => booking.booking_id === id);
}

export const createBooking = (newBooking: Booking): Booking[] | string[] => {
    const validBooking = validateBooking(newBooking);
    if(validBooking.length === 0){
        const booking: Booking = { ...newBooking };
        bookings.push(booking);
        return bookings;
    }
    else{
        return validBooking;
    }
};

export const updateBooking = (updatedBooking: Booking): Booking | string[] => {
    const validBooking = validateBooking(updatedBooking);
    if(validBooking.length === 0){
        bookings[updatedBooking.booking_id] = { ...updatedBooking };
        return bookings[updatedBooking.booking_id];
    }
    else{
        return validBooking;
    }
};

export const deleteBooking = (bookingID: number): boolean => {
    const indexOfBooking = bookings.findIndex((booking: Booking) => booking.booking_id === bookingID);
    if(indexOfBooking !== -1){
        bookings.splice(indexOfBooking, 1);
        return true;
    }
    return false;
}