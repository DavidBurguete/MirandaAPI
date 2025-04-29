"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBooking = void 0;
const BookingEnum_1 = require("../interfaces/enums/BookingEnum");
const rooms = require("../data/Rooms.json");
const validateBooking = (bookingToValidate) => {
    const errorArray = [];
    if (typeof bookingToValidate.client_name !== "string" || bookingToValidate.client_name.length <= 0) {
        errorArray.push("Error: The client's name must be a valid type");
    }
    if (typeof bookingToValidate.room_id !== "number" || !isValidRoom(bookingToValidate.room_id)) {
        errorArray.push("Error: The room id must be of an existing room");
    }
    if (typeof bookingToValidate.order_date !== "string" || !isValidDate(bookingToValidate.order_date)) {
        errorArray.push("Error: The ordered date is not valid");
    }
    if (typeof bookingToValidate.check_in_date !== "string" || !isValidDate(bookingToValidate.check_in_date)) {
        errorArray.push("Error: The check in date is not valid");
    }
    if (typeof bookingToValidate.check_out_date !== "string" || !isValidDate(bookingToValidate.check_out_date)) {
        errorArray.push("Error: The check out date is not valid");
    }
    if (typeof bookingToValidate.status !== "string" || !Object.values(BookingEnum_1.BookingStatus).includes(bookingToValidate.status)) {
        errorArray.push("Error: Non valid argument for status");
    }
    if (typeof bookingToValidate.special_request !== "string") {
        errorArray.push("Error: The type of special request is not valid");
    }
    return errorArray;
};
exports.validateBooking = validateBooking;
const isValidDate = (dateToValidate) => {
    const date = new Date(dateToValidate);
    return !isNaN(date.getDate());
};
const isValidRoom = (validID) => {
    const room = rooms.filter(room => room.room_id === validID);
    return room.length !== 0;
};
