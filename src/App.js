import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/App.css';
import NavBar from './components/navbar/navbar';
import Loading from './components/Loading/loading';
// import Clients from './components/clients/clients';
// import Actions from './components/actions/actions';
// import Analytics from './components/analytics/analytics';
// import Home from './components/home/home';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<NavBar />
					<Suspense fallback={() => <Loading />}>
						<Route
							path='/'
							exact
							component={lazy(() => import('./components/home/home'))}
						/>
						<Route
							path='/clients'
							exact
							component={lazy(() => import('./components/clients/clients'))}
						/>
						<Route
							path='/actions'
							exact
							component={lazy(() => import('./components/actions/actions'))}
						/>
						<Route
							path='/analytics'
							exact
							component={lazy(() => import('./components/analytics/analytics'))}
						/>
					</Suspense>
				</div>
			</Router>
		);
	}
}

export default App;
