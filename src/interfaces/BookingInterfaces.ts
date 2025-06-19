import { BookingStatus } from "./enums/BookingEnum";
import { Room } from "./RoomInterfaces";

export interface Booking {
    _id: string,
    client_name: string,
    room: Room,
    order_date: string,
    check_in_date: string,
    check_out_date: string,
    status: BookingStatus,
    special_request: string
}