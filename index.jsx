import React from 'react';
import ModulesList from './src/ModulesList.jsx';

let $searchInput = $('[name=modules-filter]');
let modulesList = React.render(<ModulesList />, $('#canirequire-modules')[0]);

$searchInput.on('input', function(e) {
  modulesList.setState({filter: $(this).val()});
});
