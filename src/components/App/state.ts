import localStorage from '../../common/local-storage';

class App {
  constructor() {
    this.user = null;
  }

  login({email, password}) {
    let user = {
      token: 'some-edited-token',
      email: email,
      password: password,
      firstName: 'Test',
      lastName: 'User'
    };
    localStorage.set('user', user);
    this.user = localStorage.get('user');
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
