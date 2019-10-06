import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import corgiDevLogo from '../img/CorgidevLogo.png';

export default class Contact extends Component {
	state = {
	}

	render() {
		return (
			<div id="wholePageContainer">
				<Header />
                <div id="wrapper">
                    <section id="primary">
                        <h3>General Information</h3>
                        <p>I am not currently looking for any new employment opprotunities, but I am available for speaking engagements and other events. If you have questions, don't hesitate to contact me!</p>
                        <p> Email and LinkedIn are the best ways to reach me.</p>

                        <h3>Contact Details</h3>
                        <ul class="contact-info">
                            <li><a href="https://www.linkedin.com/in/corgidev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/>Elizabeth Gray LinkedIn Profile</a></li>
                            <li><a href="mailto:egray@corgidev.com?subject=Email from CorgiDev site"><FontAwesomeIcon icon={['fas', 'paper-plane']} size="lg"/>Egray@corgidev.com</a></li>
                            <li><a href="https://twitter.com/intent/tweet?screen_name=thecorgidev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']} size="lg"/>@TheCorgiDev</a></li>
                            <li><a href="https://github.com/CorgiDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/>CorgiDev GitHub Profile</a></li>
                        </ul>
                    </section>

                    <section id="secondary">
                        <img src={corgiDevLogo} class="corgiLogo" alt="Corgidev Logo" />
                    </section>
					<Footer />
				</div>
			</div>
		)
	}
}
