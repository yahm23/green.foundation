import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider>
        <App/>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
