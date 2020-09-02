import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import LoginPage from './screens/Login';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/" component={LoginPage} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
