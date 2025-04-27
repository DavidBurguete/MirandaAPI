import { BookingStatus } from "./enums/BookingEnum";

export interface Booking {
    client_name: string,
    booking_id: number,
    room_id: number,
    client_id: number,
    order_date: string,
    check_in_date: string,
    check_out_date: string,
    status: BookingStatus,
    special_request: string
}