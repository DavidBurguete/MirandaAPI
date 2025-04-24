import { Request, Response } from "express";
import * as BookingsService from "../services/bookings";
import { Booking } from "../interfaces/BookingInterfaces";

export const getAllBookings = (req: Request, res: Response) => {
    const bookings = BookingsService.getAllBookings();
    res.json(bookings);
}

export const getOneBooking = (req: Request, res: Response) => {
    const booking_id = parseInt(req.params.id);
    if(isNaN(booking_id)){
        res.status(400).send({message: "The parameter is not a booking id"});
    }
    const booking = BookingsService.getOneBooking(booking_id);
    if(booking){
        res.json(booking);
    }
    else{
        res.status(404).json({message: "Booking not found"});
    }
}

export const createBooking = (req: Request, res: Response) => {
    const newBooking: Booking = req.body;
    const createdBooking = BookingsService.createBooking(newBooking);
    if(Array.isArray(createdBooking)){
        res.status(403).json({errors: createdBooking});
    }
    else{
        res.status(201).json(createdBooking);
    }
};

export const updateBooking = (req: Request, res: Response) => {
    const updatedData: Booking = req.body;
    const updatedBooking = BookingsService.updateBooking(updatedData);
    if(Array.isArray(updatedData)){
        res.status(403).json({errors: updatedBooking});
    }
    else{
        res.status(201).json(updatedBooking);
    }
};

export const deleteBooking = (req: Request, res: Response) => {
    const bookingToDeleteID: number = req.body.booking_id;
    const deletedBooking = BookingsService.deleteBooking(bookingToDeleteID);
    if(deletedBooking){
        res.json("Booking deleted");
    }
    else{
        res.status(404).json("Booking not found");
    }
};