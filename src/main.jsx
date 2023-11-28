import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHook';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterWithCustomHooks />
	</React.StrictMode>
);
