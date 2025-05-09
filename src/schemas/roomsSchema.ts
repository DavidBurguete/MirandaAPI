import mongoose from "mongoose";
import { Room } from "../interfaces/RoomInterfaces";
import { enumAmenities, enumRoomStatus, enumRoomType } from "../interfaces/enums/RoomEnum";

const RoomsSchema = new mongoose.Schema<Room>({
    room_name: { type: String, required: true},
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
});

export default mongoose.model("Room", RoomsSchema);