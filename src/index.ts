import express from "express";
import roomRoutes from "./controllers/roomsRoutes";
import loginRoutes from "./controllers/loginRoutes";
import { authenticateToken } from "./middleware/authentication";

const app = express();
const PORT = 5173;

app.use(express.json());
app.use("api/v1/login", loginRoutes);
app.use("api/v1/rooms", authenticateToken, roomRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});