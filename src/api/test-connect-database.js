"use strict";
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@host:port/database')

module.exports = async (req, res, next) => {

  db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
}