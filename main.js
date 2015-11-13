/**
 * Created by Default on 2015/11/13.
 */
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb:localhost:20717/test";

MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected OK.");

	db.close();
});
