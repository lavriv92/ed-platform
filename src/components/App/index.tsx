import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {hashHistory} from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from '../../components/Login';
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

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  render() {
    let {children, state} = this.props;

    console.log(this.props.location.path)

    if (!state.isLogined && this.props.location.pathname !== '/signin')  {
      hashHistory.push('signin')
    }

    return (
      <section className="wrapper">
        <Header />
        <main className="main-section">{children}</main>
        <Footer />
      </section>
    );
  }
}
