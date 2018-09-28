fs = require('fs');
var parser = require('xml2json');
console.log('Starting .....')

fs.readFile( './sdn/sdn_advanced.xml', function(err, data) {
    var json = parser.toJson(data, {
      trim: false
    });

    fs.writeFile('./sdn/sdn.json', json, 'utf8', function(err){
            if(err){
                  console.log(err);
            } else {
                  console.log('Everything went OK!');
            }});
 });
