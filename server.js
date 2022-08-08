const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();

// CORS Middleware Options
const corsOption = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOption));

// Content Type: application/json
app.use(express.json());

// Root Route
app.get("/", (_req, res) => {
  res.json({
    message: "REST APIs for DataTable Assignment.",
  })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Back-End running on port - ${PORT}`);
});