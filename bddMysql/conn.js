const express = require('express');
const mysql = require('mysql2');
const config = require('./config.json');
const conn = mysql.createPool(config);
module.exports = conn