var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

var RosApi = require('node-routeros').RouterOSAPI;

var conn = new RosApi({
    host: 'id1.cbnet.team',
    user: 'ilhamridho',
    port: '',
    password: 'ilham1212',
});

var validator = require('express-validator');

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

let users = [
    { id: 1, username: 'ilhamridho', password: 'ilham1212', email: 'ilhamridho.ir@gmail.com' }
];

// Mock GET request to /users when param `searchText` is 'John'
mock.onGet("/users", { params: { searchText: "John" } }).reply(200, {
    users: users,
});

module.exports = function(app) {

    // Inner Auth

};