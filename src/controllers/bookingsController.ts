import { Request, Response } from "express";
import {
    getAllBookingsService,
    getOneBookingService,
    createBookingService,
    updateBookingService,
    deleteBookingService
} from "../services/bookings";
import { Booking } from "../interfaces/BookingInterfaces";
import { validateBooking } from "../validators/bookingsValidator";

export const getAllBookingsController = (req: Request, res: Response) => {
    const bookings = getAllBookingsService();
    res.json(bookings);
}

export const getOneBookingController = (req: Request, res: Response) => {
    const booking_id = parseInt(req.params.id);
    if(isNaN(booking_id)){
        res.status(400).send({message: "The parameter is not a booking id"});
    }
    const booking = getOneBookingService(booking_id);
    if(booking){
        res.json(booking);
    }
    else{
        res.status(404).json({message: "Booking not found"});
    }
}

export const createBookingController = (req: Request, res: Response) => {
    const newBooking: Booking = req.body;
    const validBooking = validateBooking(newBooking);
    if(validBooking.length === 0){
        const createdBooking = createBookingService(newBooking);
        res.status(201).json(createdBooking);
    }
    else{
        res.status(403).json({errors: validBooking});
    }
};

export const updateBookingController = (req: Request, res: Response) => {
    const updatedData: Booking = req.body;
    const validBooking = validateBooking(updatedData);
    if(validBooking.length === 0){
        const updatedBooking = updateBookingService(updatedData);
        res.status(201).json(updatedBooking);
    }
    else{
        res.status(403).json({errors: validBooking});
    }
};

export const deleteBookingController = (req: Request, res: Response) => {
    const bookingToDeleteID = parseInt(req.params.id);
    if(isNaN(bookingToDeleteID)){
        res.status(400).send({message: "The parameter is not a booking id"});
    }
    const deletedBooking = deleteBookingService(bookingToDeleteID);
    if(deletedBooking){
        res.json("Booking deleted");
    }
    else{
        res.status(404).json("Booking not found");
    }
};