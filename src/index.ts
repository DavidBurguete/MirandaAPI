import express from "express";
import loginRoutes from "./routes/loginRoutes";
import roomRoutes from "./routes/roomsRoutes";
import bookingRoutes from "./routes/bookingsRoutes";
import usersRoutes from "./routes/usersRoutes";
import contactRoutes from "./routes/contactsRoutes";
import { authenticateToken } from "./middleware/authentication";
import mongoose from "mongoose";
import serverless from "serverless-http";
var cors = require('cors')

const app = express();
const PORT = 5174;

app.use(express.json());
app.use(cors());
app.use("/api/v1/login", cors(), loginRoutes);
app.use("/api/v1/rooms", cors(), authenticateToken, roomRoutes);
app.use("/api/v1/bookings", cors(), authenticateToken, bookingRoutes);
app.use("/api/v1/users", cors(), authenticateToken, usersRoutes);
app.use("/api/v1/contact", cors(), authenticateToken, contactRoutes);

mongoose.connect(process.env.MONGODB_URL || '')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// export const handler = serverless(app);