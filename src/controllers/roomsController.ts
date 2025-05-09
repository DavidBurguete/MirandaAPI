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

export const getAllRoomsController = async (req: Request, res: Response) => {
    try{
        const rooms = await getAllRoomsService();
        res.json(rooms);
    }
    catch(error){
        res.status(500).json({ message: 'Error while fetching rooms' });
    }
}

export const getOneRoomController = async (req: Request, res: Response) => {
    const room_id = req.params.id;
    try{
        const room = await getOneRoomService(room_id);
        if(room){
            res.json(room);
        }
        else{
            res.status(404).json({message: "Room not found"});
        }
    }
    catch(error){
        res.status(500).json({message: "There was an error while fetching the room"});
    }
}

export const createRoomController = async (req: Request, res: Response) => {
    const newRoom = req.body;
    const validRoom = validateRoom(newRoom.newRoom as Room);
    if(validRoom.length === 0){
        try{
            const createdRoom = await createRoomService(newRoom.newRoom as Room);
            res.status(201).json(createdRoom);
        }
        catch(error){
            res.status(500).json({message: "Couldn't add the new room"});
        }
    }
    else{
        res.status(403).json({message: validRoom});
    }
};

export const updateRoomController = async (req: Request, res: Response) => {
    const room_id: string = req.params.id;
    const updatedData = req.body;
    const validRoom = validateRoom(updatedData.updatedRoom as Room);
    if(validRoom.length === 0){
        try{
            const updatedRoom = await updateRoomService(room_id, updatedData.updatedRoom as Room);
            res.status(201).json(updatedRoom);
        }
        catch(error){
            res.status(500).json({message: "Couldn't update the room"});
        }
    }
    else{
        res.status(403).json({message: validRoom});
    }
};

export const deleteRoomController = async (req: Request, res: Response) => {
    const roomToDeleteID = req.params.id;
    try{
        const deletedRoom = await deleteRoomService(roomToDeleteID);
        if(deletedRoom){
            res.json({message: "Room deleted"});
        }
        else{
            res.status(404).json({message: "Room not found"});
        }
    }
    catch(error){
        res.status(500).json({message: "Couldn't delete the room"});
    }
};