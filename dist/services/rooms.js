"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomService = exports.updateRoomService = exports.createRoomService = exports.getOneRoomService = exports.getAllRoomsService = void 0;
const rooms = require("../data/Rooms.json");
const getAllRoomsService = () => {
    return rooms;
};
exports.getAllRoomsService = getAllRoomsService;
const getOneRoomService = (id) => {
    return rooms.find((room) => room.room_id === id);
};
exports.getOneRoomService = getOneRoomService;
const createRoomService = (newRoom) => {
    const room = Object.assign({}, newRoom);
    rooms.push(room);
    return rooms;
};
exports.createRoomService = createRoomService;
const updateRoomService = (updatedRoom) => {
    rooms[updatedRoom.room_id] = Object.assign({}, updatedRoom);
    return rooms[updatedRoom.room_id];
};
exports.updateRoomService = updateRoomService;
const deleteRoomService = (roomID) => {
    const indexOfRoom = rooms.findIndex((room) => room.room_id === roomID);
    if (indexOfRoom !== -1) {
        rooms.splice(indexOfRoom, 1);
        return true;
    }
    return false;
};
exports.deleteRoomService = deleteRoomService;
