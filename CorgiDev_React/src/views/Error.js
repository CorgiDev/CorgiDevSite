import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Error extends Component {
	state = {
	}

	render() {
		return (
			<div id="wholePageContainer">
				<Header />
				<div id="wrapper">
					<Footer />
				</div>
			</div>
		)
	}
}