import mongoose from "mongoose";
import { User } from "../interfaces/UserInterfaces";

const UserSchema = new mongoose.Schema<User>({
    id: {type: Number, require: true, unique: true},
    user: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    passwd: {type: String, require: true},
    token: {type: String, require: true}
});

export default mongoose.model("User", UserSchema);