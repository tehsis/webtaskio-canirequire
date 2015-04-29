var fs = require('fs');
var natives = Object.keys(process.binding("natives")).filter(function(nativeDep) {
  return nativeDep[0] !== '_';
}).map(function(native) {
  return {version: 'native', name: native};
});

return function(cb) {
  cb(null, {
    node_version: process.version,
    modules: natives.concat(fs.readdirSync(__dirname + '/node_modules')
      .filter(function(dir) {
        return dir[0] !== '.';
      })
      .map(function(dep) {
        var depObj = JSON.parse(fs.readFileSync(__dirname + '/node_modules/' + dep + '/package.json'));
        return {
  	      name : depObj.name,
  	      version: depObj.version,
          homepage: depObj.homepage
        };
      }))
    });
};
