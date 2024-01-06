const express = require("express");
const app = express();
const profile = require("./routes/profile");
const skill = require('./routes/skill')

app.use(express.json({ extended: false }));

app.use("/api/profile", profile);
app.use("/api/skill", skill);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));