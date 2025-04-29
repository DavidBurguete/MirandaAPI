"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRoom = void 0;
const RoomEnum_1 = require("../interfaces/enums/RoomEnum");
const validateRoom = (roomToValidate) => {
    const errorArray = [];
    if (!Object.values(RoomEnum_1.enumRoomType).includes(roomToValidate.room_type)) {
        errorArray.push("Error: Invalid room type");
    }
    if (typeof roomToValidate.description !== "string" || roomToValidate.description.length <= 0) {
        errorArray.push("Error: The room must have a description");
    }
    if (typeof roomToValidate.photos !== "string" || roomToValidate.photos.length <= 0) {
        errorArray.push("Error: The room must have an array of strings");
    }
    if (typeof roomToValidate.offer !== "boolean") {
        errorArray.push("Error: The offer has to be type of boolean");
    }
    if (typeof roomToValidate.price !== "number" || roomToValidate.price <= 0) {
        errorArray.push("Error: The price has to be a number over 0");
    }
    if (typeof roomToValidate.discount !== "number" || roomToValidate.discount < 0 || roomToValidate.discount > 100) {
        errorArray.push("Error: The discount has to be a number over 0 and below 100");
    }
    if (typeof roomToValidate.cancellation_policy !== "string" || roomToValidate.cancellation_policy.length <= 0) {
        errorArray.push("Error: The room must have a cancellation policy");
    }
    if (Array.isArray(roomToValidate.amenities)) {
        const amenities = roomToValidate.amenities.map((amenity) => {
            if (Object.values(RoomEnum_1.enumAmenities).includes(amenity)) {
                return true;
            }
            return false;
        });
        if (amenities.includes(false)) {
            errorArray.push("Error: There is an element that is not an amenity");
        }
    }
    else {
        errorArray.push("Error: THe amenities have to be valid");
    }
    if (typeof roomToValidate.status !== "string" || !Object.values(RoomEnum_1.enumRoomStatus).includes(roomToValidate.status)) {
        errorArray.push("Error: Non valid argument for status");
    }
    return errorArray;
};
exports.validateRoom = validateRoom;
