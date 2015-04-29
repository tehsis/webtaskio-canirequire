import React from 'react';
import ModulesList from './src/ModulesList.jsx';
import Search from './src/search.jsx';

import modules from './modules.json';

Search.search = (e) => console.log(e.target.value);

let $searchInput = $('[name=modules-filter]');
let modulesList = React.render(<ModulesList modules={modules} />, $('#canirequire-modules')[0]);

$searchInput.on('input', function(e) {
  modulesList.setState({filter: $(this).val()});
});
