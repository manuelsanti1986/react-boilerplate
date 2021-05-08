const path = require('path');
const express = require("express");

const publicPath = path.join(__dirname, "..", "dist");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("Server is up: http://localhost:" + port );
});
