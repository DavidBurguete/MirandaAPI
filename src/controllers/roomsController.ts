import { Request, Response } from "express";
import {
    getAllRoomsService,
    getOneRoomService,
    createRoomService,
    updateRoomService,
    deleteRoomService
} from "../services/rooms";
import { Room } from "../interfaces/RoomInterfaces";
import { validateRoom } from "../validators/roomsValidator";

export const getAllRoomsController = (req: Request, res: Response) => {
    const rooms = getAllRoomsService();
    res.json(rooms);
}

export const getOneRoomController = (req: Request, res: Response) => {
    const room_id = parseInt(req.params.id);
    if(isNaN(room_id)){
        res.status(400).send({message: "The parameter is not a room id"});
    }
    const room = getOneRoomService(room_id);
    if(room){
        res.json(room);
    }
    else{
        res.status(404).json({message: "Room not found"});
    }
}

export const createRoomController = (req: Request, res: Response) => {
    const newRoom: Room = req.body;
    const validRoom = validateRoom(newRoom);
    if(validRoom.length === 0){
        const createdRoom = createRoomService(newRoom);
        res.status(201).json(createdRoom);
    }
    else{
        res.status(403).json({errors: validRoom});
    }
};

export const updateRoomController = (req: Request, res: Response) => {
    const updatedData: Room = req.body;
    const validRoom = validateRoom(updatedData);
    if(validRoom.length === 0){
        const updatedRoom = updateRoomService(updatedData);
        res.status(201).json(updatedRoom);
    }
    else{
        res.status(403).json({errors: validRoom});
    }
};

export const deleteRoomController = (req: Request, res: Response) => {
    const roomToDeleteID = parseInt(req.params.id);
    if(isNaN(roomToDeleteID)){
        res.status(400).send({message: "The parameter is not a room id"});
    }
    const deletedRoom = deleteRoomService(roomToDeleteID);
    if(deletedRoom){
        res.json("Room deleted");
    }
    else{
        res.status(404).json("Room not found");
    }
};