# Miranda API REST for the Dashboard

As the name says, it's an API to manage the connection between the database \([MongoDB](https://www.mongodb.com/products/platform/atlas-database)) and the Dashboard. I used [`Postman`](https://www.postman.com/downloads/) to test out the app.

The following paths are the working routes for the API and it's methods:

### LOGIN
- **<span style="color:#FFE47EFF">POST</span>** /api/v1/login

### ROOMS
- **<span style="color:#6BDD9AFF">GET</span>** /api/v1/rooms
- **<span style="color:#FFE47EFF">POST</span>** /api/v1/rooms/new
- **<span style="color:#74AEF6FF">PUT</span>** /api/v1/rooms/:id
- **<span style="color:#F79A8EFF">DELETE</span>** /api/v1/rooms/:id

### USERS
- **<span style="color:#6BDD9AFF">GET</span>** /api/v1/users
- **<span style="color:#FFE47EFF">POST</span>** /api/v1/users/new
- **<span style="color:#74AEF6FF">PUT</span>** /api/v1/users/:id
- **<span style="color:#F79A8EFF">DELETE</span>** /api/v1/users/:id

### BOOKINGS
- **<span style="color:#6BDD9AFF">GET</span>** /api/v1/bookings
- **<span style="color:#FFE47EFF">POST</span>** /api/v1/bookings/new
- **<span style="color:#74AEF6FF">PUT</span>** /api/v1/bookings/:id
- **<span style="color:#F79A8EFF">DELETE</span>** /api/v1/bookings/:id

### CONTACTS / MESSAGES
- **<span style="color:#6BDD9AFF">GET</span>** /api/v1/contact
- **<span style="color:#74AEF6FF">PUT</span>** /api/v1/contact/:id
