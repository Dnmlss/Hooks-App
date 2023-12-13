import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
import { CallBackHook } from './06-memos/CallBackHook';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	//<React.StrictMode>
	<CallBackHook />
	//</React.StrictMode>
);
