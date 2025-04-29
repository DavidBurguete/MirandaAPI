"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumRoomStatus = exports.enumAmenities = exports.enumRoomType = void 0;
var enumRoomType;
(function (enumRoomType) {
    enumRoomType["SingleBed"] = "Single Bed";
    enumRoomType["DoubleBed"] = "Double Bed";
    enumRoomType["DoubleSuperior"] = "Double Superior";
    enumRoomType["Suite"] = "Suite";
})(enumRoomType || (exports.enumRoomType = enumRoomType = {}));
var enumAmenities;
(function (enumAmenities) {
    enumAmenities["TV"] = "TV";
    enumAmenities["Fridge"] = "Fridge";
    enumAmenities["Bathtub"] = "Bathtub";
    enumAmenities["SeaView"] = "Sea View";
    enumAmenities["AirConditioner"] = "Air Conditioner";
})(enumAmenities || (exports.enumAmenities = enumAmenities = {}));
var enumRoomStatus;
(function (enumRoomStatus) {
    enumRoomStatus["Available"] = "Available";
    enumRoomStatus["Booked"] = "Booked";
})(enumRoomStatus || (exports.enumRoomStatus = enumRoomStatus = {}));
