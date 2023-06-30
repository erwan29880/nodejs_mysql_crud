const express = require('express');
const mysqlModule = require('../bddMysql/requetes');

exports.mysql = (req, res) => {
    res.render("mysql");
};

exports.mysqlGet = (req, res) => {
    const bdd = new mysqlModule();
    bdd.getData()
    .then((rows) => res.status(200).json(rows));
};

exports.mysqlPost = async (req, res, next) => {
    const bdd = new mysqlModule();
    bdd.insertData(req.body);
};

exports.mysqlPut = async (req, res) => {
    const bdd = new mysqlModule();
    bdd.updateData(req.body)
    .then(res.status(200).json({message: "ok"}));
};

exports.mysqlDel = async (req, res) => {
    const bdd = new mysqlModule();
    console.log(req.body)
    bdd.deleteData(req.body)
    .then(res.status(200).json({message: req.body}));
};
