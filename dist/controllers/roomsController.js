"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomController = exports.updateRoomController = exports.createRoomController = exports.getOneRoomController = exports.getAllRoomsController = void 0;
const rooms_1 = require("../services/rooms");
const roomsValidator_1 = require("../validators/roomsValidator");
const getAllRoomsController = (req, res) => {
    const rooms = (0, rooms_1.getAllRoomsService)();
    res.json(rooms);
};
exports.getAllRoomsController = getAllRoomsController;
const getOneRoomController = (req, res) => {
    const room_id = parseInt(req.params.id);
    if (isNaN(room_id)) {
        res.status(400).send({ message: "The parameter is not a room id" });
    }
    const room = (0, rooms_1.getOneRoomService)(room_id);
    if (room) {
        res.json(room);
    }
    else {
        res.status(404).json({ message: "Room not found" });
    }
};
exports.getOneRoomController = getOneRoomController;
const createRoomController = (req, res) => {
    const newRoom = req.body;
    const validRoom = (0, roomsValidator_1.validateRoom)(newRoom);
    if (validRoom.length === 0) {
        const createdRoom = (0, rooms_1.createRoomService)(newRoom);
        res.status(201).json(createdRoom);
    }
    else {
        res.status(403).json({ errors: validRoom });
    }
};
exports.createRoomController = createRoomController;
const updateRoomController = (req, res) => {
    const updatedData = req.body;
    const validRoom = (0, roomsValidator_1.validateRoom)(updatedData);
    if (validRoom.length === 0) {
        const updatedRoom = (0, rooms_1.updateRoomService)(updatedData);
        res.status(201).json(updatedRoom);
    }
    else {
        res.status(403).json({ errors: validRoom });
    }
};
exports.updateRoomController = updateRoomController;
const deleteRoomController = (req, res) => {
    const roomToDeleteID = parseInt(req.params.id);
    if (isNaN(roomToDeleteID)) {
        res.status(400).send({ message: "The parameter is not a room id" });
    }
    const deletedRoom = (0, rooms_1.deleteRoomService)(roomToDeleteID);
    if (deletedRoom) {
        res.json("Room deleted");
    }
    else {
        res.status(404).json("Room not found");
    }
};
exports.deleteRoomController = deleteRoomController;
