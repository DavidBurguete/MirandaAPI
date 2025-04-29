import express from "express";
import loginRoutes from "./routes/loginRoutes";
import roomRoutes from "./routes/roomsRoutes";
import bookingRoutes from "./routes/bookingsRoutes";
import usersRoutes from "./routes/usersRoutes";
import contactRoutes from "./routes/contactsRoutes";
import { authenticateToken } from "./middleware/authentication";
import serverless from "serverless-http";

const app = express();

app.use(express.json());
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/rooms", authenticateToken, roomRoutes);
app.use("/api/v1/bookings", authenticateToken, bookingRoutes);
app.use("/api/v1/users", authenticateToken, usersRoutes);
app.use("/api/v1/contact", authenticateToken, contactRoutes);

export const handler = serverless(app);