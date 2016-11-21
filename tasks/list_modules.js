const Fs = require('fs');
const Path = require('path');
const _ = require('lodash');

const abcsort = function (a, b) {
  if (a.name < b.name) {
      return -1;
  }

  if (a.name > b.name) {
      return 1;
  }

  return 0;
};


const natives = Object.keys(process.binding("natives"))
    .filter(nativeDep => nativeDep[0] !== '_')
    .map(dep => ({name: dep, version: 'native'}))
    .sort(abcsort);


const modules = _(require(Path.join(process.env.VERQUIRE_DIR, 'packages.json')))
  .map((versions, module_name) => {
     return versions.map((version) => {
         const moduleObj = {
           name: module_name,
           version: version
         };
  
         return moduleObj;
     });
  })
  .flatten()
  .sort(abcsort);

module.exports = cb => {
    cb(null, {
        node_version: process.version,
        modules: natives.concat(modules)
    });
};
