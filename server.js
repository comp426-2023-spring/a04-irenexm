#!usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});

// random rps shot
app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
});

// random rpsls shot
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
});

// play rps
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot))).end();
});

// play rpsls
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot))).end();
});

// play rps
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
});

// play rpsls
app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
});

// play rps with shot
// /app/rpsls/play/scissors leads to shot = scissors
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot))).end();
});

// play rpsls with shot
app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot))).end();
});

// catch-all endpoint, throw 404 error for other requests
app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
});

// start the server and listen to http requests
app.listen(port);




