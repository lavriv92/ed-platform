import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {hashHistory} from 'react-router';
import {injectState} from '../../common/connect';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Notification from '../Notification';
import AppStore from "./state";

interface AppProps  {
  children: React.Component<any, any>,
  store: any,
  location: any
}

interface AppState {
  user: any
}

@injectState(
  new AppStore
)
@observer
export default class App extends React.Component<AppProps, AppState> {
  render() {
    let { children, store: { user } } = this.props;

    return (
      <section className="wrapper">
        <h2>User: {user}</h2>
        <Notification message="Hello message notification message"/>
        <Header />
        <main className="main-section">{children}</main>
        <Footer />
      </section>
    );
  }
}
