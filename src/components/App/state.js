import localStorage from '../../common/local-storage';

class App {
  constructor() {
    this.user = null;
  }

  login({email, password}) {
    return new Promise((resolve) => {
      let user = {
        token: 'some-edited-token',
        email: email,
        password: password,
        firstName: 'Test',
        lastName: 'User'
      };
      localStorage.set('user', user);
      setTimeout(() => {
        resolve(user);
      }, 1000);
    });
  }

  logout() {
    localStorage.remove('user');
    this.user = null;
  }

  currentUser() {
    this.user = localStorage.get('user');
    return this.user;
  }
}

export default new App();
