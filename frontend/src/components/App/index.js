import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginModal from '../../components/LoginModal';

import { openLoginModal, closeLoginModal } from './actions';

import './styles.css';

const App = ({isLoginModalOpen, dispatch, children}) => (
  <section className="wrapper">
    <Header />
    <button onClick={e => dispatch(openLoginModal())}>Open modal</button>
    <main className="main-section">{children}</main>
    <Footer />
    <LoginModal isOpen={isLoginModalOpen} onClose={e => dispatch(closeLoginModal())}/>
  </section>
);

const mapStateToProps = ({appReducers}) => {
  let { loginModal } = appReducers;
  return {
    isLoginModalOpen: loginModal.isOpened
  };
};

export default connect(mapStateToProps)(App);
