import React from 'react';
import ModulesList from './src/ModulesList.jsx';

import modules from './modules.json';

React.render(<ModulesList modules={modules} />, document.getElementById('canirequire-modules'));
