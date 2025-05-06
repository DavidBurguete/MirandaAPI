import mongoose from "mongoose";
import { Booking } from "../interfaces/BookingInterfaces";
import { enumAmenities, enumRoomStatus, enumRoomType } from "../interfaces/enums/RoomEnum";
import { BookingStatus } from "../interfaces/enums/BookingEnum";

const BookingsSchema = new mongoose.Schema<Booking>({
    client_name: { type: String, required: true },
    room: {type: {
        room_type: { type: String, enum: Object.values(enumRoomType), required: true },
        description: { type: String, required: true },
        photos: { type: String, required: true },
        offer: { type: Boolean, default: false },
        price: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        cancellation_policy: { type: String, required: true },
        amenities: {
            type: [String],
            enum: Object.values(enumAmenities),
            default: []
        },
        status: { type: String, enum: Object.values(enumRoomStatus), required: true }
    }, required: true},
    client_id: { type: Number, required: true },
    order_date: { type: String, required: true },
    check_in_date: { type: String, required: true },
    check_out_date: { type: String, required: true },
    special_request: { type: String, required: true },
    status: { type: String, enum: Object.values(BookingStatus), required: true }
});

export default mongoose.model("Booking", BookingsSchema);