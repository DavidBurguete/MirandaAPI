import { Request, Response } from "express";
import * as RoomsService from "../services/rooms";
import { Room } from "../interfaces/RoomInterfaces";

export const getAllRooms = (req: Request, res: Response) => {
    const rooms = RoomsService.getAllRooms();
    res.json(rooms);
}

export const getOneRoom = (req: Request, res: Response) => {
    const room_id = parseInt(req.params.id);
    if(isNaN(room_id)){
        res.status(400).send({message: "The parameter is not a room id"});
    }
    const room = RoomsService.getOneRoom(room_id);
    if(room){
        res.json(room);
    }
    else{
        res.status(404).json({message: "Room not found"});
    }
}

export const createRoom = (req: Request, res: Response) => {
    const newRoom: Room = req.body;
    const createdRoom = RoomsService.createRoom(newRoom);
    if(Array.isArray(createdRoom)){
        res.status(403).json({errors: createdRoom});
    }
    else{
        res.status(201).json(createdRoom);
    }
};

export const updateRoom = (req: Request, res: Response) => {
    const updatedData: Room = req.body;
    const updatedRoom = RoomsService.updateRoom(updatedData);
    if(Array.isArray(updatedData)){
        res.status(403).json({errors: updatedRoom});
    }
    else{
        res.status(201).json(updatedRoom);
    }
};

export const deleteRoom = (req: Request, res: Response) => {
    const roomToDeleteID: number = req.body.room_id;
    const deletedRoom = RoomsService.deleteRoom(roomToDeleteID);
    if(deletedRoom){
        res.json("Room deleted");
    }
    else{
        res.status(404).json("Room not found");
    }
};