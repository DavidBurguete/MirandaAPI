import express from "express";
import loginRoutes from "./routes/loginRoutes";
import roomRoutes from "./routes/roomsRoutes";
import bookingRoutes from "./routes/bookingsRoutes";
import usersRoutes from "./routes/usersRoutes";
import { authenticateToken } from "./middleware/authentication";

const app = express();
const PORT = 5173;

app.use(express.json());
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/rooms", authenticateToken, roomRoutes);
app.use("/api/v1/bookings", authenticateToken, bookingRoutes);
app.use("/api/v1/users", authenticateToken, usersRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});