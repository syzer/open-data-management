var fs = require('fs');
var file = fs.readFileSync('be-municipalities.json', 'utf-8');
var data = JSON.parse(file);
console.log(JSON.stringify(data.objects.municipalities.geometries));
