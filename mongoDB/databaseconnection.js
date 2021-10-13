const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config({ path: '../.env'});
const CompilerFactory = require('./core/compiler/compiler_factory');
const Url = require('./model/url_model');


mongoose.connect('mongodb://localhost:27017/compiler')
    .then(db => console.info('DB is connected'))
    .catch(err => console.info('Error...'))

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = '../upload/';
        fs.mkdirSync(path, { recursive: true});
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    } 
});

const upload = multer({ storage: storage });

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));
