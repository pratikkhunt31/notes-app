const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/note');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDBPath = "mongodb+srv://pratik:test1234@noteapp.r5v9qa0.mongodb.net/notesdb";
mongoose.connect(mongoDBPath)
    .then(function() {
        app.get("/", function(req, res) {
            const response = { statusCode: res.statusCode, message: "API Works!" };
            res.json(response);
        });

        const noteRouter = require('./routes/Note');
        app.use('/notes', noteRouter);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server Started At PORT " + PORT);
});
