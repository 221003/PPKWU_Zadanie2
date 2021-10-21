var express = require("express");
var app = express();

const { hasUpperCase, hasLowerCase, hasSpecialChar, hasWhiteSpace, countUpperCase, countLowerCase, countSpecialChar, countWhiteSpace } = require("./helpers");

app.get("/api/string/:text/length", (req, res) => {
    const { text } = req.params;

    let result = text.length;

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/contain/uppercase", (req, res) => {
    const { text } = req.params;

    let result = hasUpperCase(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/contain/lowercase", (req, res) => {
    const { text } = req.params;

    let result = hasLowerCase(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/contain/specialchar", (req, res) => {
    const { text } = req.params;

    let result = hasSpecialChar(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/contain/whitespace", (req, res) => {
    const { text } = req.params;

    let result = hasWhiteSpace(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/validate/number", (req, res) => {
    const { text } = req.params;

    let result = !isNaN(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/validate/number", (req, res) => {
    const { text } = req.params;

    let result = !isNaN(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/count/uppercase", (req, res) => {
    const { text } = req.params;

    let result = countUpperCase(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})


app.get("/api/string/:text/count/lowercase", (req, res) => {
    const { text } = req.params;

    let result = countLowerCase(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})


app.get("/api/string/:text/count/specialchar", (req, res) => {
    const { text } = req.params;

    let result = countSpecialChar(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})

app.get("/api/string/:text/count/whitespace", (req, res) => {
    const { text } = req.params;

    let result = countWhiteSpace(text);

    res.status = 200;
    res.json({ status: "success", data: result });
})





app.listen(3000, () => {
 console.log("Server running");
});