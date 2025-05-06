import { Room } from "../interfaces/RoomInterfaces";
import RoomModel from "../schemas/roomsSchema";

export const getAllRoomsService = async (): Promise<Room[]> => {
    return await RoomModel.find();
}

export const getOneRoomService = async (id: string): Promise<Room | null> => {
    const roomsToGetOne = await RoomModel.findById(id);
    return roomsToGetOne as Room | null;
}

export const createRoomService = async (newRoom: Room): Promise<Room[]> => {
    await RoomModel.create(newRoom);
    return await getAllRoomsService();
};

export const updateRoomService = async (room_id: String, updatedRoom: Room): Promise<Room> => {
    const updateRoom = await RoomModel.findByIdAndUpdate(
        room_id,
        updatedRoom,
        { new: true }
    );
    return updateRoom as Room;
};

export const deleteRoomService = async (roomID: string): Promise<boolean> => {
    const deletedRoom = await RoomModel.findByIdAndDelete(roomID);
    return deletedRoom !== null;
}