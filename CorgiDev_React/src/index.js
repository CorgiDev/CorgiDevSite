import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as contentful from 'contentful'

var client = contentful.createClient({
    space: 'Stored in PasswordSafe',
    accessToken: 'Stored in PasswordSafe' })
  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        console.log(entry.fields)
      }
    })
  })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
