'use npm';
const Fs = require('fs');
const Verquire = require('verquire');
const _ = require('lodash@4.8.2');


const natives = Object.keys(process.binding("natives"))
    .filter(nativeDep => nativeDep[0] !== '_')
    .map(dep => ({name: dep, version: 'native'}));


const modules = _.flatMap(Verquire.modules, (versions, module_name) => {
   return versions.map((version) => {
       const moduleObj = {
         name: module_name,
         version: version
       };

       return moduleObj;
   });
}).concat(natives);

module.exports = cb => {
    cb(null, {
        node_version: process.version,
        modules
    });
};