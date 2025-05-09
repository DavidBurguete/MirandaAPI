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

export const getAllBookingsController = async (req: Request, res: Response) => {
    try{
        const bookings = await getAllBookingsService();
        res.json(bookings);
    }
    catch(error){
        res.status(500).json({message: "Error while fetching"});
    }
}

export const getOneBookingController = async (req: Request, res: Response) => {
    const booking_id = req.params.id;
    try{
        const booking = await getOneBookingService(booking_id);
        if(booking){
            res.json(booking);
        }
        else{
            res.status(404).json({message: "Booking not found"});
        }
    }
    catch(error){
        res.status(500).json({message: "There was an error while fetching the booking"});
    }
}

export const createBookingController = async (req: Request, res: Response) => {
    const newBooking: Booking = req.body;
    const validBooking = validateBooking(newBooking);
    if(validBooking.length === 0){
        try{
            const createdBooking = await createBookingService(newBooking);
            res.status(201).json(createdBooking);
        }
        catch(error){
            res.status(500).json({message: "Couldn't add the new booking"});
        }
    }
    else{
        res.status(403).json({message: validBooking});
    }
};

export const updateBookingController = async (req: Request, res: Response) => {
    const booking_id: string = req.params.id;
    const updatedData: Booking = req.body;
    const validBooking = validateBooking(updatedData);
    if(validBooking.length === 0){
        try{
            const updatedBooking = await updateBookingService(booking_id, updatedData);
            res.status(201).json(updatedBooking);
        }
        catch(error){
            res.status(500).json({message: "Couldn't update the booking"});
        }
    }
    else{
        res.status(403).json({message: validBooking});
    }
};

export const deleteBookingController = async (req: Request, res: Response) => {
    const bookingToDeleteID = req.params.id;
    try{
        const deletedBooking = await deleteBookingService(bookingToDeleteID);
        if(deletedBooking){
            res.json({message: "Booking deleted"});
        }
        else{
            res.status(404).json({message: "Booking not found"});
        }
    }
    catch(error){
        res.status(500).json({message: "Couldn't delete the booking"});
    }
};