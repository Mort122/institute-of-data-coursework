const express = require("express")
const app = express();
const dbConnect = require("./dbConnect");
require("dotenv").config();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});


const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
