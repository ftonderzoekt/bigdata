/*
 * Copyright (c) 2017 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Written with: mongodb@3.0.2
 * Documentation: https://mongodb.github.io/node-mongodb-native/
 * A Node script connecting to a MongoDB database given a MongoDB Connection URI.
*/

const mongodb = require('mongodb');
const util = require('util');

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname

let uri = 'mongodb://test:test545@ds119503.mlab.com:19503/salustest';

mongodb.MongoClient.connect(uri, function(err, client) {

  if(err) throw err;

  /*
   * Get the database from the client. Nothing is required to create a
   * new database, it is created automatically when we insert.
   */

  let db = client.db('salustest')

  /*
   * First we'll add a few songs. Nothing is required to create the
   * songs collection; it is created automatically when we insert.
   */

  let sanctions = db.collection('sanctions_test').aggregate( [
    { $match : { $or: [ { "nameAlias.firstName" : "Mugabe" }, { "nameAlias.lastName" : "Mugabe" } ] } },
    { $unwind : "$nameAlias" }

  ] );

   // Note that the insert method can take either an array or a dict.


  sanctions.toArray(function (err, docs) {

     // console.log(util.inspect(docs, false, null));
     if(err) throw err;
     docs.forEach(function (doc) {
       console.log(
         'Doc ID: ' +
         JSON.stringify(doc._id) +
         ', Logical ID: ' +
         JSON.stringify(doc.logicalId) +
         ', Subject type: ' +
         JSON.stringify(doc.subjectType[0].code) +
         ', First name: ' +
         JSON.stringify(doc.nameAlias.firstName) +
         ', Last name: ' +
         JSON.stringify(doc.nameAlias.lastName) +
        ', Whole name: ' +
         JSON.stringify(doc.nameAlias.wholeName)
       );
     });

     // Since this is an example, we'll clean up after ourselves.
     // songs.drop(function (err) {
     //   if(err) throw err;
     //
       // Only close the connection when your app is terminating.
       client.close(function (err) {
         if(err) throw err;
       });
   });
});
