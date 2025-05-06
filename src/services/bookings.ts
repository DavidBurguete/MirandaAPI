import { Booking } from "../interfaces/BookingInterfaces";
import BookingModel from "../schemas/bookingsSchema";

export const getAllBookingsService = async (): Promise<Booking[]> => {
    return await BookingModel.find();
}

export const getOneBookingService = async (id: string): Promise<Booking | null> => {
    const oneBooking = await BookingModel.findById(id);
    return oneBooking as Booking | null;
}

export const createBookingService = async (newBooking: Booking): Promise<Booking[]> => {
    await BookingModel.create(newBooking);
    return await getAllBookingsService();
};

export const updateBookingService = async (booking_id: string, updatedBooking: Booking): Promise<Booking> => {
    const updateBooking = await BookingModel.findByIdAndUpdate(
        booking_id,
        updatedBooking,
        { new: true }
    );
    return updateBooking as Booking;
};

export const deleteBookingService = async (bookingID: string): Promise<boolean> => {
    const deletedBooking = await BookingModel.findByIdAndDelete(bookingID);
    return deletedBooking !== null;
}