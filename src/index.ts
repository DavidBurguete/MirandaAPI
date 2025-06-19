import express from "express";
import loginRoutes from "./routes/loginRoutes";
import roomRoutes from "./routes/roomsRoutes";
import bookingRoutes from "./routes/bookingsRoutes";
import usersRoutes from "./routes/usersRoutes";
import contactRoutes from "./routes/contactsRoutes";
import { authenticateToken } from "./middleware/authentication";
import mongoose from "mongoose";
import serverless from "serverless-http";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
var cors = require('cors')

const app = express();

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

export const handler = serverless(app, {
  request: (req: Request, event: APIGatewayProxyEvent, context: Context) => {
    if (event.body) {
      try {
        const rawBody = event.isBase64Encoded
          ? Buffer.from(event.body, "base64").toString("utf8")
          : event.body;

        (req as any).body = JSON.parse(rawBody);
      } catch (error) {
        console.error("Failed to parse body:", error);
        (req as any).body = {};
      }
    }
  },
});