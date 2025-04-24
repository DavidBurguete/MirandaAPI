import { Room } from "../interfaces/RoomInterfaces";
import { validateRoom } from "../validators/roomsValidator";
const rooms: Room[] = require("../data/Rooms.json");

export const getAllRooms = (): Room[] => {
    return rooms as Room[];
}

export const getOneRoom = (id: number): Room | undefined => {
    return rooms.find((room: Room) => room.room_id === id);
}

export const createRoom = (newRoom: Room): Room[] | string[] => {
    const validRoom = validateRoom(newRoom);
    if(validRoom.length === 0){
        const room: Room = { ...newRoom };
        rooms.push(room);
        return rooms;
    }
    else{
        return validRoom;
    }
};

export const updateRoom = (updatedRoom: Room): Room | string[] => {
    const validRoom = validateRoom(updatedRoom);
    if(validRoom.length === 0){
        rooms[updatedRoom.room_id] = { ...updatedRoom };
        return rooms[updatedRoom.room_id];
    }
    else{
        return validRoom;
    }
};

export const deleteRoom = (roomID: number): boolean => {
    const indexOfRoom = rooms.findIndex((room: Room) => room.room_id === roomID);
    if(indexOfRoom !== -1){
        rooms.splice(indexOfRoom, 1);
        return true;
    }
    return false;
}