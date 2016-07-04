const Fs = require('fs');
const Verquire = require('verquire');
const _ = require('lodash');


const natives = Object.keys(process.binding("natives"))
    .filter(nativeDep => nativeDep[0] !== '_')
    .reduce((natives, name) => {
        natives[name] = { name, versions: ['native'] };
        
        return natives;
    }, {});
const versions = module.paths.reduce((versions, basePath) => {
    try {
        Fs.readdirSync(basePath)
            .filter(name => name[0] !== '.')
            .forEach(name => {
                const packageJson = require(`${basePath}/${name}/package.json`);
                
                if (!versions[name]) {
                    versions[name] = {
                        name,
                        versions: [],
                        homepage: packageJson.homepage,
                    };
                }
                
                versions[name].versions.push(packageJson.version);
                
                _.forEach(Verquire.modules[name], version => {
                    if (versions[name].versions.indexOf(version) === -1) {
                        versions[name].versions.push(version);
                    }
                });
            });
    } catch (e) {
        if (e.code !== 'ENOENT') {
            console.warn('WARN', e.message);
        }
    }
    
    return versions;
}, natives);
const modules = _.reduce(versions, (modules, entry) => {
    entry.versions.forEach(version => modules.push({
        name: entry.name,
        homepage: entry.homepage,
        version,
    }));
    
    return modules;
}, []);


module.exports = cb => {
    cb(null, {
        node_version: process.version,
        modules,
    });
};
