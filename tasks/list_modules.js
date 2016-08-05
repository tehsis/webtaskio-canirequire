'use npm';
const Fs = require('fs');
const Verquire = require('verquire');
const _ = require('lodash@4.8.2');

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


const modules = _.flatMap(Verquire.modules, (versions, module_name) => {
   return versions.map((version) => {
       const moduleObj = {
         name: module_name,
         version: version
       };

       return moduleObj;
   });
}).sort(abcsort);

module.exports = cb => {
    cb(null, {
        node_version: process.version,
        modules: natives.concat(modules)
    });
};
