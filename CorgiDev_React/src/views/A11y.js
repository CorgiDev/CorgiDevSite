import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class A11y extends Component {
    state = {
    }

    render() {
        return (
            <div id="wholePageContainer">
                <Header />
                <div id="wrapper">
                    <section id="a11yContent">
                        <h1 id="a11yTitle">Accessibility Resources and Information</h1>
                        <br />
                        <h2 class="a11ySubTitle">Why A11y?</h2>
                        <p>You may have seen the name of this page and been slightly confused. Why <b>A11y</b> instead of <b>Accessibility</b>? A11y is a numeronym for the word Accessibility. A <b>numeronym</b> is where you form an abbreviation for a word by replacing some letters with numbers. The end word may, or may not, be pronounced similar to the full word.</p>
                        <p><b>A11y</b> stands for the fact that Accessibility begins with the letter A, ends with the letter Y, and has 11 characters in between.</p>
                        <h2 class="a11ySubTitle">Guidelines & Standards</h2>
                        <dl class="siteList">
                            <dt><a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a></dt>
                            <dd>WCAG stands for Web Content Accessibility Guidelines. These are international guidelines developed by the W3C. Version 2.1 was released in June 2018.</dd>
                            <dt><a href="https://www.section508.gov/">Section 508</a></dt>
                            <dd>Section 508 of the Rehabilitation Act of 1973, handles accessibility of information and technology. They primarily apply to federal agencies and contractors. Section 508 received a refresh in January 2017.</dd>
                            <dt><a href="https://www.bbc.co.uk/guidelines/futuremedia/accessibility/">BBC Accessibility Standards and Guidelines</a></dt>
                            <dd>The following description is quoted from the BBC page. The BBC HTML Accessibility Standards and BBC Mobile Accessibility Standards and Guidelines outline the requirements and recommendations necessary for ensuring the BBC's digital products are accessible to the widest possible audience.</dd>
                        </dl>

                        <h2 class="a11ySubTitle">Learning Opprotunities</h2>
                        <dl class="siteList">
                            <dt><a href="https://uebonline.org/">UEB Online</a></dt>
                            <dd>A free online course in Braille. Great for those who just wish to learn or those who wish to make Braille a part of their career.</dd>
                            <dt><a href="https://teamtreehouse.com/library/web-accessibility-compliance">(Treehouse Course) Web Accessibility Compliance</a></dt>
                            <dd>This course provides a wonderful overview of Accessibility standards, guidelines, methods, testing, and more. This course requires a Treehouse subscription for access. If you live near Louisville, KY, you may be able to get a free subscription through the <a href="http://lfpl.org">Louisville Free Public Library</a>.</dd>
                            <dt><a href="https://app.pluralsight.com/library/courses/web-accessibility-getting-started/table-of-contents">(PluralSight Course) Web Accessibility: Getting Started</a></dt>
                            <dd> Accessing this course requires a PluralSight subscription.</dd>
                            <dt><a href="https://app.pluralsight.com/library/courses/web-accessibility-meeting-guidelines/table-of-contents">(PluralSight Course) Meeting Web Accessibility Guidelines (Section 508/ WCAG 2.1)</a></dt>
                            <dd>This course covers meeting a variety of Accessibility guidelines like WCAG and Section 508. Accessing this course requires a PluralSight subscription.</dd>
                            <dt><a href="https://app.pluralsight.com/library/courses/web-form-accessible/table-of-contents">(PluralSight Course) Making a Web Form Accessible</a></dt>
                            <dd>This course covers methods you can use to make web forms accessible with an example case study you can follow along with.  Accessing this course requires a PluralSight subscription.</dd>
                        </dl>

                        <h2 class="a11ySubTitle">Information Resources</h2>
                        <dl class="siteList">
                            <dt><a href="https://moritzgiessmann.de/accessibility-cheatsheet/">Moritz Geissmann's Accessibility Cheatsheet</a></dt>
                            <dd>This is an awesome cheat sheet made by Moritz Geissman. It makes for a great condensed poster you can have available for quick reference.</dd>
                            <dt><a href="https://www.creativebloq.com/advice/8-steps-to-inclusive-web-design">8 Steps to Inclusive Web Design</a></dt>
                            <dd>The 8 steps in this article give you a good idea of how to prepare to design an accessible site.</dd>
                            <dt><a href="https://aphaccessibility.com/">APH Accessibility Hub</a></dt>
                            <dd>An awesome resource created by the Accessibility Comittee at the American Printing House for the Blind.</dd>
                            <dt><a href="https://www.aph.org">American Printing House for the Blind</a></dt>
                            <dd>The American Printing House is an amazing non-profit that specializes in educational aids, books, audio content, and more for indiviudals with visual accessibility needs. They have been serving the blind and visually impaired community for over 160 years. You can learn about visual accessibility in so many ways from them.</dd>
                            <dt><a href="https://www.visionaware.org/default.aspx">VisionAware</a></dt>
                            <dd>VisionAware is a great resouce for those in the process of losing their sight, as well as their friends and family.</dd>
                            <dt><a href="http://www.bbc.co.uk/accessibility/">BBC's My Web My Home page</a></dt>
                            <dd>This page is archived and no longer being updated, but still serves as a great reference page to see Accessibility information divided up into different categories based on need.</dd>
                            <dt><a href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/">Dos and Don'ts on Designing for Accessibility</a></dt>
                            <dd>This is a great blog post of some example dos and don'ts to keep in mind when designing for Accessibility, and some amazing reference posters.</dd>
                        </dl>

                        <h2 class="a11ySubTitle">Videos</h2>
                        <dl class="siteList">
                            <dt><a href="https://www.youtube.com/watch?time_continue=185&v=-O5b529V96g">Adrian Roselli - Selfish Accessibility</a></dt>
                            <dd>This is Adrian Roselli's Selfish Accessibility presentation that he presented during the <i>You Gotta Love Frontend Conference 2019</i>.</dd>
                        </dl>

                        <h2 class="a11ySubTitle">My Presentations</h2>
                        <dl class="siteList">
                            <dt><a href="https://www.slideshare.net/ElizabethGray29/accessible-technology-support">Accessible Support & Technology</a></dt>
                            <dd>Sought to help people be more aware of how important accessibility is, teach ways they can keep accessibility in mind wherever they go, and make the entire subject a little less overwhelming.</dd>
                            <dt><a href="https://www.slideshare.net/ElizabethGray29/introduction-to-accessibility-165845667">Introduction to Accessibility</a></dt>
                            <dd>A general overview of the topic of Accessibility. Covers the general idea of what Accessibility is, its importance, the value it has for everyone, and ways anyone can work towards improving it everywhere.</dd>
                        </dl>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}