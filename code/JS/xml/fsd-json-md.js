var fs = require('fs');
var convert = require('xml-js');
var xml2js = require('xml2js')
var xml = require('fs').readFileSync('./fsd/fsd-latest.xml', 'utf8');
var options = {
                compact: true,
                ignoreDeclaration: true,
                alwaysArray: false,
                attributesKey: 'attributes'
              };
var result = convert.xml2js(xml, options);
var sanctions = JSON.stringify(result.export.sanctionEntity);

console.log(result);

fs.writeFile('test.json', sanctions, 'utf8', function(err){
        if(err){
              console.log(err);
        } else {
              console.log('Everything went OK!');
        }});

var parser = new xml2js.Parser( { mergeAttrs: true } );
    parser.parseString(xml, function (err, result) {
      var data = JSON.stringify(result.export.sanctionEntity);
      fs.writeFile('test2.json', data, 'utf8', function(err){
              if(err){
                    console.log(err);
              } else {
                    console.log('Done');
              }});
    });
