const express = require("express");
const app = express();


//middleware --> pehle hi response send kar deta hai

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });


//app.use callback : random example:
app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});


//logger :- to log information 

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})

app.get("/", (req, res) => {
    res.send("Mai Hu Pranay, THE CODEGUY");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

