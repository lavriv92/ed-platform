class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value) {
    this.storage[key] = typeof value !== 'string' ? JSON.stringify(value) : value;
  }

  get(key) {
    return JSON.parse(this.storage[key]) || null;
  }

  remove(key) {
    delete this.storage[key];
  }
}

export default new LocalStorage();
