import React, { PropTypes } from 'react';
import Modal from 'react-modal';

const LoginModal = ({isOpen}) => {
  return (
    <Modal isOpen={isOpen}>
      <h2>Login modal title</h2>
      <section>Login modal content</section>
    </Modal>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default LoginModal;
