const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

//@Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//@Routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/auth", authRoute);

// @MongoDB connection (async/await)
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to Database");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        
    }
})();



//@Server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

