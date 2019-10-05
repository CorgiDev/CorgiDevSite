import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

//Images for page
import rinaTokyo from '../img/japan.jpg';
import kabukizaThumb from '../img/kabukiza.jpg';
//import kabukizaFull from '../img/kabukiza-full.jpg';
import ghibliThumb from '../img/ghibli.jpg';
//import ghibliFull from '../img/ghibli-full.jpg';
import rolexesThumb from '../img/rolexes.jpg';
//import rolexesFull from '../img/rolexes-full.jpg';
//import zeldaFull from '../img/zelda-full.jpg';
import zeldaThumb from '../img/zelda.jpg';

export default class Home extends Component {
    state = {
    }

    render() {
        return (
            <div id="wholePageContainer">
                <Header />
                <div id="wrapper">
                    <h1 class="mainHeadline">Welcome to CorgiDev!</h1>
                    <section>
                        <dl id="gallery"> 
                            <dt>
                                <img src={rinaTokyo} alt="" />
                                    <figcaption>My friend Rina, my boyfriend Mitch, and I in Tokyo, Japan.</figcaption>
                            </dt>
                            <dt>
                                <img src={kabukizaThumb} alt="" />
                                    <figcaption>Photo of me with a woman in a beautiful kimono at a shop in Kubukiza.</figcaption>
                            </dt>
                            <dt>
                                <img src={ghibliThumb} alt="" />
                                <figcaption>Photo of me in front of the Laputa robot statue at the Ghibli Museum in Mikata, Tokyo, Japan.</figcaption>
                            </dt>
                            <dt>
                                <img src={rolexesThumb} alt="" />
                                <figcaption>Me at the Rolexes near Lexington, KY in 2016.</figcaption>
                            </dt>
                            <dt>
                                <img src={zeldaThumb} alt="" />
                                <figcaption>A screenshot of Link next to the Giant Horse in the Nintendo Switch game "Legend of Zelda: Breath of the Wild".</figcaption>
                            </dt>
                        </dl>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}