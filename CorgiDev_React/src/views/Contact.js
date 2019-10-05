import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                            <li><a href="https://www.linkedin.com/in/corgidev/"><FontAwesomeIcon icon={['fab', 'linkedin']} />Elizabeth Gray LinkedIn Profile</a></li>
                            <li><a href="mailto:egray@corgidev.com?subject=Email from CorgiDev site"><FontAwesomeIcon icon={['fab', 'paper-plane']} />egray@corgidev.com</a></li>
                            <li><a href="https://twitter.com/intent/tweet?screen_name=thecorgidev"><FontAwesomeIcon icon={['fab', 'twitter-square']} />@TheCorgiDev</a></li>
                            <li><a href="https://github.com/CorgiDev" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} />CorgiDev GitHub Profile</a></li>
                        </ul>
                    </section>

                    <section id="secondary">
                        <img src="img/CorgidevLogo.png" class="corgiLogo" alt="Corgidev Logo" />
                    </section>
					<Footer />
				</div>
			</div>
		)
	}
}
