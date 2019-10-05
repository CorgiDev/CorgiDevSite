import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
              <footer>
                  <a href="http://twitter.com/thecorgidev" aria-label="Link to my twitter"><FontAwesomeIcon icon={['fab', 'twitter-square']} size = "2x"/></a>
                  <a href="http://facebook.com/corgidev" aria-label="link to my Facebook"><FontAwesomeIcon icon={['fab', 'facebook-square']} size = "2x"/></a>
                  <p>&copy; 2019 Elizabeth Gray.</p>
              </footer>
        </div>
      )
   }
}