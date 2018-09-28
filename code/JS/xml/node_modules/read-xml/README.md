# read-xml
[![NPM Version](http://img.shields.io/npm/v/read-xml.svg?style=flat-square)](https://npmjs.com/package/read-xml)
[![License](http://img.shields.io/npm/l/read-xml.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/bjrmatos/read-xml.png?branch=master)](https://travis-ci.org/bjrmatos/read-xml)

> **Read a xml file respecting its encoding information**

## Usage

simple-iso-8859-1.xml
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="no"?>
<test>
  <value>ácentó y la letra ñ<value>
</test>
```

Without this module the above xml file would be read incorrectly by the standard `fs` module, because node.js [only supports some encodings in its core](https://nodejs.org/dist/latest-v4.x/docs/api/buffer.html#buffer_buffer)

```xml
<!-- output produced by fs.readFile/fs.readFileSync -->
<?xml version="1.0" encoding="ISO-8859-1" standalone="no"?>
<test>
  <value>�cent� y la letra �<value>
</test>
```

### Basic API

```js
'use strict';

var fs = require('fs'),
    path = require('path'),
    xmlReader = require('read-xml');

var FILE = path.join(__dirname, 'test/xml/simple-iso-8859-1.xml');

// pass a buffer or a path to a xml file
xmlReader.readXML(fs.readFileSync(FILE), function(err, data) {
  if (err) {
    console.error(err);
  }

  console.log('xml encoding:', data.encoding);
  console.log('Decoded xml:', data.content);
});
```

### Streaming API

```js
'use strict';

var fs = require('fs'),
    path = require('path'),
    xmlReader = require('read-xml');

var FILE = path.join(__dirname, 'test/xml/simple-iso-8859-1.xml');

var decodedXMLStream = fs.createReadStream(FILE).pipe(xmlReader.createStream());

decodedXMLStream.on('encodingDetected', function(encoding) {
  console.log('Encoding:', encoding);
});

decodedXMLStream.on('data', function(xmlStr) {
  console.log(xmlStr);
});
```

## Supported encodings

All [encodings supported by iconv-lite](https://github.com/ashtuchkin/iconv-lite#supported-encodings)

## License
See [license](https://github.com/bjrmatos/read-xml/blob/master/LICENSE)
