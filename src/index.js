import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from "@auth0/auth0-react";

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

import Layout from './components/Layout';

ReactDOM.render(
	<Auth0Provider 
		domain="dev-vzf4l6cw.us.auth0.com"
		clientId="EcEokGdJAJ7PakZopUPZwwX4BlIZwzK4"
		redirectUri={window.location.origin}
		cacheLocation="localstorage"
	>
		<Provider store={store}>
			<Layout />
		</Provider>
	</Auth0Provider>,
	document.getElementById('root')
);

