import localStorage from '../../common/local-storage';


class App {
  constructor() {
    this.state = {
      isLogined: false,
      user: null
    };
  }

  login() {
    return new Promise((resolve) => {
      let user = {
        token: 'some-edited-token',
        email: 'test@test.com',
        firstName: 'Test',
        lastName: 'User'
      };
      localStorage.set('user', user);
      setTimeout(() => {
        resolve(user);
      }, 1000);
    });
  }

  currentUser() {
    return localStorage.get('user');
  }
}

export default new App();
