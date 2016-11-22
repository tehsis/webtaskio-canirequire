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

const manifest = require(Path.join(process.env.VERQUIRE_DIR, 'packages.json'));


const modules = _.reduce(manifest, (acc, versions, module_name) => {
     versions.forEach((version) => {
         const moduleObj = {
           name: module_name,
           version: version
         };
  
         acc.push(moduleObj);
     });
     
     return acc;
  }, [])
  .sort(abcsort);

module.exports = cb => {
    cb(null, {
        node_version: process.version,
        modules: natives.concat(modules)
    });
};
