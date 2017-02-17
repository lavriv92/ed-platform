import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {hashHistory} from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from '../../components/Login';
import Notification from '../../components/Notification';
import state from "./state";

interface AppProps  {
  children: React.Component<any, any>,
  state: any,
  location: any
}

interface AppState {
  user: any
}

@inject(() => ({state}))
@observer
export default class App extends React.Component<AppProps, AppState> {
  render() {
    let {children} = this.props;

    return (
      <section className="wrapper">
        <Notification message="Hello message notification message"/>
        <Header />
        <main className="main-section">{children}</main>
        <Footer />
      </section>
    );
  }
}
