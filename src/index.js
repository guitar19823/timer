import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Timer from './components/timer';
import store from './store';

import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Timer />
	</Provider>,
	document.getElementById('app')
);