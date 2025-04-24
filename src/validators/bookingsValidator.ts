import { BookingStatus } from "../enums/BookingEnum";
import { Booking } from "../interfaces/BookingInterfaces";
import { Room } from "../interfaces/RoomInterfaces";
const rooms: Room[] = require("../data/Rooms.json");

export const validateBooking = (bookingToValidate: Booking): string[] => {
    const errorArray = [] as string[];
    if(typeof bookingToValidate.client_name !== "string"|| bookingToValidate.client_name.length <= 0){
        errorArray.push("Error: The client's name must be a valid type");
    }
    if(typeof bookingToValidate.room_id !== "number" || isValidRoom(bookingToValidate.room_id)){
        errorArray.push("Error: The room id must be of an existing room");
    }
    if(typeof bookingToValidate.order_date !== "string" || isValidDate(bookingToValidate.order_date)){
        errorArray.push("Error: The ordered date is not valid");
    }
    if(typeof bookingToValidate.check_in_date !== "string" || isValidDate(bookingToValidate.check_in_date)){
        errorArray.push("Error: The check in date is not valid");
    }
    if(typeof bookingToValidate.check_out_date !== "string"|| isValidDate(bookingToValidate.check_out_date)){
        errorArray.push("Error: The check out date is not valid");
    }
    if(typeof bookingToValidate.status !== "string" || !Object.values(BookingStatus).includes(bookingToValidate.status)){
        errorArray.push("Error: Non valid argument for status");
    }
    if(typeof bookingToValidate.special_request !== "string"){
        errorArray.push("Error: The type of special request is not valid");
    }
    return errorArray;
}

const isValidDate = (dateToValidate: string): boolean => {
    const date = new Date(dateToValidate);
    return !isNaN(date.getDate());
}

const isValidRoom = (validID: number): boolean => {
    const room = rooms.filter(room => room.room_id === validID);
    return room.length !== 0;
}