const express = require("express");
const app = express();
const profile = require("./routes/profile");

app.use(express.json({ extended: false }));

app.use("/api/profile", profile);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));