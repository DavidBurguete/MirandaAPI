import { Room } from "../interfaces/RoomInterfaces";
import RoomModel from "../schemas/roomsSchema";
const rooms: Room[] = require("../data/Rooms.json");

export const getAllRoomsService = async (): Promise<Room[]> => {
    return await RoomModel.find();
}

export const getOneRoomService = async (id: number): Promise<Room | undefined> => {
    const roomsToGetOne = await RoomModel.find();
    return roomsToGetOne.find((room: Room) => room.room_id === id);
}

export const createRoomService = async (newRoom: Room): Promise<Room[]> => {
    await RoomModel.create(newRoom);
    return await getAllRoomsService();
};

export const updateRoomService = async (updatedRoom: Room): Promise<Room> => {
    rooms[updatedRoom.room_id] = { ...updatedRoom };
    const updateRoom = await RoomModel.findOneAndUpdate(
        { room_id: updatedRoom.room_id },
        updatedRoom,
        { new: true }
    );
    return updateRoom as Room;
};

export const deleteRoomService = async (roomID: number): Promise<boolean> => {
    const deletedRoom = await RoomModel.deleteOne({room_id: roomID});
    return deletedRoom.deletedCount === 1;
}