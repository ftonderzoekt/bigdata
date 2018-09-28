var fs = require('fs');
var convert = require('xml-js');
var xml = require('fs').readFileSync('./fsd/fsd-latest.xml', 'utf8');
var options = {
                compact: true,
                ignoreDeclaration: true,
                alwaysArray: false,
                attributesKey: 'attributes'
              };
var result = convert.xml2js(xml, options);
var sanctions = '{ "sanctions" : ' + JSON.stringify(result.export.sanctionEntity) + ' }';

console.log(result);



fs.writeFile('./fsd/fsd.json', sanctions, 'utf8', function(err){
        if(err){
              console.log(err);
        } else {
              console.log('Everything went OK!');
        }});
