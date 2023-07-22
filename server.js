const express = require("express");

const app = express();

let count = 0;

app.get("/", (req, res) => {
    count = count + 1;
    res.send({ count })
});

app.listen(35999, function() {
    console.log("Server is listening on port 35981. Ready to accept requests!");
})