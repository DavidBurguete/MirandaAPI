import { Room } from "../interfaces/RoomInterfaces";
import { validateRoom } from "../validators/roomsValidator";
const rooms: Room[] = require("../data/Rooms.json");

export const getAllRoomsService = (): Room[] => {
    return rooms as Room[];
}

export const getOneRoomService = (id: number): Room | undefined => {
    return rooms.find((room: Room) => room.room_id === id);
}

export const createRoomService = (newRoom: Room): Room[] | string[] => {
    const room: Room = { ...newRoom };
    rooms.push(room);
    return rooms;
};

export const updateRoomService = (updatedRoom: Room): Room | string[] => {
    rooms[updatedRoom.room_id] = { ...updatedRoom };
    return rooms[updatedRoom.room_id];
};

export const deleteRoomService = (roomID: number): boolean => {
    const indexOfRoom = rooms.findIndex((room: Room) => room.room_id === roomID);
    if(indexOfRoom !== -1){
        rooms.splice(indexOfRoom, 1);
        return true;
    }
    return false;
}