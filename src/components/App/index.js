import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginModal from '../../components/LoginModal';

import { openLoginModal, closeLoginModal } from './actions';

const App = ({isLoginModalOpen, dispatch, children}) => (
  <section className="wrapper">
    <Header />
    <main className="main-section">{children}</main>
    <Footer />
    <LoginModal isOpen={isLoginModalOpen} onClose={e => dispatch(closeLoginModal())}/>
  </section>
);

App.propTypes = {
  isLoginModalOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const mapStateToProps = ({ app }) => {
  let { loginModal } = app;
  return {
    isLoginModalOpen: loginModal.isOpened
  };
};

export default connect(mapStateToProps)(App);
