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
// app.use("/random", (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });

// ....................................................................................................................
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
});

// ACTIVITY :- API TOKEN AS QUERY STRING :- uper jab access milega api ko ussi ke baad data milega warna nhi 
app.get("/api", (req, res) => {
    res.send("data");
});
//..............................................................................................................................

//logger :- to log information 

// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

//404
app.use((req, res) => {
    res.send("page not found");
});

app.get("/", (req, res) => {
    res.send("Mai Hu Pranay, THE CODEGUY");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

