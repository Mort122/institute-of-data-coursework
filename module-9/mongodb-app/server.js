const express = require("express")
const app = express();
const dbConnect = require("./dbConnect");
require("dotenv").config();
const morgan = require("morgan");
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});



app.use('/api/users', userRoutes)
  
app.use('/api/posts', postRoutes); 


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


